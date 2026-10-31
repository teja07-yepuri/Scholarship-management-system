import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import SchemeModel from '../models/Scheme.js';
import CategoryModel from '../models/Category.js';
import ApplicationModel from '../models/Application.js';
import AdminModel from '../models/Admin.js';
import { seedCategories, seedSchemes, seedApplications } from '../data/seedData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/schemes_finder';

const seedDatabase = async () => {
  console.log('🌱 Starting comprehensive database seeding process...');

  const defaultAdminPassword = await bcrypt.hash('Admin@12345', 10);
  const defaultAdmin = {
    username: 'admin',
    email: 'admin@schemesfinder.gov.in',
    password: defaultAdminPassword,
    name: 'National Schemes Officer',
    role: 'superadmin',
  };

  let mongoConnected = false;
  try {
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 2500 });
    mongoConnected = true;
    console.log('✅ Connected to MongoDB. Seeding collections...');

    // Clear and re-populate
    await SchemeModel.deleteMany({});
    await CategoryModel.deleteMany({});
    await ApplicationModel.deleteMany({});

    await CategoryModel.insertMany(seedCategories);
    await SchemeModel.insertMany(seedSchemes);
    await ApplicationModel.insertMany(seedApplications);

    // Ensure default admin exists
    const existingAdmin = await AdminModel.findOne({ username: 'admin' });
    if (!existingAdmin) {
      await AdminModel.create(defaultAdmin);
    }

    console.log(`✅ MongoDB Seeded Successfully:`);
    console.log(`   - ${seedCategories.length} Categories`);
    console.log(`   - ${seedSchemes.length} Schemes & Scholarships`);
    console.log(`   - ${seedApplications.length} Application Tracking Records`);
    console.log(`   - Default Admin Verified (admin / Admin@12345)`);
    await mongoose.disconnect();
  } catch (err) {
    console.log('ℹ️  MongoDB offline or not reachable. Synchronizing Local JSON File DB (db.json)...');
  }

  // Ensure local JSON DB is populated and preserved
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  let existingAdmins = [
    {
      _id: 'file_adm_1',
      ...defaultAdmin,
      createdAt: new Date().toISOString(),
    },
  ];

  if (fs.existsSync(DB_FILE)) {
    try {
      const current = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
      if (current.admins && Array.isArray(current.admins) && current.admins.length > 0) {
        existingAdmins = current.admins;
      }
    } catch (e) {}
  }

  const jsonDb = {
    schemes: seedSchemes.map((s, idx) => ({
      ...s,
      _id: `file_sch_${idx + 1}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })),
    categories: seedCategories.map((c, idx) => ({
      ...c,
      _id: `file_cat_${idx + 1}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })),
    applications: seedApplications.map((a, idx) => ({
      ...a,
      _id: `file_app_${idx + 1}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })),
    admins: existingAdmins,
    users: [],
    savedSchemes: [],
    activityLogs: [
      {
        _id: 'file_log_seed',
        action: 'DATABASE_INITIALIZED',
        adminUsername: 'admin',
        targetType: 'System',
        targetId: '',
        targetName: 'SchemesFinder Portal',
        details: { message: `Seeded ${seedSchemes.length} schemes & ${seedCategories.length} categories` },
        createdAt: new Date().toISOString(),
      },
    ],
  };

  fs.writeFileSync(DB_FILE, JSON.stringify(jsonDb, null, 2), 'utf-8');
  console.log(`✅ Local File Database (${DB_FILE}) seeded successfully with:`);
  console.log(`   - ${seedCategories.length} Categories`);
  console.log(`   - ${seedSchemes.length} Schemes & Scholarships`);
  console.log(`   - ${seedApplications.length} Application Tracking Records`);
  console.log(`   - ${existingAdmins.length} Admin User(s)`);
  console.log('\n🎉 Ready! Default Admin Login Credentials:');
  console.log('   👤 Username / Email: admin (or admin@schemesfinder.gov.in)');
  console.log('   🔑 Password:         Admin@12345\n');

  process.exit(0);
};

seedDatabase();
