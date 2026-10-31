export const seedCategories = [
  {
    name: "General Citizens & Families",
    slug: "general-public",
    description: "Universal health assurance, social security insurance, affordable housing, clean cooking gas, and public welfare schemes for common citizens.",
    icon: "Users",
    featured: true,
  },

  {
    name: "Students",
    slug: "students",
    description: "Scholarships, tuition fee waivers, education loans, and academic grants for school, college, and university students.",
    icon: "GraduationCap",
    featured: true,
  },
  {
    name: "School Students",
    slug: "school-students",
    description: "Pre-matric scholarships, merit incentives, and secondary school educational aid for students up to class 10.",
    icon: "BookOpen",
    featured: true,
  },
  {
    name: "College Students",
    slug: "college-students",
    description: "Post-matric and intermediate scholarships, diploma fee concessions, and college degree grants.",
    icon: "GraduationCap",
    featured: true,
  },
  {
    name: "Undergraduate Students",
    slug: "undergraduate-students",
    description: "Financial assistance, fee waivers, and central sector scholarships for B.Tech, B.Sc, BA, B.Com, and professional degrees.",
    icon: "Award",
    featured: true,
  },
  {
    name: "Postgraduate Students",
    slug: "postgraduate-students",
    description: "Postgraduate stipends, GATE/GPAT fellowships, and master's degree educational allowances.",
    icon: "Layers",
    featured: true,
  },
  {
    name: "Research Scholars",
    slug: "research-scholars",
    description: "National fellowships, doctoral stipends, and research project contingency grants for PhD scholars.",
    icon: "Sparkles",
    featured: true,
  },
  {
    name: "Girls' Education",
    slug: "girls-education",
    description: "Special state and central scholarships, technical education incentives, and single girl child fellowships.",
    icon: "HeartHandshake",
    featured: true,
  },
  {
    name: "Merit-Based Scholarships",
    slug: "merit-based-scholarships",
    description: "Competitive academic excellence awards, entrance examination ranks incentives, and merit-cum-means grants.",
    icon: "Award",
    featured: true,
  },
  {
    name: "Minority Scholarships",
    slug: "minority-scholarships",
    description: "Centrally sponsored pre-matric, post-matric, and merit-cum-means scholarships for notified minority communities.",
    icon: "Users",
    featured: true,
  },
  {
    name: "Farmers",
    slug: "farmers",
    description: "Income support, crop insurance, equipment subsidies, and agricultural financial assistance schemes.",
    icon: "Tractor",
    featured: true,
  },
  {
    name: "Women",
    slug: "women",
    description: "Maternity financial assistance, girls higher education, savings incentives, and women empowerment schemes.",
    icon: "HeartHandshake",
    featured: true,
  },
  {
    name: "Daily Wage Workers",
    slug: "daily-wage-workers",
    description: "Social security insurance, pension funds, unorganized worker welfare, and direct benefit transfers.",
    icon: "HardHat",
    featured: true,
  },
  {
    name: "Small Business Owners",
    slug: "small-business-owners",
    description: "Collateral-free micro loans, working capital support, street vendor credits, and entrepreneurship grants.",
    icon: "Store",
    featured: true,
  },
  {
    name: "Senior Citizens",
    slug: "senior-citizens",
    description: "Old age pensions, healthcare protection cards, monthly income security, and assistive device support.",
    icon: "UserCheck",
    featured: true,
  },
  {
    name: "Widows",
    slug: "widows",
    description: "Monthly pension assistance, rehabilitation grants, and livelihood support for destitute widows.",
    icon: "ShieldAlert",
    featured: false,
  },
  {
    name: "Persons with Disabilities",
    slug: "persons-with-disabilities",
    description: "Disability scholarships, assistive device aids, concessional self-employment loans, and monthly pensions.",
    icon: "Accessibility",
    featured: false,
  },
];

