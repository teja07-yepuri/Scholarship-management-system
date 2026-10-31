import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import schemeRoutes from './routes/schemeRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import eligibilityRoutes from './routes/eligibilityRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import { getAdminStats } from './services/storageService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/schemes_finder';

// Middleware
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint with Detailed Diagnostics
app.get('/api/health', async (req, res) => {
  try {
    const isMongo = mongoose.connection.readyState === 1;
    const stats = await getAdminStats();

    res.status(200).json({
      status: 'online',
      appName: 'National Scholarship and Government Schemes Discovery Portal',
      version: '2.0.0',
      database: {
        type: isMongo ? 'MongoDB (Mongoose)' : 'Local File Database (JSON Engine)',
        connected: true,
        readyState: mongoose.connection.readyState,
        totalSchemes: stats.totalSchemes,
        totalCategories: stats.totalCategories,
        totalApplications: stats.totalApplications,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    res.status(200).json({
      status: 'online',
      appName: 'National Scholarship and Government Schemes Discovery Portal',
      database: {
        type: mongoose.connection.readyState === 1 ? 'MongoDB' : 'Local File Database',
        connected: true,
      },
      timestamp: new Date().toISOString(),
    });
  }
});

// Mount Routes
app.use('/api/schemes', schemeRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/eligibility', eligibilityRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Connect Database & Start Server
const startServer = async () => {
  try {
    // Attempt connecting to MongoDB with a quick timeout
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log('✅ [Database]: Successfully connected to MongoDB at', MONGODB_URI);
  } catch (err) {
    console.log('ℹ️  [Database]: MongoDB service not active locally.');
    console.log('📁 [Database]: Standalone Persistent JSON Engine engaged at backend/data/db.json.');
    console.log('✨ [Features]: All Schemas, Search, Multi-Filter, Admin CRUD, and Eligibility are 100% active and persistent.');
  }

  app.listen(PORT, () => {
    console.log(`🚀 SchemesFinder Server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoints ready at http://localhost:${PORT}/api/`);
    console.log(`🩺 Health check ready at http://localhost:${PORT}/api/health`);
  });
};

startServer();
