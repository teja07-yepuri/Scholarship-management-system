import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import AdminModel from '../models/Admin.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/schemes_finder';

const run = async () => {
  const args = process.argv.slice(2);
  const username = args[0] || 'admin';
  const email = args[1] || 'admin@schemesfinder.gov.in';
  const password = args[2] || 'Admin@12345';
  const name = args[3] || 'National Schemes Officer';

  console.log('🔐 Setting up initial Admin Account...');
  console.log(`👤 Username: ${username}`);
  console.log(`📧 Email:    ${email}`);
  console.log(`🔑 Password: ${password}`);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 1. Try MongoDB
  try {
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 2000 });
    console.log('✅ Connected to MongoDB.');

    await AdminModel.findOneAndDelete({ $or: [{ username }, { email }] });
    const mongoAdmin = new AdminModel({
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      name,
      role: 'superadmin',
    });
    await mongoAdmin.save();
    console.log('✅ Admin created in MongoDB successfully.');
    await mongoose.disconnect();
  } catch (err) {
    console.log('ℹ️  MongoDB not connected. Updating Local JSON DB...');
  }

  // 2. Local File DB
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  let db = { schemes: [], categories: [], admins: [] };
  if (fs.existsSync(DB_FILE)) {
    try {
      db = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
    } catch (e) {}
  }
  if (!db.admins) db.admins = [];

  // Remove duplicate
  db.admins = db.admins.filter((a) => a.username !== username && a.email !== email);
  db.admins.push({
    _id: `file_adm_${Date.now()}`,
    username: username.toLowerCase().trim(),
    email: email.toLowerCase().trim(),
    password: hashedPassword,
    name,
    role: 'superadmin',
    createdAt: new Date().toISOString(),
  });

  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  console.log('✅ Admin created in Local JSON DB successfully.');
  console.log('\n🎉 Setup Complete! You can now log into the Admin Dashboard using:');
  console.log(`   - Username / Email: ${username} (or ${email})`);
  console.log(`   - Password:         ${password}\n`);

  process.exit(0);
};

run();
