# National Scholarship and Government Schemes Finder

A complete, full-stack, responsive citizen welfare discovery platform designed to help students, farmers, women, workers, and everyday citizens discover applicable government scholarships and welfare schemes without navigating dozens of individual departmental portals.

---

## 🌟 Key Features

1. **100% Local Verified Database (Zero External APIs)**
   - No dependencies on unreliable third-party or scraping APIs.
   - All scheme guidelines, benefits, eligibility rules, and deadlines are served directly from our database.
   - Genuine official application URLs route directly to official portals (`scholarships.gov.in`, `pmkisan.gov.in`, `eshram.gov.in`, `nsap.nic.in`, `pmjay.gov.in`) in secure external tabs.

2. **Dual Database Architecture (MongoDB + Local JSON Fallback)**
   - **MongoDB with Mongoose:** Ready for production with indexing and validation.
   - **Seamless Local JSON Storage (`backend/data/db.json`):** If MongoDB is not installed or running locally, the server automatically boots into local persistent JSON file mode with identical CRUD, search, filter, and eligibility capabilities.

3. **Multi-Faceted Search & Filtering**
   - Instant text search across scheme names, ministries, categories, and target beneficiaries.
   - Filters for Category (Students, Farmers, Women, Daily Wage Workers, Small Business Owners, Senior Citizens, Widows, PWD), State / All India, Scheme Type (Scholarship vs Welfare Scheme), Education Level, and sorting.

4. **Comprehensive Scheme Details**
   - Individual details view displaying benefits breakdown, eligibility criteria, income ceilings, age brackets, and verification date.
   - **Interactive Document Readiness Checklist:** Check off prepared documents with a live readiness counter before visiting the official website.
   - **Step-by-step Application Guide:** Scheme-specific instructions for official portal registration and document submission.

5. **Rule-Based Eligibility Checker**
   - Interactive questionnaire collecting only necessary eligibility criteria (State, Age, Occupation, Education level, Annual Family Income, Caste/Category, Gender, Benchmark Disability).
   - Backend evaluation engine compares profiles against database rules.
   - Displays **"Potentially Eligible Schemes"** with explicit reasons why you qualify, pending conditions to verify, and clear disclaimers that final eligibility is decided by the government authority.

6. **Protected Admin Management Portal**
   - Secure JWT and `bcryptjs` password hashing.
   - Dashboard analytics: Total schemes, scholarships, welfare schemes, and category distributions.
   - Full CRUD operations: Create new schemes, edit existing records, and delete with modal confirmation.
   - CLI setup script (`npm run create-admin`) for initial credentials generation.

7. **Privacy & Security Standards**
   - Zero collection of Aadhaar numbers, bank account passwords, or sensitive financial data.
   - Eligibility checks are executed in-session without tracking or storing citizen queries.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, React Router v7, Lucide Icons, Vite |
| **Styling** | Vanilla CSS (Modern Design Tokens, Responsive Grids, Glassmorphism) |
| **Backend** | Node.js, Express.js (REST API, ES Modules) |
| **Database** | MongoDB (Mongoose) + Automatic Local JSON File Fallback |
| **Authentication** | JSON Web Tokens (JWT) + Bcrypt Password Hashing |

---

## 📂 Project Directory Structure