export const seedSchemes = [
  {
    name: "Post-Matric Scholarship for SC Students",
    slug: "post-matric-scholarship-sc-students",
    shortDescription: "Centrally sponsored scholarship providing tuition fees and maintenance allowance to Scheduled Caste students studying in class 11 to postgraduate levels.",
    description: "The Post Matric Scholarship for SC Students is an initiative of the Ministry of Social Justice and Empowerment, Government of India. The objective of the scheme is to appreciably increase the Gross Enrolment Ratio of SC students in higher education with a focus on those from the poorest households.",
    schemeType: "Scholarship",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Social Justice and Empowerment",
    categories: ["students", "college-students", "undergraduate-students", "postgraduate-students", "merit-based-scholarships"],
    states: ["All India"],
    beneficiaryTypes: ["Students", "SC Category", "Low Income Households"],
    benefits: [
      "100% compulsory non-refundable fees reimbursement including tuition, library, and examination fees.",
      "Monthly maintenance allowance ranging from ₹2,500 to ₹13,500 per annum depending on course group.",
      "Book allowance and study tour charges for professional technical courses."
    ],
    eligibilityRules: {
      minAge: 15,
      maxAge: 35,
      maxFamilyIncome: 250000,
      educationLevels: ["Class 11-12", "Undergraduate", "Postgraduate", "Diploma / Polytechnic", "Doctorate"],
      currentCourses: ["Higher Secondary", "BA", "BSc", "BCom", "B.Tech", "MBBS", "Polytechnic", "MA", "MSc", "M.Tech", "Any"],
      applicableCategories: ["SC"],
      gender: "All",
      occupations: ["Student"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Candidate must belong to Scheduled Caste (SC) community.",
        "Candidate must have passed previous matriculation / qualifying exam.",
        "Candidate must not be availing benefits from another major central government scholarship."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card (identity verification)",
      "Caste Certificate issued by designated state authority",
      "Valid Income Certificate (annual family income ≤ ₹2,50,000)",
      "Previous Academic Marksheet (Class 10 / 12 / Degree)",
      "Current Academic Year Fee Receipt",
      "Bank Account Passbook (Aadhaar linked)",
      "Passport-sized photograph"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Check Eligibility and Collect Documents",
        description: "Verify that your annual family income is under ₹2.5 Lakhs and obtain valid digital Caste and Income certificates from your state revenue department."
      },
      {
        stepNumber: 2,
        title: "Register on National Scholarship Portal",
        description: "Visit the official National Scholarship Portal (scholarships.gov.in) and register using your Aadhaar number and active mobile phone number."
      },
      {
        stepNumber: 3,
        title: "Complete Student Profile and Select Scheme",
        description: "Log in with your Application ID, enter academic and bank details, and select 'Post Matric Scholarship for SC Students' under the Ministry of Social Justice."
      },
      {
        stepNumber: 4,
        title: "Upload Documents and Submit",
        description: "Upload scanned copies of required documents in PDF/JPEG format, submit the form, and download the acknowledgement."
      },
      {
        stepNumber: 5,
        title: "Institute Verification",
        description: "Submit a physical printout of the application form and certificates to your college/school nodal scholarship officer for digital verification."
      }
    ],
    applicationStartDate: "August every academic year",
    applicationDeadline: "October 31 (Annual Cycle on NSP)",
    officialInformationUrl: "https://socialjustice.gov.in/schemes/post-matric-scholarship-for-sc-students",
    officialApplicationUrl: "https://scholarships.gov.in",
    sourceVerifiedAt: "2026-01-15",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Central Sector Scheme of Scholarships for College and University Students",
    slug: "central-sector-scholarship-college-students",
    shortDescription: "Merit-cum-means scholarship for top percentile Class 12 board pass-outs pursuing regular degree courses in colleges and universities.",
    description: "The Central Sector Scheme of Scholarship for College and University Students is implemented by the Department of Higher Education, Ministry of Education, Government of India. The objective is to provide financial assistance to meritorious students from low income families to meet a part of their day-to-day expenses while pursuing higher studies.",
    schemeType: "Scholarship",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Department of Higher Education, Ministry of Education",
    categories: ["students", "college-students", "undergraduate-students", "postgraduate-students", "merit-based-scholarships"],
    states: ["All India"],
    beneficiaryTypes: ["Meritorious Students", "Undergraduates", "Postgraduates"],
    benefits: [
      "₹12,000 per annum for the first three years of undergraduate study.",
      "₹20,000 per annum at the postgraduate level for two years.",
      "Direct Benefit Transfer (DBT) credit directly into the beneficiary bank account through PFMS."
    ],
    eligibilityRules: {
      minAge: 17,
      maxAge: 25,
      maxFamilyIncome: 450000,
      educationLevels: ["Undergraduate", "Postgraduate"],
      currentCourses: ["BA", "BSc", "BCom", "B.Tech", "MBBS", "MA", "MSc", "MCom", "Any"],
      applicableCategories: ["All", "General", "OBC", "SC", "ST", "EWS"],
      gender: "All",
      occupations: ["Student"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Students must be above 80th percentile of successful candidates in relevant stream from respective Class 12 examination board.",
        "Pursuing regular (not correspondence or distance mode) degree course in a recognized college/institution.",
        "Not availing any other scholarship scheme from Central/State Government."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Class 12 Board Examination Marksheet",
      "Income Certificate issued by competent government authority (≤ ₹4.5 Lakhs)",
      "College Admission Proof / Student Identity Card",
      "Current Academic Year College Fee Receipt",
      "Bank Account details seeded with Aadhaar"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Verify Class 12 Percentile Cut-off",
        description: "Check the state board or CBSE/ICSE 80th percentile cut-off score list published for your passing year."
      },
      {
        stepNumber: 2,
        title: "Register on National Scholarship Portal",
        description: "Open https://scholarships.gov.in and complete Aadhaar-based One-Time Registration (OTR)."
      },
      {
        stepNumber: 3,
        title: "Fill Central Sector Application",
        description: "Enter your Class 12 roll number, passing year, current degree enrolment number, and college AISHE code."
      },
      {
        stepNumber: 4,
        title: "Submit and Track",
        description: "Review details, submit, and notify your college scholarship coordinator for online Institute Level L1 verification."
      }
    ],
    applicationStartDate: "July / August annually",
    applicationDeadline: "November 30 (Annual Cycle)",
    officialInformationUrl: "https://www.education.gov.in/higher_education",
    officialApplicationUrl: "https://scholarships.gov.in",
    sourceVerifiedAt: "2026-01-20",
    status: "Active",
    isFeatured: true
  },
  {
    name: "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    slug: "national-means-cum-merit-scholarship",
    shortDescription: "Centrally sponsored scholarship for meritorious class 8 students from economically weaker sections to prevent dropouts before secondary school.",
    description: "The National Means-cum-Merit Scholarship Scheme (NMMSS) is implemented by the Department of School Education and Literacy, Ministry of Education. It awards ₹12,000 per annum to selected students from Class 9 to 12 across government and local body schools.",
    schemeType: "Scholarship",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Department of School Education & Literacy",
    categories: ["students", "school-students", "merit-based-scholarships"],
    states: ["All India"],
    beneficiaryTypes: ["School Students", "Class 9-12", "Low Income Families"],
    benefits: [
      "₹12,000 per annum (₹1,000 per month) from Class 9 to Class 12.",
      "Disbursement through Direct Benefit Transfer (DBT) via Public Financial Management System (PFMS)."
    ],
    eligibilityRules: {
      minAge: 12,
      maxAge: 17,
      maxFamilyIncome: 350000,
      educationLevels: ["Class 9-10", "Class 11-12"],
      currentCourses: ["Secondary School", "Higher Secondary"],
      applicableCategories: ["All", "General", "OBC", "SC", "ST", "EWS"],
      gender: "All",
      occupations: ["Student"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Student must be studying in a Government, Government-aided, or Local Body school.",
        "Must have cleared the state-level NMMSS selection test conducted in Class 8 with minimum 55% aggregate.",
        "Students of Kendriya Vidyalayas, Jawahar Navodaya Vidyalayas, and private schools are not eligible."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card of student",
      "Class 8 Marksheet (minimum 55% marks, 50% for SC/ST)",
      "Income Certificate of parents (annual income ≤ ₹3.5 Lakhs)",
      "Caste / Disability Certificate (if applicable)",
      "Bank Account details linked with student Aadhaar",
      "School Bonafide Certificate"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Appear for State NMMSS Examination",
        description: "Apply through your school headmaster and clear the Mental Ability Test (MAT) and Scholastic Aptitude Test (SAT)."
      },
      {
        stepNumber: 2,
        title: "Register on National Scholarship Portal",
        description: "Once shortlisted in the state merit list, register on scholarships.gov.in using your exam roll number."
      },
      {
        stepNumber: 3,
        title: "School Verification",
        description: "Your school principal verifies your bonafide status online to initiate annual scholarship disbursement."
      }
    ],
    applicationStartDate: "August annually",
    applicationDeadline: "October 31",
    officialInformationUrl: "https://dsel.education.gov.in/nmms",
    officialApplicationUrl: "https://scholarships.gov.in",
    sourceVerifiedAt: "2026-01-10",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Pragati Scholarship Scheme for Girl Students (AICTE)",
    slug: "pragati-scholarship-girls-aicte",
    shortDescription: "AICTE scholarship empowering female students pursuing recognized technical degree or diploma courses with ₹50,000 annual financial aid.",
    description: "Pragati is an MHRD scheme implemented by the All India Council for Technical Education (AICTE) aiming at providing assistance for Advancement of Girls pursuing Technical Education. Up to two girl children per family are eligible.",
    schemeType: "Scholarship",
    governmentLevel: "Central Government",
    ministryOrDepartment: "All India Council for Technical Education (AICTE)",
    categories: ["students", "girls-education", "women", "undergraduate-students", "college-students", "merit-based-scholarships"],
    states: ["All India"],
    beneficiaryTypes: ["Female Students", "Technical Education", "Undergraduate"],
    benefits: [
      "₹50,000 per annum for every year of study towards college fee payment, laptop purchase, books, and competitive exam fees.",
      "Maximum 4 years for Degree students and 3 years for Diploma students."
    ],
    eligibilityRules: {
      minAge: 16,
      maxAge: 28,
      maxFamilyIncome: 800000,
      educationLevels: ["Undergraduate", "Diploma / Polytechnic"],
      currentCourses: ["B.Tech", "B.E", "B.Pharm", "B.Arch", "Polytechnic Diploma"],
      applicableCategories: ["All", "General", "OBC", "SC", "ST", "EWS"],
      gender: "Female",
      occupations: ["Student"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Applicant must be female.",
        "Admitted to 1st year of Degree/Diploma course or 2nd year through lateral entry in an AICTE approved institution.",
        "Maximum two girls per family are eligible."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Family Income Certificate issued by Tahsildar / competent authority (≤ ₹8 Lakhs)",
      "Class 10 and 12 / ITI Marksheet",
      "Centralized Admission Process (CAP) allotment letter",
      "Tuition Fee receipt for the current academic year",
      "Bank Passbook in the applicant's name with Aadhaar seeding"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Secure AICTE Approved Admission",
        description: "Ensure your technical degree or diploma college is approved by AICTE."
      },
      {
        stepNumber: 2,
        title: "Submit Online Application on NSP",
        description: "Log in to scholarships.gov.in, choose AICTE Schemes, and select 'Pragati Scholarship Scheme for Girls'."
      },
      {
        stepNumber: 3,
        title: "Upload Required Certificates",
        description: "Upload your admission allotment letter, income certificate, and bank details."
      },
      {
        stepNumber: 4,
        title: "Institute Verification",
        description: "Your college nodal officer digitally certifies your enrollment on the portal."
      }
    ],
    applicationStartDate: "September annually",
    applicationDeadline: "December 31",
    officialInformationUrl: "https://www.aicte-india.org/schemes/students-development-schemes/Pragati",
    officialApplicationUrl: "https://scholarships.gov.in",
    sourceVerifiedAt: "2026-01-18",
    status: "Active",
    isFeatured: true
  },
  {
    name: "AICTE PG Scholarship for GATE and GPAT Qualified Candidates",
    slug: "aicte-pg-scholarship-gate-gpat",
    shortDescription: "Monthly stipend of ₹12,400 for students admitted to full-time M.Tech, M.E, M.Arch, and M.Pharm courses with valid GATE/GPAT scores.",
    description: "The AICTE PG Scholarship scheme provides financial assistance of ₹12,400 per month to GATE, GPAT, or CEED qualified full-time postgraduate engineering and pharmacy scholars in AICTE approved colleges.",
    schemeType: "Scholarship",
    governmentLevel: "Central Government",
    ministryOrDepartment: "All India Council for Technical Education (AICTE)",
    categories: ["students", "postgraduate-students", "merit-based-scholarships", "college-students"],
    states: ["All India"],
    beneficiaryTypes: ["Postgraduate Scholars", "GATE Qualified", "M.Tech / M.Pharm"],
    benefits: [
      "₹12,400 per month stipend for 24 months or the duration of the course.",
      "Direct Benefit Transfer credit via PFMS."
    ],
    eligibilityRules: {
      minAge: 20,
      maxAge: 35,
      maxFamilyIncome: null,
      educationLevels: ["Postgraduate"],
      currentCourses: ["M.Tech", "M.E", "M.Pharm", "M.Arch", "M.Des"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Student"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Candidate must have a valid GATE / GPAT / CEED scorecard at the time of admission.",
        "Must be admitted to a full-time AICTE approved postgraduate program.",
        "Not receiving salary, stipend, or grant from any other employer or agency."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Valid GATE / GPAT scorecard",
      "Undergraduate Degree certificate and marksheets",
      "PG College Admission Allotment order and ID card",
      "Bank Account details seeded with Aadhaar"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Collect Student ID from College",
        description: "Obtain your institutional student unique ID assigned by your college coordinator."
      },
      {
        stepNumber: 2,
        title: "Apply on AICTE PG Portal",
        description: "Visit https://pgscholarship.aicte-india.org, validate your GATE credentials, and complete profile."
      },
      {
        stepNumber: 3,
        title: "Online Monthly Attendance Validation",
        description: "Your college validates your monthly attendance online for stipend release."
      }
    ],
    applicationStartDate: "August / September",
    applicationDeadline: "December 15",
    officialInformationUrl: "https://www.aicte-india.org/schemes/students-development-schemes/PG-Scholarship-Scheme",
    officialApplicationUrl: "https://pgscholarship.aicte-india.org",
    sourceVerifiedAt: "2026-01-22",
    status: "Active",
    isFeatured: false
  },
  {
    name: "National Fellowship and Scholarship for Higher Education of ST Students",
    slug: "national-fellowship-scholarship-st-students",
    shortDescription: "Merit fellowship providing financial assistance for Scheduled Tribe scholars pursuing regular M.Phil and Ph.D doctoral research.",
    description: "Implemented by the Ministry of Tribal Affairs, this scheme provides full financial assistance to ST candidates for pursuing higher studies like M.Phil and Ph.D in Sciences, Humanities, Engineering, and Technology at recognized universities.",
    schemeType: "Scholarship",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Tribal Affairs",
    categories: ["students", "research-scholars", "postgraduate-students", "merit-based-scholarships"],
    states: ["All India"],
    beneficiaryTypes: ["ST Scholars", "Ph.D Candidates", "Research Scholars"],
    benefits: [
      "JRF Stipend: ₹31,000 per month for the first two years.",
      "SRF Stipend: ₹35,000 per month for remaining tenure.",
      "Contingency grant up to ₹25,000 per annum for books, travel, and research consumables.",
      "House Rent Allowance (HRA) as per central government norms."
    ],
    eligibilityRules: {
      minAge: 21,
      maxAge: 40,
      maxFamilyIncome: 600000,
      educationLevels: ["Postgraduate", "Doctorate"],
      currentCourses: ["M.Phil", "Ph.D", "Doctorate"],
      applicableCategories: ["ST"],
      gender: "All",
      occupations: ["Student"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Candidate must belong to a notified Scheduled Tribe (ST).",
        "Must have secured admission to a regular M.Phil / Ph.D course in a UGC recognized university.",
        "Total family income should not exceed ₹6.0 Lakhs per annum."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Caste Certificate issued by designated State Authority",
      "Postgraduate Marksheet (minimum 55% marks)",
      "University Registration / Admission Letter for Ph.D",
      "Income Certificate (≤ ₹6 Lakhs)",
      "Research Supervisor and HOD Recommendation Letter"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Confirm University Doctoral Admission",
        description: "Obtain formal Ph.D registration order from your university."
      },
      {
        stepNumber: 2,
        title: "Apply on National Scholarship Portal",
        description: "Navigate to Ministry of Tribal Affairs section on scholarships.gov.in and select National Fellowship for ST."
      },
      {
        stepNumber: 3,
        title: "Upload Synopsis and Verification",
        description: "Upload research proposal summary, caste certificate, and bank details for national selection."
      }
    ],
    applicationStartDate: "July / August",
    applicationDeadline: "November 15",
    officialInformationUrl: "https://tribal.nic.in/Scholarships.aspx",
    officialApplicationUrl: "https://scholarships.gov.in",
    sourceVerifiedAt: "2026-01-25",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Post-Matric Scholarship Scheme for Minorities",
    slug: "post-matric-scholarship-minorities",
    shortDescription: "Centrally sponsored scholarship providing tuition fee waiver and maintenance stipend for Class 11 to Ph.D students from minority communities.",
    description: "The Post Matric Scholarship Scheme for Minorities is run by the Ministry of Minority Affairs. It supports meritorious students belonging to Muslims, Christians, Sikhs, Buddhists, Jains, and Parsis from economically disadvantaged households.",
    schemeType: "Scholarship",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Minority Affairs",
    categories: ["students", "minority-scholarships", "college-students", "undergraduate-students", "postgraduate-students"],
    states: ["All India"],
    beneficiaryTypes: ["Minority Students", "Class 11 to PG", "Low Income Families"],
    benefits: [
      "Admission and tuition fee for Class 11-12 up to ₹7,000 per annum.",
      "Admission and tuition fee for technical/vocational/UG/PG courses up to ₹10,000 per annum.",
      "Monthly maintenance allowance up to ₹1,200 per month for hostellers and ₹570 for day scholars."
    ],
    eligibilityRules: {
      minAge: 15,
      maxAge: 32,
      maxFamilyIncome: 200000,
      educationLevels: ["Class 11-12", "Undergraduate", "Postgraduate", "Diploma / Polytechnic"],
      currentCourses: ["Higher Secondary", "BA", "BSc", "BCom", "B.Tech", "MA", "MSc", "Any"],
      applicableCategories: ["Minority"],
      gender: "All",
      occupations: ["Student"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Applicant must belong to a notified Minority community (Muslim, Christian, Sikh, Buddhist, Jain, Parsi).",
        "Must have secured not less than 50% marks or equivalent grade in previous final examination.",
        "Annual family income must not exceed ₹2.0 Lakhs per annum."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Minority Community Declaration / Self-Certificate",
      "Income Certificate issued by Revenue Authority (≤ ₹2 Lakhs)",
      "Previous Class Academic Marksheet (≥ 50% marks)",
      "Current College / School Fee Receipt",
      "Bank Account details seeded with Aadhaar"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Register on National Scholarship Portal",
        description: "Create an account on scholarships.gov.in using your Aadhaar credentials."
      },
      {
        stepNumber: 2,
        title: "Select Minority Post-Matric Scheme",
        description: "Choose 'Post-Matric Scholarship for Minorities' under the Ministry of Minority Affairs tab."
      },
      {
        stepNumber: 3,
        title: "Submit and Verify",
        description: "Upload minority community declaration, fee receipt, and submit for institutional verification."
      }
    ],
    applicationStartDate: "August annually",
    applicationDeadline: "October 31",
    officialInformationUrl: "https://www.minorityaffairs.gov.in/schemes-programmes/scholarship-schemes",
    officialApplicationUrl: "https://scholarships.gov.in",
    sourceVerifiedAt: "2026-01-16",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Scholarship for Students with Disabilities (Divyangjan)",
    slug: "scholarship-students-with-disabilities",
    shortDescription: "Comprehensive financial assistance including tuition reimbursement, book allowance, and disability escort allowance for students with benchmark disabilities.",
    description: "Administered by the Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & Empowerment, this scheme provides pre-matric, post-matric, and top-class higher education scholarships to students with 40% or more disability holding a valid UDID card.",
    schemeType: "Scholarship",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Department of Empowerment of Persons with Disabilities",
    categories: ["students", "persons-with-disabilities", "school-students", "college-students", "undergraduate-students"],
    states: ["All India"],
    beneficiaryTypes: ["Divyangjan Students", "Persons with Disabilities", "School & College"],
    benefits: [
      "Full reimbursement of non-refundable tuition and examination fees.",
      "Monthly maintenance allowance up to ₹4,000 for hostellers and ₹2,500 for day scholars.",
      "Special disability allowances: Escort allowance, reader allowance for blind students, and assistive equipment grants."
    ],
    eligibilityRules: {
      minAge: 6,
      maxAge: 35,
      maxFamilyIncome: 250000,
      educationLevels: ["Class 9-10", "Class 11-12", "Undergraduate", "Postgraduate", "Diploma / Polytechnic"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Student"],
      disabilityOnly: true,
      minimumDisabilityPercentage: 40,
      additionalConditions: [
        "Candidate must have minimum 40% benchmark disability certified by designated Medical Authority or hold a valid UDID card.",
        "Family income from all sources must not exceed ₹2.50 Lakhs per annum.",
        "Candidate must be studying in a recognized government or accredited private institution."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "UDID (Unique Disability Identity Card) or State Medical Disability Certificate (≥ 40%)",
      "Income Certificate (≤ ₹2,50,000 per annum)",
      "Previous Academic Marksheet",
      "Bonafide Student Certificate from College / School",
      "Bank Account details in student's name"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Ensure UDID Card is Active",
        description: "Verify that your disability certificate is registered on the national UDID portal (swavlambancard.gov.in)."
      },
      {
        stepNumber: 2,
        title: "Apply on National Scholarship Portal",
        description: "Visit https://scholarships.gov.in and select DEPwD Schemes."
      },
      {
        stepNumber: 3,
        title: "Upload Medical Proof and Submit",
        description: "Upload your UDID card, marksheet, and fee receipt, then submit for institute review."
      }
    ],
    applicationStartDate: "July / August annually",
    applicationDeadline: "November 15",
    officialInformationUrl: "https://depwd.gov.in/scholarships",
    officialApplicationUrl: "https://scholarships.gov.in",
    sourceVerifiedAt: "2026-01-20",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    slug: "pm-kisan-samman-nidhi",
    shortDescription: "Direct income support of ₹6,000 per annum in three equal installments to all landholding farmer families across India.",
    description: "PM-KISAN is a central sector scheme with 100% funding from the Government of India. Under the scheme, an income support of ₹6,000 per year in three equal installments of ₹2,000 each is provided to all landholding farmer families.",
    schemeType: "Welfare Scheme",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Agriculture & Farmers Welfare",
    categories: ["farmers"],
    states: ["All India"],
    beneficiaryTypes: ["Small & Marginal Farmers", "Landholding Agricultural Families"],
    benefits: [
      "Direct financial assistance of ₹6,000 per annum transferred directly into the bank account.",
      "Paid in three equal 4-monthly installments of ₹2,000 each via DBT.",
      "Aadhaar-based biometric payment mechanism ensuring zero intermediary leakage."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 100,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Farmer"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Farmer family must hold cultivable landholding in their name.",
        "Institutional landholders and serving/retired government employees paying income tax are excluded.",
        "Mandatory eKYC completion on PM-KISAN portal using Aadhaar OTP or biometric."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Land Ownership Documents (Khata / Khasra / RoR record)",
      "Active Bank Account details linked with Aadhaar (NPCI mapped)",
      "Mobile number linked to Aadhaar"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Access PM-KISAN Portal",
        description: "Open the official portal at https://pmkisan.gov.in and click on 'New Farmer Registration'."
      },
      {
        stepNumber: 2,
        title: "Aadhaar Authentication",
        description: "Enter your Aadhaar number, state, and complete mobile OTP verification."
      },
      {
        stepNumber: 3,
        title: "Enter Land Details and Submit",
        description: "Fill landholding survey numbers, submit, and verify status via beneficiary dashboard."
      }
    ],
    applicationStartDate: "Continuous / Open throughout the year",
    applicationDeadline: "Open / Ongoing round the year",
    officialInformationUrl: "https://pmkisan.gov.in",
    officialApplicationUrl: "https://pmkisan.gov.in/RegistrationFormNew.aspx",
    sourceVerifiedAt: "2026-01-05",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    slug: "pm-fasal-bima-yojana",
    shortDescription: "Comprehensive crop insurance protecting farmers against non-preventable natural risks from pre-sowing to post-harvest.",
    description: "PMFBY provides insurance coverage and financial support to farmers in the event of failure of notified crops as a result of natural calamities, pests, and diseases. Farmers pay nominal premium (1.5% for Rabi, 2% for Kharif, 5% for commercial/horticultural crops) with government subsidizing the remainder.",
    schemeType: "Welfare Scheme",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Agriculture & Farmers Welfare",
    categories: ["farmers"],
    states: ["All India"],
    beneficiaryTypes: ["Farmers", "Agriculturalists", "Sharecroppers"],
    benefits: [
      "Complete coverage against flood, drought, cyclones, unseasonal rains, and localized pest infestation.",
      "Farmer pays ultra-low premium: 2% for Kharif, 1.5% for Rabi crops, and 5% for annual commercial/horticultural crops.",
      "Claim settlement credited directly to farmer's Aadhaar-linked bank account within statutory timeline."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 95,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Farmer"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Farmer must have sown or intend to sow a notified crop in the notified area.",
        "Both loanee (availing Kisan Credit Card loan) and non-loanee farmers are eligible.",
        "Tenant farmers and sharecroppers with valid crop tenancy documentation are covered."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Land Record Documents (Khasra / Khatauni) or Sowing Certificate",
      "Crop Sowing declaration issued by Village Administrative Officer / Patwari",
      "Bank Account Passbook (Aadhaar linked)"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Visit PMFBY Portal or CSC",
        description: "Open https://pmfby.gov.in or visit your nearest Common Service Centre (CSC) or bank branch."
      },
      {
        stepNumber: 2,
        title: "Fill Farmer Crop Insurance Form",
        description: "Select season (Kharif / Rabi), enter land survey number, and crop cultivated."
      },
      {
        stepNumber: 3,
        title: "Pay Nominal Premium & Collect Policy",
        description: "Pay the 1.5% - 2% premium online or at bank and download your insurance policy certificate."
      }
    ],
    applicationStartDate: "Seasonal (Kharif: April-July / Rabi: October-December)",
    applicationDeadline: "July 31 for Kharif / December 31 for Rabi",
    officialInformationUrl: "https://pmfby.gov.in",
    officialApplicationUrl: "https://pmfby.gov.in/farmerRegistrationForm",
    sourceVerifiedAt: "2026-01-12",
    status: "Active",
    isFeatured: false
  },
  {
    name: "PM SVANidhi (PM Street Vendor's AtmaNirbhar Nidhi)",
    slug: "pm-svanidhi-street-vendor-scheme",
    shortDescription: "Affordable working capital collateral-free micro-credit loans up to ₹50,000 with 7% interest subsidy for urban and peri-urban street vendors.",
    description: "PM SVANidhi is a special micro-credit facility launched by the Ministry of Housing and Urban Affairs to provide affordable loans to street vendors who were adversely impacted by the pandemic. Offers progressive loan tranches of ₹10,000, ₹20,000, and ₹50,000.",
    schemeType: "Welfare Scheme",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Housing and Urban Affairs",
    categories: ["small-business-owners", "daily-wage-workers"],
    states: ["All India"],
    beneficiaryTypes: ["Street Vendors", "Hawkers", "Micro Entrepreneurs", "Daily Wage Workers"],
    benefits: [
      "Initial collateral-free working capital loan of ₹10,000, upgradeable to ₹20,000 and ₹50,000 upon timely repayment.",
      "7% interest subsidy credited directly to bank account quarterly.",
      "Monthly cashback incentive of up to ₹100 for conducting digital transactions via UPI QR codes."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 75,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Small Business", "Daily Wage", "Self-employed", "Any"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Vendor must be engaged in vending in urban areas on or before March 24, 2020.",
        "Possession of Certificate of Vending / Identity Card issued by Urban Local Body (ULB).",
        "Vendors left out of survey can apply with a Letter of Recommendation (LoR) from Town Vending Committee."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Vending Certificate / Identity Card issued by Municipality or Town Vending Committee",
      "Bank Account Passbook (Aadhaar linked)",
      "Mobile number registered with Aadhaar"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Check Vending Survey Status",
        description: "Search your name in the urban street vendor survey list on https://pmsvanidhi.mohua.gov.in."
      },
      {
        stepNumber: 2,
        title: "Apply Online or through Banking Correspondent",
        description: "Submit your Aadhaar number, choose preferred lending institution, and enter loan requirement."
      },
      {
        stepNumber: 3,
        title: "Loan Sanction & Disbursal",
        description: "Bank sanctions working capital loan and deposits ₹10,000 directly into your savings account."
      }
    ],
    applicationStartDate: "Continuous / Active",
    applicationDeadline: "Open Scheme (Extended till December 2026)",
    officialInformationUrl: "https://pmsvanidhi.mohua.gov.in",
    officialApplicationUrl: "https://pmsvanidhi.mohua.gov.in/Home/VendorApplication",
    sourceVerifiedAt: "2026-01-18",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Pradhan Mantri Mudra Yojana (PMMY)",
    slug: "pm-mudra-yojana-loans",
    shortDescription: "Collateral-free business loans up to ₹20 Lakhs for micro and small enterprises under Shishu, Kishor, and Tarun categories.",
    description: "Launched by the Department of Financial Services, Ministry of Finance, PMMY provides loans up to ₹20 Lakhs to non-corporate, non-farm small/micro enterprises through Commercial Banks, RRBs, Small Finance Banks, MFIs, and NBFCs.",
    schemeType: "Welfare Scheme",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Department of Financial Services, Ministry of Finance",
    categories: ["small-business-owners", "women"],
    states: ["All India"],
    beneficiaryTypes: ["Micro Enterprises", "Shopkeepers", "Women Entrepreneurs", "Artisans"],
    benefits: [
      "Shishu: Loans up to ₹50,000 for starting a micro enterprise.",
      "Kishor: Loans from ₹50,001 to ₹5,00,000 for scaling existing business.",
      "Tarun: Loans from ₹5,00,001 to ₹20,00,000 for mature small enterprises.",
      "Zero processing fees for Shishu and Kishor loans; no collateral required."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 70,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Small Business", "Self-employed", "Any"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Any Indian citizen who has a business plan for non-farm income generating activity.",
        "Must not be a defaulter to any bank or financial institution.",
        "Business must belong to manufacturing, trading, service sector, or agriculture-allied activities."
      ]
    },
    requiredDocuments: [
      "Identity Proof (Aadhaar / Voter ID / Passport)",
      "Address Proof of residence and business establishment",
      "Business registration certificate / Udyam Registration (if available)",
      "Bank statement for past 6 months",
      "Quotation / machinery invoice for purchase of assets"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Formulate Business Plan",
        description: "Prepare a simple project estimate indicating capital requirement under Shishu, Kishor, or Tarun."
      },
      {
        stepNumber: 2,
        title: "Apply on JanSamarth Portal",
        description: "Open https://www.jansamarth.in and select Business Activity Loan under PMMY."
      },
      {
        stepNumber: 3,
        title: "Bank Approval & MUDRA Card",
        description: "Obtain digital in-principle sanction and collect your MUDRA Debit Card for working capital draws."
      }
    ],
    applicationStartDate: "Open throughout the year",
    applicationDeadline: "Open / Ongoing",
    officialInformationUrl: "https://www.mudra.org.in",
    officialApplicationUrl: "https://www.jansamarth.in/business-activity-loans",
    sourceVerifiedAt: "2026-01-14",
    status: "Active",
    isFeatured: true
  },
  {
    name: "e-Shram Portal & National Social Security for Unorganized Workers",
    slug: "e-shram-unorganized-workers-card",
    shortDescription: "Universal social security registration providing digital Universal Account Number (UAN) card and accident insurance for unorganized workers.",
    description: "The e-Shram portal is developed by the Ministry of Labour & Employment for creating a national database of unorganized workers seeded with Aadhaar. Registered workers receive ₹2 Lakhs accidental death cover and priority access to social welfare schemes.",
    schemeType: "Welfare Scheme",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Labour & Employment",
    categories: ["daily-wage-workers"],
    states: ["All India"],
    beneficiaryTypes: ["Daily Wage Workers", "Construction Labourers", "Domestic Workers", "Migrant Labourers"],
    benefits: [
      "Issue of 12-digit permanent e-Shram Universal Account Number (UAN) card.",
      "Accidental death and permanent disability insurance cover of ₹2,00,000 under PMSBY.",
      "Partial disability coverage of ₹1,00,000.",
      "Automatic seamless delivery of emergency state disaster cash transfers directly to Aadhaar bank account."
    ],
    eligibilityRules: {
      minAge: 16,
      maxAge: 59,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Daily Wage", "Labourer", "Driver", "Construction", "Any"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Must be an unorganized worker (construction worker, gig worker, street vendor, domestic maid, agriculture labourer).",
        "Must not be a member of EPFO (Provident Fund) or ESIC (Employees State Insurance).",
        "Must not be an income tax payee."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Mobile number linked with Aadhaar",
      "Active Savings Bank Account number and IFSC code",
      "Nominee details"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Self Registration on e-Shram Portal",
        description: "Open https://eshram.gov.in and click on 'Register on e-Shram'."
      },
      {
        stepNumber: 2,
        title: "Aadhaar OTP Verification",
        description: "Enter your Aadhaar number, complete OTP authentication, and verify pre-filled personal details."
      },
      {
        stepNumber: 3,
        title: "Add Occupation & Bank Details",
        description: "Select your primary occupation from the NCO list, enter bank account, and download UAN card."
      }
    ],
    applicationStartDate: "Continuous / Always open",
    applicationDeadline: "Open round the year",
    officialInformationUrl: "https://eshram.gov.in",
    officialApplicationUrl: "https://register.eshram.gov.in",
    sourceVerifiedAt: "2026-01-20",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
    slug: "indira-gandhi-old-age-pension",
    shortDescription: "Non-contributory monthly old age pension for elderly citizens aged 60 years and above living below poverty line.",
    description: "Under the National Social Assistance Programme (NSAP), Ministry of Rural Development, IGNOAPS provides regular monthly financial pension to senior citizens belonging to BPL households across all states and union territories.",
    schemeType: "Welfare Scheme",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Rural Development",
    categories: ["senior-citizens"],
    states: ["All India"],
    beneficiaryTypes: ["Senior Citizens", "Elderly", "Below Poverty Line (BPL)"],
    benefits: [
      "Monthly pension of ₹1,000 to ₹3,000 (Central contribution + State top-up matching allowance).",
      "Direct Benefit Transfer directly to the beneficiary's post office or bank savings account.",
      "Eligible for linked free geriatric medical check-ups under state health mission."
    ],
    eligibilityRules: {
      minAge: 60,
      maxAge: 120,
      maxFamilyIncome: 120000,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Senior Citizen", "Retired", "Unemployed", "Any"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Applicant must be 60 years of age or older.",
        "Applicant must belong to a household living Below the Poverty Line (BPL) as per central/state guidelines.",
        "Must hold a valid BPL card or state low-income certificate."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card or Voter ID card",
      "Age proof certificate (Birth certificate, Aadhaar, or Medical Officer assessment)",
      "BPL Ration Card / BPL inclusion certificate",
      "Bank Account Passbook / Post Office Account details",
      "Passport size photographs"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Collect NSAP Application Form",
        description: "Obtain the pension application form from your Block Development Office (BDO), Gram Panchayat, or Municipality."
      },
      {
        stepNumber: 2,
        title: "Submit Documents to Social Welfare Officer",
        description: "Attach copies of BPL card, Aadhaar, and bank passbook to the local village administrative officer."
      },
      {
        stepNumber: 3,
        title: "Verification & Monthly Pension Order",
        description: "Upon field verification, sanction order is generated on the NSAP portal (nsap.nic.in)."
      }
    ],
    applicationStartDate: "Continuous / Always open",
    applicationDeadline: "Open round the year",
    officialInformationUrl: "https://nsap.nic.in",
    officialApplicationUrl: "https://nsap.nic.in/applyOnline.do",
    sourceVerifiedAt: "2026-01-08",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Indira Gandhi National Widow Pension Scheme (IGNWPS)",
    slug: "indira-gandhi-widow-pension",
    shortDescription: "Monthly welfare pension for widows aged 40-79 years living below the poverty line to ensure dignified social security.",
    description: "Implemented under the National Social Assistance Programme (NSAP), Ministry of Rural Development, IGNWPS provides sustained monthly financial assistance to destitute widows from BPL households until they reach 80 years (where they transition to higher old age pension).",
    schemeType: "Welfare Scheme",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Rural Development",
    categories: ["widows", "women"],
    states: ["All India"],
    beneficiaryTypes: ["Widows", "Destitute Women", "BPL Families"],
    benefits: [
      "Monthly pension of ₹1,000 to ₹3,500 credited via DBT directly into the widow's bank account (state matching grants included).",
      "Priority inclusion in subsidized food grain allocation under National Food Security Act (NFSA).",
      "Free medical insurance coverage under Ayushman Bharat PM-JAY."
    ],
    eligibilityRules: {
      minAge: 40,
      maxAge: 79,
      maxFamilyIncome: 120000,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "Female",
      occupations: ["Any"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Applicant must be a widow aged between 40 and 79 years.",
        "Must belong to a household living Below the Poverty Line (BPL).",
        "Must not have remarried."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Husband's official Death Certificate issued by Registrar of Deaths / Municipality",
      "BPL Ration Card / Low Income Certificate",
      "Age proof document",
      "Bank Account details seeded with Aadhaar"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Obtain Death Certificate and BPL Record",
        description: "Keep spouse death certificate and valid family BPL ration card ready."
      },
      {
        stepNumber: 2,
        title: "Apply Online via State Social Welfare Portal or NSAP",
        description: "Submit application on https://nsap.nic.in or at the nearest Taluka / Tahsildar office."
      },
      {
        stepNumber: 3,
        title: "Sanction and Direct Transfer",
        description: "Following scrutiny by District Social Welfare Committee, monthly pension begins."
      }
    ],
    applicationStartDate: "Continuous / Always open",
    applicationDeadline: "Open round the year",
    officialInformationUrl: "https://nsap.nic.in",
    officialApplicationUrl: "https://nsap.nic.in/applyOnline.do",
    sourceVerifiedAt: "2026-01-12",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Sukanya Samriddhi Yojana (SSY)",
    slug: "sukanya-samriddhi-yojana",
    shortDescription: "Government-backed savings scheme for girl child offering sovereign guarantee, 8.2% tax-free interest, and Section 80C deductions.",
    description: "Part of the 'Beti Bachao, Beti Padhao' campaign, Sukanya Samriddhi Account can be opened by parents of a girl child below 10 years of age. Offers sovereign government guarantee, compounding high interest rate (8.2%), and complete Triple-E tax exemption.",
    schemeType: "Welfare Scheme",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Finance",
    categories: ["women", "girls-education"],
    states: ["All India"],
    beneficiaryTypes: ["Girl Child", "Parents", "Higher Education Fund"],
    benefits: [
      "High compound interest rate (8.2% per annum, quarterly reset).",
      "Exempt-Exempt-Exempt (EEE) tax status: investment, accrued interest, and maturity proceeds are 100% tax-free.",
      "50% withdrawal allowed after the girl turns 18 for her higher education expenses."
    ],
    eligibilityRules: {
      minAge: 0,
      maxAge: 10,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "Female",
      occupations: ["Any"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Account can be opened for a girl child from her birth until she turns 10 years of age.",
        "Maximum of two accounts per family (three in case of twins/triplets).",
        "Minimum annual deposit of ₹250 and maximum ₹1,50,000 per financial year."
      ]
    },
    requiredDocuments: [
      "Birth Certificate of the girl child",
      "Identity Proof of parent / legal guardian (Aadhaar / PAN card)",
      "Address Proof of parent / guardian",
      "Photographs of the girl child and parent"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Visit Authorized Bank or Post Office",
        description: "Visit any branch of India Post (Post Office) or authorized commercial bank."
      },
      {
        stepNumber: 2,
        title: "Fill SSY Account Opening Form",
        description: "Submit Form-1 along with child birth certificate and guardian Aadhaar."
      },
      {
        stepNumber: 3,
        title: "Deposit Initial Amount",
        description: "Deposit initial amount (minimum ₹250) to receive the official Sukanya Samriddhi Passbook."
      }
    ],
    applicationStartDate: "Open throughout the year",
    applicationDeadline: "Open / Ongoing",
    officialInformationUrl: "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx",
    officialApplicationUrl: "https://www.indiapost.gov.in",
    sourceVerifiedAt: "2026-01-10",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Delhi Higher Education and Skill Development Guarantee Scheme",
    slug: "delhi-higher-education-guarantee-scheme",
    shortDescription: "Delhi State Government educational loan guarantee scheme providing collateral-free loans up to ₹10 Lakhs for students pursuing higher studies in Delhi NCR.",
    description: "Launched by the Directorate of Higher Education, Government of NCT of Delhi, this scheme provides institutional bank loan support up to ₹10 Lakhs with Delhi Government credit guarantee for students pursuing degree or diploma courses in Delhi NCR.",
    schemeType: "Scholarship",
    governmentLevel: "State Government",
    ministryOrDepartment: "Department of Higher Education, Govt. of NCT of Delhi",
    categories: ["students", "college-students", "undergraduate-students", "postgraduate-students"],
    states: ["Delhi NCR"],
    beneficiaryTypes: ["Delhi Resident Students", "Higher Education", "Undergraduates"],
    benefits: [
      "Collateral-free and third-party guarantee-free education loan up to ₹10,000,000.",
      "One year moratorium period after course completion.",
      "Full coverage of tuition fees, library, hostel, books, and study material."
    ],
    eligibilityRules: {
      minAge: 17,
      maxAge: 35,
      maxFamilyIncome: null,
      educationLevels: ["Undergraduate", "Postgraduate", "Diploma / Polytechnic"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Student"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Candidate must have completed Class 10 and 12 from a school located in Delhi NCR.",
        "Candidate must have secured admission to a recognized college / university in Delhi or designated premier national institutions."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card with Delhi address proof",
      "Marksheets of Class 10 and 12 from Delhi school",
      "Admission letter from recognized college / university in Delhi NCR",
      "Fee structure certified by the educational institution"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Register on Delhi Higher Education Portal",
        description: "Open https://delhi.gov.in and select Higher Education Credit Guarantee."
      },
      {
        stepNumber: 2,
        title: "Submit Online Loan Application",
        description: "Upload academic credentials and admission allotment letter."
      },
      {
        stepNumber: 3,
        title: "Bank Approval",
        description: "Preferred partner bank sanctions the education loan under government credit cover."
      }
    ],
    applicationStartDate: "Continuous / Active round the year",
    applicationDeadline: "Open Scheme",
    officialInformationUrl: "https://higheredn.delhi.gov.in",
    officialApplicationUrl: "https://higheredn.delhi.gov.in",
    sourceVerifiedAt: "2026-01-15",
    status: "Active",
    isFeatured: false
  },
  {
    name: "Kanyashree Prakalpa (K2 Annual Higher Education Grant)",
    slug: "kanyashree-prakalpa-wb",
    shortDescription: "West Bengal State Government flagship incentive providing ₹25,000 one-time grant to unmarried female students turning 18 to facilitate higher education.",
    description: "Kanyashree Prakalpa is a conditional cash transfer scheme by the Department of Women & Child Development and Social Welfare, Government of West Bengal, aimed at improving the status and well-being of the girl child by incentivizing higher education and delaying early marriage.",
    schemeType: "Scholarship",
    governmentLevel: "State Government",
    ministryOrDepartment: "Department of Women & Child Development, Govt. of West Bengal",
    categories: ["students", "girls-education", "women", "college-students", "undergraduate-students"],
    states: ["West Bengal"],
    beneficiaryTypes: ["Female Students", "Girls in West Bengal", "College Enrollees"],
    benefits: [
      "One-time financial grant of ₹25,000 upon reaching 18 years of age (K2 component).",
      "Annual scholarship of ₹1,000 from age 13 to 18 (K1 component).",
      "Direct Benefit Transfer credit to student's bank account."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 19,
      maxFamilyIncome: null,
      educationLevels: ["Undergraduate", "Class 11-12", "Diploma / Polytechnic"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "Female",
      occupations: ["Student"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Applicant must be a bona fide resident of West Bengal.",
        "Must be enrolled in a recognized educational or vocational institution in West Bengal.",
        "Must be unmarried at the time of turning 18 years."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Birth Certificate issued by municipal authority",
      "Unmarried status declaration signed by parent / guardian",
      "Bonafide College Enrollment Certificate",
      "Bank Account details in girl's name"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Obtain Form K2 from Institution",
        description: "Collect Kanyashree Form K2 from your college / higher secondary school head."
      },
      {
        stepNumber: 2,
        title: "School / College Online Upload",
        description: "Institute uploads the verified application to the official Kanyashree portal."
      },
      {
        stepNumber: 3,
        title: "District Nodal Approval",
        description: "Sanction order processed and ₹25,000 transferred via DBT."
      }
    ],
    applicationStartDate: "August annually",
    applicationDeadline: "December 31",
    officialInformationUrl: "https://www.wbkanyashree.gov.in",
    officialApplicationUrl: "https://www.wbkanyashree.gov.in",
    sourceVerifiedAt: "2026-01-18",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti",
    slug: "maharashtra-ebc-shahu-maharaj-scholarship",
    shortDescription: "Maharashtra State Government 50% tuition and exam fee concession for economically backward category (EBC) students in professional colleges.",
    description: "The Directorate of Higher Education, Government of Maharashtra provides 50% tuition fee and examination fee reimbursement to eligible students from Economically Weaker / Backward categories admitted through Centralized Admission Process (CAP) in Maharashtra.",
    schemeType: "Scholarship",
    governmentLevel: "State Government",
    ministryOrDepartment: "Directorate of Higher Education, Govt. of Maharashtra",
    categories: ["students", "college-students", "undergraduate-students"],
    states: ["Maharashtra"],
    beneficiaryTypes: ["Maharashtra Students", "EBC", "Undergraduate Degree"],
    benefits: [
      "50% reimbursement of tuition fees and examination fees in government and private unaided colleges.",
      "Applicable for Engineering, Medical, Pharmacy, Architecture, Law, and Polytechnic courses."
    ],
    eligibilityRules: {
      minAge: 17,
      maxAge: 30,
      maxFamilyIncome: 800000,
      educationLevels: ["Undergraduate", "Postgraduate", "Diploma / Polytechnic"],
      currentCourses: ["B.Tech", "MBBS", "B.Pharm", "MBA", "MCA", "B.Sc", "Any"],
      applicableCategories: ["General", "EWS", "All"],
      gender: "All",
      occupations: ["Student"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Applicant must be a Domicile of Maharashtra State.",
        "Admission must be secured through Centralized Admission Process (CAP).",
        "Family income must not exceed ₹8.0 Lakhs per annum."
      ]
    },
    requiredDocuments: [
      "Maharashtra Domicile Certificate",
      "Family Income Certificate issued by Tahsildar (≤ ₹8 Lakhs)",
      "CAP Allotment Letter",
      "Class 10 and 12 marksheets",
      "College Fee Receipt"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Register on MahaDBT Portal",
        description: "Open https://mahadbt.maharashtra.gov.in and create user profile with Aadhaar."
      },
      {
        stepNumber: 2,
        title: "Select DHE Schemes",
        description: "Choose Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti."
      },
      {
        stepNumber: 3,
        title: "College & Department Scrutiny",
        description: "Submit online form for college nodal officer and state DHE approval."
      }
    ],
    applicationStartDate: "September annually",
    applicationDeadline: "January 31",
    officialInformationUrl: "https://mahadbt.maharashtra.gov.in",
    officialApplicationUrl: "https://mahadbt.maharashtra.gov.in",
    sourceVerifiedAt: "2026-01-20",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Rythu Bandhu (Agriculture Investment Support Scheme)",
    slug: "telangana-rythu-bandhu",
    shortDescription: "Telangana State Government direct cash support of ₹10,000 per acre per year for purchase of agricultural inputs like seeds, fertilizers, and field labor.",
    description: "Rythu Bandhu is an agriculture investment support scheme by the Department of Agriculture, Government of Telangana. It provides farmers ₹5,000 per acre per crop season (total ₹10,000/acre/year for Kharif and Rabi) directly to their bank accounts.",
    schemeType: "Welfare Scheme",
    governmentLevel: "State Government",
    ministryOrDepartment: "Department of Agriculture, Govt. of Telangana",
    categories: ["farmers"],
    states: ["Telangana"],
    beneficiaryTypes: ["Farmers in Telangana", "Pattadar Landowners"],
    benefits: [
      "Direct financial grant of ₹10,000 per acre per year (₹5,000/acre each for Kharif and Rabi seasons).",
      "Zero requirement for repayment; not a loan, pure agricultural input grant.",
      "Credited directly through Treasury Treasury e-Kuber mechanism."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 95,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Farmer"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Farmer must own agricultural land in the state of Telangana.",
        "Possession of new digital Pattadar Passbook issued by Revenue Department (Dharani portal).",
        "Both small and large agricultural landholders are covered proportionally."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Pattadar Passbook / Dharani Land Record Khata Number",
      "Bank Account details mapped with Dharani portal",
      "Mobile number linked to Aadhaar"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Check Dharani Portal Khata",
        description: "Verify your land title registration on https://dharani.telangana.gov.in."
      },
      {
        stepNumber: 2,
        title: "Submit Bank Details to Agriculture Extension Officer",
        description: "Provide IFSC and account details to your village AEO."
      },
      {
        stepNumber: 3,
        title: "Seasonal Cash Grant Disbursement",
        description: "Input support is credited directly before each sowing season."
      }
    ],
    applicationStartDate: "Biannual (May for Kharif / October for Rabi)",
    applicationDeadline: "Ongoing for all Pattadar holders",
    officialInformationUrl: "https://rythubandhu.telangana.gov.in",
    officialApplicationUrl: "https://dharani.telangana.gov.in",
    sourceVerifiedAt: "2026-01-22",
    status: "Active",
    isFeatured: true
  }
