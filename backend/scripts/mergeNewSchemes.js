import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { newCategories, newSchemes } from './appendSchemes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const dbPath = path.join(root, 'data', 'db.json');
const seedDataPath = path.join(root, 'data', 'seedData.js');

// 1. Update db.json
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Add categories if not present
newCategories.forEach(cat => {
  const exists = db.categories.some(c => c.slug === cat.slug);
  if (!exists) {
    db.categories.push({
      _id: `file_cat_${db.categories.length + 1}`,
      ...cat,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    console.log(`Added category to db.json: ${cat.name}`);
  }
});

// Add schemes if not present
newSchemes.forEach(sch => {
  const exists = db.schemes.some(s => s.slug === sch.slug);
  if (!exists) {
    db.schemes.push({
      _id: `file_sch_${db.schemes.length + 1}`,
      ...sch,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    console.log(`Added scheme to db.json: ${sch.name}`);
  } else {
    console.log(`Scheme already exists in db.json: ${sch.name}`);
  }
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Updated db.json: Total schemes = ${db.schemes.length}, Total categories = ${db.categories.length}`);

// 2. Update seedData.js
let seedContent = fs.readFileSync(seedDataPath, 'utf8');

// Check and append categories
for (const cat of newCategories) {
  if (!seedContent.includes(`"${cat.slug}"`)) {
    const catMarker = 'export const seedCategories = [';
    const catStr = `  {\n    name: "${cat.name}",\n    slug: "${cat.slug}",\n    description: "${cat.description}",\n    icon: "${cat.icon}",\n    featured: ${cat.featured},\n  },\n`;
    seedContent = seedContent.replace(catMarker, `${catMarker}\n${catStr}`);
    console.log(`Appended category to seedData.js: ${cat.name}`);
  }
}

// Check and append schemes to seedSchemes
const seedSchemesEndMarker = 'export const seedApplications = [';
let schemesToAddCode = '';

for (const sch of newSchemes) {
  if (!seedContent.includes(`"${sch.slug}"`)) {
    schemesToAddCode += `  ${JSON.stringify(sch, null, 2)},\n`;
    console.log(`Prepared scheme for seedData.js: ${sch.name}`);
  }
}

if (schemesToAddCode) {
  // Find the closing bracket of seedSchemes just before seedApplications
  const lastBracketIndex = seedContent.lastIndexOf('];\n\nexport const seedApplications');
  if (lastBracketIndex !== -1) {
    seedContent = seedContent.slice(0, lastBracketIndex) + ',\n' + schemesToAddCode.trimEnd() + '\n];\n\nexport const seedApplications' + seedContent.slice(lastBracketIndex + 33);
    fs.writeFileSync(seedDataPath, seedContent, 'utf8');
    console.log(`Successfully appended new schemes to seedData.js`);
  } else {
    console.error(`Could not locate insertion point in seedData.js`);
  }
} else {
  console.log('All schemes already present in seedData.js');
}

console.log('Scheme expansion completed successfully.');