```
fsd2 pro/
├── backend/
│   ├── controllers/
│   │   ├── adminController.js         # Admin auth & dashboard analytics
│   │   ├── categoryController.js      # Category listing & retrieval
│   │   ├── eligibilityController.js   # Rule-based eligibility evaluation
│   │   └── schemeController.js        # Scheme search, filter & CRUD
│   ├── data/
│   │   ├── db.json                    # Local persistent JSON database
│   │   └── seedData.js                # Curated seed schemes & categories
│   ├── middleware/
│   │   ├── auth.js                    # Admin JWT verification
│   │   └── errorHandler.js            # Express error handler & 404
│   ├── models/
│   │   ├── Admin.js                   # Admin Mongoose Schema
│   │   ├── Category.js                # Category Mongoose Schema
│   │   └── Scheme.js                  # Scheme Mongoose Schema with rules
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── eligibilityRoutes.js
│   │   └── schemeRoutes.js
│   ├── scripts/
│   │   ├── createAdmin.js             # Initial admin account setup script
│   │   └── seed.js                    # Database population script
│   ├── services/
│   │   ├── eligibilityService.js      # Rule-based matching engine
│   │   └── storageService.js          # Unified MongoDB / File-DB adapter
│   ├── .env.example
│   ├── package.json
│   └── server.js                      # Express API entry point
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnnouncementBanner.jsx
│   │   │   ├── ApplicationSteps.jsx
│   │   │   ├── CategoryCard.jsx
│   │   │   ├── DocumentChecklist.jsx  # Interactive readiness checklist
│   │   │   ├── EligibilityForm.jsx    # Questionnaire form
│   │   │   ├── EligibilityResults.jsx # Matching results display
│   │   │   ├── Footer.jsx             # Disclaimer & quick links
│   │   │   ├── Navbar.jsx             # Responsive navigation & status
│   │   │   ├── ProtectedRoute.jsx     # Admin route guard
│   │   │   ├── SearchBar.jsx          # Quick-tags search
│   │   │   ├── SchemeCard.jsx         # Card with official apply link
│   │   │   └── SchemeFilters.jsx      # Multi-select filters
│   │   ├── context/
│   │   │   └── AuthContext.jsx        # JWT session provider
│   │   ├── pages/
│   │   │   ├── About.jsx              # Mission & verification policy
│   │   │   ├── AdminDashboard.jsx     # Scheme management & analytics
│   │   │   ├── AdminLogin.jsx         # Admin authentication
│   │   │   ├── AdminSchemeForm.jsx    # Add / Edit scheme
│   │   │   ├── BrowseSchemes.jsx      # Full searchable catalog
│   │   │   ├── CategoryDetails.jsx    # Specific category view
│   │   │   ├── Contact.jsx            # Citizen helpdesk & FAQs
│   │   │   ├── EligibilityChecker.jsx # Interactive matching tool
│   │   │   ├── GovernmentSchemes.jsx  # Welfare & social security
│   │   │   ├── Home.jsx               # Hero, stats, & highlights
│   │   │   ├── NotFound.jsx           # 404 page
│   │   │   └── Scholarships.jsx       # Student academic grants
│   │   ├── services/
│   │   │   └── api.js                 # Internal API client
│   │   ├── styles/
│   │   │   ├── components.css         # UI components & responsive rules
│   │   │   └── index.css              # CSS variables, typography & layout
│   │   ├── App.jsx                    # Routing table
│   │   └── main.jsx                   # React root
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🚀 Setup & Execution Guide

### Prerequisites
- **Node.js** (v18 or newer recommended, tested on v24)
- **npm** (v9 or newer)
- *(Optional)* **MongoDB** (If MongoDB is not installed locally, the server automatically uses the built-in local JSON database `backend/data/db.json`).

---

### Step 1: Backend Setup

1. Open a terminal in the `backend` folder:
   ```bash
   cd backend
   npm install
   ```

2. Seed the database with authentic scholarships and welfare schemes:
   ```bash
   npm run seed
   ```

3. Create the initial administrator account:
   ```bash
   npm run create-admin
   ```
   *Default Administrator Credentials:*
   - **Username / Email:** `admin` (or `admin@schemesfinder.gov.in`)
   - **Password:** `Admin@12345`

   *(Optional: You can provide custom credentials via CLI: `node scripts/createAdmin.js myuser myuser@test.com MyPassword123`)*

4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`.

---

### Step 2: Frontend Setup

1. In a separate terminal, navigate to the `frontend` folder:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 🧪 Testing Verification

You can test all user and administrator workflows:

1. **Homepage:** Explore the Hero banner, verified metrics, popular category cards, and featured schemes.
2. **Global Search:** Type keywords such as `Post-Matric`, `PM-KISAN`, or `Mudra` in the search bar.
3. **Filtering:** Open `/browse` and apply filters for Category, Jurisdiction (Central / State), and Education Level.
4. **Scheme Details:** Click **View Details** on any card to view the benefits, eligibility conditions, and interactive **Document Checklist**.
5. **Direct Official Application:** Click **Apply Online** to verify that it routes safely to official government portals (`.gov.in` / `.nic.in`) in a new browser tab.
6. **Eligibility Checker:** Go to `/eligibility-checker`, submit your criteria (e.g. Student, SC, Undergraduate, Income: ₹1,80,000), and inspect matched schemes and why you qualify.
7. **Admin Dashboard:** Visit `/admin/login`, enter `admin` / `Admin@12345`, and verify:
   - Dashboard KPI metrics and category distribution.
   - Adding a new scheme (`/admin/schemes/new`).
   - Editing an existing scheme.
   - Deleting a scheme with the security confirmation modal.

---

## 🔒 Security & Privacy Notice

- **Independent Discovery Service:** SchemesFinder does not collect application fees, does not represent any ministry, and never asks for citizen banking credentials or Aadhaar biometric tokens.
- **Official Guidance:** Final eligibility determination, document approval, and benefit disbursement are solely conducted by the respective government department. Always verify notices directly on the official department portal.