,
  {
  "name": "Pradhan Mantri Vaya Vandana Yojana (PMVVY)",
  "slug": "pradhan-mantri-vaya-vandana-yojana",
  "shortDescription": "Guaranteed pension scheme for senior citizens aged 60 and above offering assured regular monthly payouts and financial security.",
  "description": "Pradhan Mantri Vaya Vandana Yojana (PMVVY) is a government-backed pension scheme launched through the Life Insurance Corporation of India (LIC) under the Ministry of Finance. It provides social security during old age and protects senior citizens against future falls in their interest income due to uncertain market conditions.",
  "schemeType": "Welfare",
  "governmentLevel": "Central Government",
  "ministryOrDepartment": "Department of Financial Services, Ministry of Finance (Operated by LIC)",
  "categories": [
    "senior-citizens",
    "general-public"
  ],
  "states": [
    "All India"
  ],
  "beneficiaryTypes": [
    "Senior Citizens",
    "Elderly (60+ Years)",
    "Retirees",
    "Pensioners"
  ],
  "benefits": [
    "Guaranteed pension payout at an assured interest rate for a full policy tenure of 10 years.",
    "Pension payment options: Monthly (minimum ₹1,000 up to ₹9,250/month), Quarterly, Half-Yearly, or Annually.",
    "Premature exit allowed under exceptional circumstances such as critical/terminal illness of self or spouse with 98% refund of purchase price.",
    "Loan facility available up to 75% of purchase price after completion of 3 policy years.",
    "Full purchase price refunded to the nominee on demise of the senior citizen subscriber."
  ],
  "eligibilityRules": {
    "minAge": 60,
    "maxAge": 120,
    "maxFamilyIncome": null,
    "educationLevels": [
      "Any"
    ],
    "currentCourses": [
      "Any"
    ],
    "applicableCategories": [
      "All"
    ],
    "gender": "All",
    "occupations": [
      "Retired",
      "Any",
      "Self Employed",
      "Homemaker",
      "Farmer",
      "Unemployed"
    ],
    "disabilityOnly": false,
    "minimumDisabilityPercentage": 0,
    "additionalConditions": [
      "Applicant must be an Indian citizen aged 60 years or above at entry.",
      "Maximum purchase price investment ceiling is ₹15,00,000 per senior citizen.",
      "No medical examination is required to join the scheme."
    ]
  },
  "requiredDocuments": [
    "Aadhaar Card (Identity & Age verification)",
    "Age Proof (PAN Card / Voter ID / Passport / Matriculation certificate)",
    "Bank Account Passbook / Cancelled Cheque (for direct pension credits)",
    "Passport-sized photograph",
    "Address Proof"
  ],
  "applicationSteps": [
    {
      "stepNumber": 1,
      "title": "Choose Investment Mode",
      "description": "Decide the lump-sum purchase price (from ₹1,62,162 for ₹1,000/month up to ₹15,00,000 for ₹9,250/month) and your preferred pension frequency."
    },
    {
      "stepNumber": 2,
      "title": "Apply Online or at LIC Branch",
      "description": "Visit the official LIC portal (licindia.in) or your nearest Life Insurance Corporation (LIC) branch."
    },
    {
      "stepNumber": 3,
      "title": "Submit Application Form and KYC",
      "description": "Fill the PMVVY Proposal Form, attach self-attested Aadhaar, PAN card, age proof, and NEFT mandate form."
    },
    {
      "stepNumber": 4,
      "title": "Receive Policy Document & Monthly Credit",
      "description": "LIC issues the policy document and the pension starts crediting directly into your savings account based on chosen frequency."
    }
  ],
  "applicationStartDate": "Continuous enrollment cycle",
  "applicationDeadline": "Open for all eligible senior citizens",
  "officialInformationUrl": "https://financialservices.gov.in/beta/en/schemes-programmes/pradhan-mantri-vaya-vandana-yojana",
  "officialApplicationUrl": "https://licindia.in/web/guest/pradhan-mantri-vaya-vandana-yojana",
  "sourceVerifiedAt": "2026-01-20",
  "status": "Active",
  "isFeatured": true
},
  {
  "name": "Rashtriya Vayoshri Yojana (RVY) - Assisted Living Devices for Senior Citizens",
  "slug": "rashtriya-vayoshri-yojana",
  "shortDescription": "Free distribution of physical aids and assisted living devices for senior citizens belonging to BPL category or suffering from age-related infirmities.",
  "description": "Rashtriya Vayoshri Yojana is a Central Sector Scheme formulated by the Ministry of Social Justice and Empowerment and executed through Artificial Limbs Manufacturing Corporation of India (ALIMCO). It provides high quality, modern assisted-living devices free of cost to senior citizens living below poverty line or with income under ₹15,000/month.",
  "schemeType": "Welfare",
  "governmentLevel": "Central Government",
  "ministryOrDepartment": "Ministry of Social Justice and Empowerment (Executed by ALIMCO)",
  "categories": [
    "senior-citizens",
    "persons-with-disabilities"
  ],
  "states": [
    "All India"
  ],
  "beneficiaryTypes": [
    "Senior Citizens",
    "BPL Elderly",
    "Elderly with Physical Disabilities"
  ],
  "benefits": [
    "100% free distribution of customized assistive living devices: Walking Sticks, Elbow Crutches, Walkers, Hearing Aids, Wheelchairs, Artificial Dentures, and Spectacles.",
    "Free medical assessment camps conducted by specialized clinical teams across all districts.",
    "One year free maintenance support on high-end electronic assistive appliances."
  ],
  "eligibilityRules": {
    "minAge": 60,
    "maxAge": 120,
    "maxFamilyIncome": 180000,
    "educationLevels": [
      "Any"
    ],
    "currentCourses": [
      "Any"
    ],
    "applicableCategories": [
      "All"
    ],
    "gender": "All",
    "occupations": [
      "Any",
      "Retired",
      "Unemployed",
      "Homemaker"
    ],
    "disabilityOnly": false,
    "minimumDisabilityPercentage": 0,
    "additionalConditions": [
      "Applicant must be an Indian senior citizen aged 60 years or above.",
      "Family income must not exceed ₹15,000 per month (or hold a valid BPL Ration Card / Antyodaya Anna Yojana Card).",
      "Must suffer from any age-related physical impairment (mobility, vision, hearing, or dental impairment) certified by a medical officer."
    ]
  },
  "requiredDocuments": [
    "Aadhaar Card (Proof of identity and age)",
    "BPL Ration Card / Valid Family Income Certificate (≤ ₹1.8 Lakh per annum)",
    "Medical Certificate / Disability Certificate from government medical officer",
    "Passport-sized photograph"
  ],
  "applicationSteps": [
    {
      "stepNumber": 1,
      "title": "Attend District Assessment Camp",
      "description": "Attend the designated ALIMCO / District Social Welfare Department screening camp organized at your district hospital or block headquarters."
    },
    {
      "stepNumber": 2,
      "title": "Clinical Screening and Measurement",
      "description": "Doctors assess hearing, vision, dentition, and locomotor support requirements and prescribe specific assistive devices."
    },
    {
      "stepNumber": 3,
      "title": "Document Verification",
      "description": "Present your Aadhaar card and BPL card / income proof to the verification desk."
    },
    {
      "stepNumber": 4,
      "title": "Free Device Distribution",
      "description": "Receive the fitted assistive devices free of charge during the grand distribution camp or from the district social welfare office."
    }
  ],
  "applicationStartDate": "Annual District Camp Schedules",
  "applicationDeadline": "Ongoing through ALIMCO district social welfare camps",
  "officialInformationUrl": "https://socialjustice.gov.in/schemes/rashtriya-vayoshri-yojana",
  "officialApplicationUrl": "https://alimco.in/rashtriya-vayoshri-yojana",
  "sourceVerifiedAt": "2026-01-25",
  "status": "Active",
  "isFeatured": true
},
  {
  "name": "Atal Pension Yojana (APY) - Guaranteed Old Age Pension",
  "slug": "atal-pension-yojana",
  "shortDescription": "Government guaranteed pension scheme providing fixed monthly pension of ₹1,000 to ₹5,000 from age 60 for all citizens and unorganized workers.",
  "description": "Atal Pension Yojana is a flagship social security scheme administered by the Pension Fund Regulatory and Development Authority (PFRDA) under the Ministry of Finance. APY guarantees a minimum monthly pension to every Indian citizen who joins between the ages of 18 and 40 years, ensuring dignity and income security in senior years.",
  "schemeType": "Welfare",
  "governmentLevel": "Central Government",
  "ministryOrDepartment": "Pension Fund Regulatory and Development Authority (PFRDA), Ministry of Finance",
  "categories": [
    "senior-citizens",
    "daily-wage-workers",
    "general-public"
  ],
  "states": [
    "All India"
  ],
  "beneficiaryTypes": [
    "Normal Citizens",
    "Unorganized Workers",
    "Self Employed",
    "Future Senior Citizens"
  ],
  "benefits": [
    "Guaranteed monthly pension choice of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 per month upon turning 60 years of age.",
    "Same pension amount continues to the spouse for life after the subscriber's demise.",
    "Nominee receives 100% refund of the accumulated pension corpus (up to ₹8.5 Lakhs) upon the demise of both subscriber and spouse.",
    "Tax benefits under Section 80CCD of the Income Tax Act."
  ],
  "eligibilityRules": {
    "minAge": 18,
    "maxAge": 40,
    "maxFamilyIncome": null,
    "educationLevels": [
      "Any"
    ],
    "currentCourses": [
      "Any"
    ],
    "applicableCategories": [
      "All"
    ],
    "gender": "All",
    "occupations": [
      "Any",
      "Daily Wage Worker",
      "Farmer",
      "Self Employed",
      "Private Sector Employee",
      "Unemployed"
    ],
    "disabilityOnly": false,
    "minimumDisabilityPercentage": 0,
    "additionalConditions": [
      "Citizen must be between 18 and 40 years of age at the time of joining.",
      "Must hold an active savings bank account or post office savings account.",
      "Applicant must not be an income tax payer under current Income Tax laws."
    ]
  },
  "requiredDocuments": [
    "Aadhaar Card",
    "Savings Bank Account Passbook / Account Number",
    "Active Mobile Number linked with bank account"
  ],
  "applicationSteps": [
    {
      "stepNumber": 1,
      "title": "Visit Bank Branch or NetBanking",
      "description": "Log in to your bank's mobile banking / internet banking portal, or visit your savings bank branch."
    },
    {
      "stepNumber": 2,
      "title": "Select Desired Pension Slab",
      "description": "Choose your monthly pension target (₹1,000 to ₹5,000). The monthly auto-debit contribution is calculated automatically based on your entry age."
    },
    {
      "stepNumber": 3,
      "title": "Fill Nominee and Spouse Details",
      "description": "Provide nominee details and spouse Aadhaar for pension continuity."
    },
    {
      "stepNumber": 4,
      "title": "Submit and Receive PRAN",
      "description": "Your Permanent Retirement Account Number (PRAN) is generated instantly, and contributions are auto-debited monthly."
    }
  ],
  "applicationStartDate": "Continuous enrollment",
  "applicationDeadline": "Open for all citizens aged 18 to 40",
  "officialInformationUrl": "https://npscra.nsdl.co.in/scheme-details.php",
  "officialApplicationUrl": "https://enps.nsdl.com/eNPS/ApySubRegistration.html",
  "sourceVerifiedAt": "2026-01-20",
  "status": "Active",
  "isFeatured": true
},
  {
  "name": "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
  "slug": "ayushman-bharat-pmjay",
  "shortDescription": "World's largest public health insurance scheme providing ₹5,00,000 cashless annual medical coverage per family across empanelled hospitals.",
  "description": "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is implemented by the National Health Authority (NHA), Ministry of Health and Family Welfare. It provides a health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization to bottom 40% vulnerable families and is universally expanded to ALL senior citizens aged 70 and above under the Ayushman Vaya Vandana initiative.",
  "schemeType": "Welfare",
  "governmentLevel": "Central Government",
  "ministryOrDepartment": "National Health Authority, Ministry of Health and Family Welfare",
  "categories": [
    "general-public",
    "senior-citizens",
    "women",
    "daily-wage-workers"
  ],
  "states": [
    "All India"
  ],
  "beneficiaryTypes": [
    "Normal Citizens",
    "Families",
    "Senior Citizens (70+ Universal)",
    "Low Income Households"
  ],
  "benefits": [
    "Cashless and paperless inpatient medical treatment up to ₹5,00,000 per family per year.",
    "Covers 1,949 medical and surgical procedures across 27 specialties including oncology, cardiology, and orthopedics.",
    "Pre-existing diseases covered from Day 1 with 3 days pre-hospitalization and 15 days post-hospitalization medications included.",
    "Universal expansion: Dedicated ₹5 Lakh top-up health coverage for all senior citizens aged 70+ irrespective of family income.",
    "Accepted at over 29,000 empanelled public and private hospitals across India with nationwide portability."
  ],
  "eligibilityRules": {
    "minAge": 0,
    "maxAge": 120,
    "maxFamilyIncome": null,
    "educationLevels": [
      "Any"
    ],
    "currentCourses": [
      "Any"
    ],
    "applicableCategories": [
      "All"
    ],
    "gender": "All",
    "occupations": [
      "Any",
      "Daily Wage Worker",
      "Farmer",
      "Self Employed",
      "Private Sector Employee",
      "Unemployed",
      "Student",
      "Retired"
    ],
    "disabilityOnly": false,
    "minimumDisabilityPercentage": 0,
    "additionalConditions": [
      "Families listed under SECC 2011 deprivation criteria, active NFSA Ration Card holders, OR any Indian citizen aged 70 years and above.",
      "Must possess an Aadhaar card for biometric/OTP e-KYC authentication."
    ]
  },
  "requiredDocuments": [
    "Aadhaar Card (all family members)",
    "Ration Card / NFSA Card / Family ID",
    "Active Mobile Number for OTP verification"
  ],
  "applicationSteps": [
    {
      "stepNumber": 1,
      "title": "Check Eligibility Online",
      "description": "Visit the official Ayushman portal (beneficiary.nha.gov.in) and enter your mobile number and state/Aadhaar/Ration card to check if your family is listed."
    },
    {
      "stepNumber": 2,
      "title": "Complete Aadhaar e-KYC",
      "description": "Complete quick Aadhaar OTP or biometric e-KYC for each family member (or senior citizen 70+)."
    },
    {
      "stepNumber": 3,
      "title": "Download Ayushman Card",
      "description": "Once verified, immediately download your digital Ayushman Card / Ayushman Vaya Vandana Card (PVC card also available at CSC centers)."
    },
    {
      "stepNumber": 4,
      "title": "Avail Cashless Hospitalization",
      "description": "Present the Ayushman Card or Aadhaar at the Ayushman Mitra desk of any empanelled hospital for cashless treatment."
    }
  ],
  "applicationStartDate": "Continuous enrollment",
  "applicationDeadline": "Open year-round for all eligible citizens",
  "officialInformationUrl": "https://pmjay.gov.in",
  "officialApplicationUrl": "https://beneficiary.nha.gov.in",
  "sourceVerifiedAt": "2026-01-28",
  "status": "Active",
  "isFeatured": true
},
  {
  "name": "Pradhan Mantri Suraksha Bima Yojana (PMSBY) - Universal Accident Insurance",
  "slug": "pradhan-mantri-suraksha-bima-yojana",
  "shortDescription": "Ultra-affordable accidental death and disability insurance cover of ₹2,00,000 for all citizens aged 18-70 at only ₹20 per year.",
  "description": "Pradhan Mantri Suraksha Bima Yojana (PMSBY) is an accident insurance scheme offered by Public Sector and Private General Insurance Companies in tie-up with commercial banks and post offices. It gives every common citizen and earning family member high-value accidental protection for a negligible annual premium of ₹20 auto-debited from their savings account.",
  "schemeType": "Welfare",
  "governmentLevel": "Central Government",
  "ministryOrDepartment": "Department of Financial Services, Ministry of Finance",
  "categories": [
    "general-public",
    "daily-wage-workers",
    "farmers"
  ],
  "states": [
    "All India"
  ],
  "beneficiaryTypes": [
    "Normal Citizens",
    "Bank Account Holders",
    "Common Public",
    "Farmers"
  ],
  "benefits": [
    "₹2,00,000 payable to nominee in the event of accidental death.",
    "₹2,00,000 cover for permanent total disability (loss of both eyes or both hands/feet).",
    "₹1,00,000 cover for permanent partial disability (loss of sight in one eye or loss of one hand/foot).",
    "Nominal premium of only ₹20 per annum auto-debited directly from bank account once a year."
  ],
  "eligibilityRules": {
    "minAge": 18,
    "maxAge": 70,
    "maxFamilyIncome": null,
    "educationLevels": [
      "Any"
    ],
    "currentCourses": [
      "Any"
    ],
    "applicableCategories": [
      "All"
    ],
    "gender": "All",
    "occupations": [
      "Any",
      "Daily Wage Worker",
      "Farmer",
      "Student",
      "Self Employed",
      "Private Sector Employee",
      "Homemaker"
    ],
    "disabilityOnly": false,
    "minimumDisabilityPercentage": 0,
    "additionalConditions": [
      "Citizen must be between 18 and 70 years of age.",
      "Must possess an individual savings bank account or post office savings account.",
      "Must submit consent for auto-debit of ₹20 annual premium before May 31 each year."
    ]
  },
  "requiredDocuments": [
    "Aadhaar Card",
    "Savings Bank Account Passbook",
    "Nominee Details (Name, Aadhaar, and relationship)"
  ],
  "applicationSteps": [
    {
      "stepNumber": 1,
      "title": "Access NetBanking or Visit Bank",
      "description": "Open your bank's mobile banking app, net banking portal, or visit your nearest bank/post office branch."
    },
    {
      "stepNumber": 2,
      "title": "Select PMSBY Insurance",
      "description": "Go to the 'Social Security Schemes / Insurance' section and select Pradhan Mantri Suraksha Bima Yojana."
    },
    {
      "stepNumber": 3,
      "title": "Enter Nominee Details and Auto-Debit Consent",
      "description": "Specify nominee information and authorize auto-debit of ₹20 for annual renewal."
    },
    {
      "stepNumber": 4,
      "title": "Receive Certificate of Insurance",
      "description": "Download the instant Acknowledgement Slip and Certificate of Insurance (COI)."
    }
  ],
  "applicationStartDate": "Continuous enrollment (Annual renewal by May 31)",
  "applicationDeadline": "Open year-round for all bank account holders",
  "officialInformationUrl": "https://financialservices.gov.in/beta/en/schemes-programmes/pradhan-mantri-suraksha-bima-yojana",
  "officialApplicationUrl": "https://jansuraksha.gov.in",
  "sourceVerifiedAt": "2026-01-20",
  "status": "Active",
  "isFeatured": true
},
  {
  "name": "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) - Life Insurance Scheme",
  "slug": "pradhan-mantri-jeevan-jyoti-bima-yojana",
  "shortDescription": "Affordable life insurance scheme providing ₹2,00,000 risk coverage for death due to any cause at ₹436 annual premium.",
  "description": "Pradhan Mantri Jeevan Jyoti Bima Yojana is a one-year renewable term life insurance scheme offered through LIC and private life insurers in collaboration with banks. It ensures that common citizens and their dependent families receive financial security of ₹2 Lakhs in case of the unfortunate death of the earning member.",
  "schemeType": "Welfare",
  "governmentLevel": "Central Government",
  "ministryOrDepartment": "Department of Financial Services, Ministry of Finance",
  "categories": [
    "general-public",
    "daily-wage-workers",
    "farmers"
  ],
  "states": [
    "All India"
  ],
  "beneficiaryTypes": [
    "Normal Citizens",
    "Earning Individuals",
    "Families",
    "Workers"
  ],
  "benefits": [
    "₹2,00,000 life insurance cover paid directly to the nominee upon the death of the insured due to any cause (natural or accidental).",
    "Low annual premium of ₹436 per year (pro-rata option available for mid-year joiners).",
    "Hassle-free claim settlement directly credited to nominee bank account within 30 days."
  ],
  "eligibilityRules": {
    "minAge": 18,
    "maxAge": 50,
    "maxFamilyIncome": null,
    "educationLevels": [
      "Any"
    ],
    "currentCourses": [
      "Any"
    ],
    "applicableCategories": [
      "All"
    ],
    "gender": "All",
    "occupations": [
      "Any",
      "Daily Wage Worker",
      "Farmer",
      "Self Employed",
      "Private Sector Employee",
      "Homemaker"
    ],
    "disabilityOnly": false,
    "minimumDisabilityPercentage": 0,
    "additionalConditions": [
      "Citizen must be between 18 and 50 years of age at the time of enrollment (cover continues up to age 55 subject to annual renewal).",
      "Must have an active savings bank or post office account.",
      "Self-declaration of good health at enrollment."
    ]
  },
  "requiredDocuments": [
    "Aadhaar Card",
    "Bank Account Passbook",
    "Nominee identification and bank details"
  ],
  "applicationSteps": [
    {
      "stepNumber": 1,
      "title": "Enroll via Bank NetBanking or Branch",
      "description": "Log in to your bank's portal or submit a PMJJBY enrollment form at your local bank branch."
    },
    {
      "stepNumber": 2,
      "title": "Fill Auto-Debit and Health Declaration",
      "description": "Provide Aadhaar details, designate nominee, and authorize annual debit of ₹436."
    },
    {
      "stepNumber": 3,
      "title": "Download Insurance Receipt",
      "description": "Obtain the Certificate of Insurance with policy number and keep nominee informed."
    }
  ],
  "applicationStartDate": "Continuous enrollment",
  "applicationDeadline": "Open year-round for citizens aged 18 to 50",
  "officialInformationUrl": "https://financialservices.gov.in/beta/en/schemes-programmes/pradhan-mantri-jeevan-jyoti-bima-yojana",
  "officialApplicationUrl": "https://jansuraksha.gov.in",
  "sourceVerifiedAt": "2026-01-20",
  "status": "Active",
  "isFeatured": true
},
  {
  "name": "Pradhan Mantri Awas Yojana (PMAY) - Housing for All",
  "slug": "pradhan-mantri-awas-yojana",
  "shortDescription": "Pucca housing subsidy and home loan interest concessions up to ₹2.67 Lakhs for normal citizens, EWS, and low/middle income families.",
  "description": "Pradhan Mantri Awas Yojana (PMAY) is a flagship mission of the Ministry of Housing and Urban Affairs (Urban) and Ministry of Rural Development (Gramin). The mission addresses the housing shortage among the low and middle-income segments including homeless families, ensuring every Indian family owns a pucca house equipped with water, sanitation, and electricity.",
  "schemeType": "Welfare",
  "governmentLevel": "Central Government",
  "ministryOrDepartment": "Ministry of Housing and Urban Affairs & Ministry of Rural Development",
  "categories": [
    "general-public",
    "daily-wage-workers",
    "women",
    "farmers"
  ],
  "states": [
    "All India"
  ],
  "beneficiaryTypes": [
    "Normal Citizens",
    "Homeless Families",
    "Low & Middle Income Groups",
    "Rural & Urban Households"
  ],
  "benefits": [
    "Direct financial grant of ₹1,20,000 in plain areas and ₹1,30,000 in hilly/difficult areas for pucca house construction (PMAY-Gramin).",
    "Credit-Linked Subsidy Scheme (CLSS) provides upfront interest subsidy up to ₹2.67 Lakhs on housing loans for urban home buyers.",
    "Additional financial support of ₹12,000 for toilet construction under Swachh Bharat Mission and 90/95 days of unskilled labor wages under MGNREGS.",
    "Mandatory inclusion of adult woman of the household as sole or joint owner of the house."
  ],
  "eligibilityRules": {
    "minAge": 18,
    "maxAge": 70,
    "maxFamilyIncome": 600000,
    "educationLevels": [
      "Any"
    ],
    "currentCourses": [
      "Any"
    ],
    "applicableCategories": [
      "All"
    ],
    "gender": "All",
    "occupations": [
      "Any",
      "Daily Wage Worker",
      "Farmer",
      "Self Employed",
      "Private Sector Employee",
      "Homemaker"
    ],
    "disabilityOnly": false,
    "minimumDisabilityPercentage": 0,
    "additionalConditions": [
      "Beneficiary family must not own a pucca (all-weather permanent) house in their name anywhere in India.",
      "Should not have previously availed central assistance under any housing scheme from the Government of India.",
      "Annual household income within EWS (up to ₹3 Lakhs), LIG (up to ₹6 Lakhs), or MIG limits."
    ]
  },
  "requiredDocuments": [
    "Aadhaar Card (all adult family members)",
    "Income Proof / BPL Card / Salary Slip",
    "Land Ownership Documents / Patta (for self-construction)",
    "Bank Account Passbook (Aadhaar-linked for DBT)",
    "Affidavit affirming no pucca house is owned in India"
  ],
  "applicationSteps": [
    {
      "stepNumber": 1,
      "title": "Apply Online or through CSC",
      "description": "Visit the official PMAY portal (pmay-urban.gov.in) or visit your nearest Common Service Centre (CSC) with Aadhaar."
    },
    {
      "stepNumber": 2,
      "title": "Fill Beneficiary Assessment Form",
      "description": "Enter your Aadhaar, family demographics, current residential address, and income details."
    },
    {
      "stepNumber": 3,
      "title": "Physical and Digital Verification",
      "description": "Local municipal / Gram Panchayat survey teams verify the plot, existing shelter status, and geo-tag coordinates."
    },
    {
      "stepNumber": 4,
      "title": "Sanction and Installment Disbursal",
      "description": "Once approved, financial installments are transferred in 3 stages directly to your bank account upon foundation, lintel, and roof completion."
    }
  ],
  "applicationStartDate": "Continuous enrollment cycle",
  "applicationDeadline": "Open under PMAY 2.0 extension",
  "officialInformationUrl": "https://pmaymis.gov.in",
  "officialApplicationUrl": "https://pmay-urban.gov.in/apply-online",
  "sourceVerifiedAt": "2026-01-25",
  "status": "Active",
  "isFeatured": true
},
  {
  "name": "Pradhan Mantri Ujjwala Yojana (PMUY - Ujjwala 2.0)",
  "slug": "pradhan-mantri-ujjwala-yojana",
  "shortDescription": "Deposit-free LPG cooking gas connection and ongoing ₹300 per cylinder subsidy for women in normal and low-income households.",
  "description": "Pradhan Mantri Ujjwala Yojana (PMUY - Ujjwala 2.0) is launched by the Ministry of Petroleum and Natural Gas to make clean cooking fuel available to rural and deprived households that were previously using hazardous biomass like firewood or dung cakes.",
  "schemeType": "Welfare",
  "governmentLevel": "Central Government",
  "ministryOrDepartment": "Ministry of Petroleum and Natural Gas",
  "categories": [
    "general-public",
    "women",
    "daily-wage-workers"
  ],
  "states": [
    "All India"
  ],
  "beneficiaryTypes": [
    "Normal Households",
    "Women Beneficiaries",
    "Rural & Semi-Urban Families"
  ],
  "benefits": [
    "Completely free deposit-free LPG connection including regulator, safety hose, and domestic gas cylinder.",
    "First refill of 14.2 kg LPG cylinder provided completely free of cost.",
    "Free double-burner LPG gas stove (hotplate) provided to the beneficiary.",
    "Targeted direct benefit transfer (DBT) subsidy of ₹300 per cylinder for up to 12 refills per financial year credited directly to bank account."
  ],
  "eligibilityRules": {
    "minAge": 18,
    "maxAge": 100,
    "maxFamilyIncome": 300000,
    "educationLevels": [
      "Any"
    ],
    "currentCourses": [
      "Any"
    ],
    "applicableCategories": [
      "All"
    ],
    "gender": "Female",
    "occupations": [
      "Any",
      "Homemaker",
      "Daily Wage Worker",
      "Farmer",
      "Self Employed"
    ],
    "disabilityOnly": false,
    "minimumDisabilityPercentage": 0,
    "additionalConditions": [
      "Applicant must be an adult woman aged 18 years or above belonging to a poor / BPL household.",
      "There must NOT be any existing LPG connection in the same household from any Oil Marketing Company (IOCL, BPCL, HPCL).",
      "Migrant families can apply under Ujjwala 2.0 with a self-declaration of address without needing local address proof."
    ]
  },
  "requiredDocuments": [
    "Aadhaar Card of the adult woman applicant",
    "Aadhaar Cards of all adult family members residing in household",
    "Ration Card / Family Composition Document (or Self-Declaration for migrants)",
    "Bank Account Passbook (Aadhaar linked)",
    "Passport-sized photograph"
  ],
  "applicationSteps": [
    {
      "stepNumber": 1,
      "title": "Apply Online or at Local LPG Distributor",
      "description": "Visit pmuy.gov.in and choose your nearest LPG distributor (Indane, Bharatgas, or HP Gas), or visit the distributor in person."
    },
    {
      "stepNumber": 2,
      "title": "Submit e-KYC and Family Details",
      "description": "Provide Aadhaar for biometric/OTP e-KYC and submit details of family members."
    },
    {
      "stepNumber": 3,
      "title": "Distributor Verification and Approval",
      "description": "The Oil Marketing Company cross-verifies against the national de-duplication database to confirm no prior LPG connection exists."
    },
    {
      "stepNumber": 4,
      "title": "Connection Delivery",
      "description": "Receive the new gas cylinder, regulator, free stove, and your blue SV book directly at home."
    }
  ],
  "applicationStartDate": "Continuous enrollment",
  "applicationDeadline": "Open under Ujjwala 2.0 nationwide",
  "officialInformationUrl": "https://www.pmuy.gov.in",
  "officialApplicationUrl": "https://www.pmuy.gov.in/ujjwala2.html",
  "sourceVerifiedAt": "2026-01-26",
  "status": "Active",
  "isFeatured": true
},
  {
  "name": "National Family Benefit Scheme (NFBS) - NSAP",
  "slug": "national-family-benefit-scheme",
  "shortDescription": "One-time financial assistance of ₹20,000 paid to normal bereaved BPL families on the unfortunate demise of the primary breadwinner.",
  "description": "The National Family Benefit Scheme (NFBS) is a vital component of the National Social Assistance Programme (NSAP) under the Ministry of Rural Development. It provides critical emergency relief to poor and ordinary families who face sudden loss of livelihood due to the untimely death of their family's main earner.",
  "schemeType": "Welfare",
  "governmentLevel": "Central Government",
  "ministryOrDepartment": "Ministry of Rural Development",
  "categories": [
    "general-public",
    "daily-wage-workers",
    "widows"
  ],
  "states": [
    "All India"
  ],
  "beneficiaryTypes": [
    "Normal Families",
    "Bereaved Households",
    "BPL Citizens"
  ],
  "benefits": [
    "Lump-sum cash assistance of ₹20,000 paid directly into the bank account of the surviving head of the family.",
    "Direct DBT transfer through PFMS without any deduction or administrative fees."
  ],
  "eligibilityRules": {
    "minAge": 18,
    "maxAge": 59,
    "maxFamilyIncome": 120000,
    "educationLevels": [
      "Any"
    ],
    "currentCourses": [
      "Any"
    ],
    "applicableCategories": [
      "All"
    ],
    "gender": "All",
    "occupations": [
      "Any",
      "Daily Wage Worker",
      "Homemaker",
      "Farmer"
    ],
    "disabilityOnly": false,
    "minimumDisabilityPercentage": 0,
    "additionalConditions": [
      "The primary breadwinner (male or female) must have been between 18 and 59 years of age at the time of death.",
      "The household must be certified as Below Poverty Line (BPL) under state government guidelines.",
      "Application must be filed within 6 months of the breadwinner's demise."
    ]
  },
  "requiredDocuments": [
    "Official Death Certificate of the deceased breadwinner",
    "Age proof of the deceased breadwinner showing age between 18 and 59 years",
    "BPL Ration Card / Income Certificate of the surviving family",
    "Aadhaar Card of the surviving applicant / head of household",
    "Bank Account Passbook"
  ],
  "applicationSteps": [
    {
      "stepNumber": 1,
      "title": "Obtain Application Form",
      "description": "Collect the NFBS application form from your local Gram Panchayat, Block Development Officer (BDO), or Municipal Corporation office, or download from nsap.nic.in."
    },
    {
      "stepNumber": 2,
      "title": "Attach Death Certificate & BPL Proof",
      "description": "Attach the municipal death certificate, age proof of the breadwinner, and certified BPL ration card copy."
    },
    {
      "stepNumber": 3,
      "title": "Verification and Sanction",
      "description": "The Sub-Divisional Magistrate (SDM) / BDO verifies the claim and sanctions the grant."
    },
    {
      "stepNumber": 4,
      "title": "Direct Bank Transfer",
      "description": "₹20,000 is credited directly into the applicant's Aadhaar-linked savings account."
    }
  ],
  "applicationStartDate": "Continuous submission (within 6 months of death)",
  "applicationDeadline": "Open year-round under NSAP",
  "officialInformationUrl": "https://nsap.nic.in",
  "officialApplicationUrl": "https://nsap.nic.in/citizenApplicationForm.do",
  "sourceVerifiedAt": "2026-01-20",
  "status": "Active",
  "isFeatured": false
},
];

export const seedApplications = [
  {
    refNo: "APP-2026-001",
    studentName: "Mark Henry",
    email: "mark.henry@edu.in",
    mobile: "9876543210",
    schemeId: "file_sch_1",
    schemeName: "Post-Matric Scholarship for SC Students",
    ministry: "Ministry of Social Justice and Empowerment",
    state: "Delhi NCR",
    category: "SC",
    educationLevel: "Undergraduate",
    institution: "Delhi Technological University",
    applicationDate: "2026-10-18",
    status: "Pending",
    remark: "Application under verification at State Nodal Office.",
    nextStep: "Awaiting institute document scrutiny and bank account seeding.",
    reviewedBy: "Administrator",
  },
  {
    refNo: "APP-2026-002",
    studentName: "Samantha Fernando",
    email: "samantha.f@college.ac.in",
    mobile: "9812345678",
    schemeId: "file_sch_2",
    schemeName: "Central Sector Scheme of Scholarships for College and University Students",
    ministry: "Department of Higher Education",
    state: "Maharashtra",
    category: "General",
    educationLevel: "Undergraduate",
    institution: "Mumbai University",
    applicationDate: "2026-10-14",
    status: "Approved",
    remark: "Sanction order generated. Disbursal scheduled via PFMS Direct Benefit Transfer.",
    nextStep: "Check registered Aadhaar-linked bank account for DBT payment alert.",
    reviewedBy: "Administrator",
  },
  {
    refNo: "APP-2026-003",
    studentName: "Albert De Silva",
    email: "albert.silva@tech.edu.in",
    mobile: "9901122334",
    schemeId: "file_sch_4",
    schemeName: "Pragati Scholarship Scheme for Girl Students (AICTE)",
    ministry: "All India Council for Technical Education (AICTE)",
    state: "Karnataka",
    category: "OBC",
    educationLevel: "Undergraduate",
    institution: "BMS College of Engineering",
    applicationDate: "2026-10-21",
    status: "Pending",
    remark: "Income certificate verification in progress.",
    nextStep: "No action required from applicant at this time.",
    reviewedBy: "Administrator",
  },
  {
    refNo: "APP-2026-004",
    studentName: "Romesh Jayawardena",
    email: "romesh.j@assam.edu.in",
    mobile: "9435012345",
    schemeId: "file_sch_2",
    schemeName: "Central Sector Scheme of Scholarships for College and University Students",
    ministry: "Department of Higher Education",
    state: "Assam",
    category: "General",
    educationLevel: "Undergraduate",
    institution: "Gauhati University",
    applicationDate: "2026-10-09",
    status: "Rejected",
    remark: "Annual family income exceeded statutory limit of ₹4.5 Lakhs.",
    nextStep: "You may apply for alternative central merit-cum-means assistance.",
    reviewedBy: "Administrator",
  },
  {
    refNo: "APP-2026-005",
    studentName: "Kalan Madhusanka",
    email: "kalan.m@tribal.gov.in",
    mobile: "9755123456",
    schemeId: "file_sch_6",
    schemeName: "National Fellowship and Scholarship for Higher Education of ST Students",
    ministry: "Ministry of Tribal Affairs",
    state: "Madhya Pradesh",
    category: "ST",
    educationLevel: "Doctorate",
    institution: "Barkatullah University Bhopal",
    applicationDate: "2026-10-11",
    status: "Approved",
    remark: "Academic credentials verified by University Registrar.",
    nextStep: "Annual continuation grant approved for academic year 2026-27.",
    reviewedBy: "Administrator",
  },
  {
    refNo: "APP-2026-006",
    studentName: "Priya Sharma",
    email: "priya.sharma@uptu.ac.in",
    mobile: "9415098765",
    schemeId: "file_sch_1",
    schemeName: "Post-Matric Scholarship for SC Students",
    ministry: "Ministry of Social Justice and Empowerment",
    state: "Uttar Pradesh",
    category: "SC",
    educationLevel: "Undergraduate",
    institution: "Lucknow University",
    applicationDate: "2026-10-22",
    status: "Approved",
    remark: "Institutional L1 & L2 verification completed successfully.",
    nextStep: "Disbursal queued in PFMS bank batch.",
    reviewedBy: "Administrator",
  },
  {
    refNo: "APP-2026-007",
    studentName: "Arun Patel",
    email: "arun.patel@guj.edu.in",
    mobile: "9825012345",
    schemeId: "file_sch_7",
    schemeName: "Post-Matric Scholarship Scheme for Minorities",
    ministry: "Ministry of Minority Affairs",
    state: "Gujarat",
    category: "Minority",
    educationLevel: "Undergraduate",
    institution: "Gujarat University Ahmedabad",
    applicationDate: "2026-10-23",
    status: "Pending",
    remark: "Caste / Minority certificate digital verification in progress.",
    nextStep: "Verification by State Directorate of Minority Welfare.",
    reviewedBy: "Administrator",
  },
  {
    refNo: "APP-2026-008",
    studentName: "Deepa Nair",
    email: "deepa.nair@nitc.ac.in",
    mobile: "9447012345",
    schemeId: "file_sch_5",
    schemeName: "AICTE PG Scholarship for GATE and GPAT Qualified Candidates",
    ministry: "All India Council for Technical Education (AICTE)",
    state: "Kerala",
    category: "General",
    educationLevel: "Postgraduate",
    institution: "National Institute of Technology Calicut",
    applicationDate: "2026-10-24",
    status: "Approved",
    remark: "Valid GATE scorecard verified via COAP database.",
    nextStep: "Monthly scholarship disbursal active.",
    reviewedBy: "Administrator",
  }
];
