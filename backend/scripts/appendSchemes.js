import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../../../');

export const newCategories = [
  {
    name: "General Citizens & Families",
    slug: "general-public",
    description: "Universal health assurance, social security insurance, affordable housing, clean cooking gas, and public welfare schemes for common citizens.",
    icon: "Users",
    featured: true,
  }
];

export const newSchemes = [
  // --- ELDERLY SCHEMES ---
  {
    name: "Pradhan Mantri Vaya Vandana Yojana (PMVVY)",
    slug: "pradhan-mantri-vaya-vandana-yojana",
    shortDescription: "Guaranteed pension scheme for senior citizens aged 60 and above offering assured regular monthly payouts and financial security.",
    description: "Pradhan Mantri Vaya Vandana Yojana (PMVVY) is a government-backed pension scheme launched through the Life Insurance Corporation of India (LIC) under the Ministry of Finance. It provides social security during old age and protects senior citizens against future falls in their interest income due to uncertain market conditions.",
    schemeType: "Welfare",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Department of Financial Services, Ministry of Finance (Operated by LIC)",
    categories: ["senior-citizens", "general-public"],
    states: ["All India"],
    beneficiaryTypes: ["Senior Citizens", "Elderly (60+ Years)", "Retirees", "Pensioners"],
    benefits: [
      "Guaranteed pension payout at an assured interest rate for a full policy tenure of 10 years.",
      "Pension payment options: Monthly (minimum ₹1,000 up to ₹9,250/month), Quarterly, Half-Yearly, or Annually.",
      "Premature exit allowed under exceptional circumstances such as critical/terminal illness of self or spouse with 98% refund of purchase price.",
      "Loan facility available up to 75% of purchase price after completion of 3 policy years.",
      "Full purchase price refunded to the nominee on demise of the senior citizen subscriber."
    ],
    eligibilityRules: {
      minAge: 60,
      maxAge: 120,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Retired", "Any", "Self Employed", "Homemaker", "Farmer", "Unemployed"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Applicant must be an Indian citizen aged 60 years or above at entry.",
        "Maximum purchase price investment ceiling is ₹15,00,000 per senior citizen.",
        "No medical examination is required to join the scheme."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card (Identity & Age verification)",
      "Age Proof (PAN Card / Voter ID / Passport / Matriculation certificate)",
      "Bank Account Passbook / Cancelled Cheque (for direct pension credits)",
      "Passport-sized photograph",
      "Address Proof"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Choose Investment Mode",
        description: "Decide the lump-sum purchase price (from ₹1,62,162 for ₹1,000/month up to ₹15,00,000 for ₹9,250/month) and your preferred pension frequency."
      },
      {
        stepNumber: 2,
        title: "Apply Online or at LIC Branch",
        description: "Visit the official LIC portal (licindia.in) or your nearest Life Insurance Corporation (LIC) branch."
      },
      {
        stepNumber: 3,
        title: "Submit Application Form and KYC",
        description: "Fill the PMVVY Proposal Form, attach self-attested Aadhaar, PAN card, age proof, and NEFT mandate form."
      },
      {
        stepNumber: 4,
        title: "Receive Policy Document & Monthly Credit",
        description: "LIC issues the policy document and the pension starts crediting directly into your savings account based on chosen frequency."
      }
    ],
    applicationStartDate: "Continuous enrollment cycle",
    applicationDeadline: "Open for all eligible senior citizens",
    officialInformationUrl: "https://financialservices.gov.in/beta/en/schemes-programmes/pradhan-mantri-vaya-vandana-yojana",
    officialApplicationUrl: "https://licindia.in/web/guest/pradhan-mantri-vaya-vandana-yojana",
    sourceVerifiedAt: "2026-01-20",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Rashtriya Vayoshri Yojana (RVY) - Assisted Living Devices for Senior Citizens",
    slug: "rashtriya-vayoshri-yojana",
    shortDescription: "Free distribution of physical aids and assisted living devices for senior citizens belonging to BPL category or suffering from age-related infirmities.",
    description: "Rashtriya Vayoshri Yojana is a Central Sector Scheme formulated by the Ministry of Social Justice and Empowerment and executed through Artificial Limbs Manufacturing Corporation of India (ALIMCO). It provides high quality, modern assisted-living devices free of cost to senior citizens living below poverty line or with income under ₹15,000/month.",
    schemeType: "Welfare",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Social Justice and Empowerment (Executed by ALIMCO)",
    categories: ["senior-citizens", "persons-with-disabilities"],
    states: ["All India"],
    beneficiaryTypes: ["Senior Citizens", "BPL Elderly", "Elderly with Physical Disabilities"],
    benefits: [
      "100% free distribution of customized assistive living devices: Walking Sticks, Elbow Crutches, Walkers, Hearing Aids, Wheelchairs, Artificial Dentures, and Spectacles.",
      "Free medical assessment camps conducted by specialized clinical teams across all districts.",
      "One year free maintenance support on high-end electronic assistive appliances."
    ],
    eligibilityRules: {
      minAge: 60,
      maxAge: 120,
      maxFamilyIncome: 180000,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Any", "Retired", "Unemployed", "Homemaker"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Applicant must be an Indian senior citizen aged 60 years or above.",
        "Family income must not exceed ₹15,000 per month (or hold a valid BPL Ration Card / Antyodaya Anna Yojana Card).",
        "Must suffer from any age-related physical impairment (mobility, vision, hearing, or dental impairment) certified by a medical officer."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card (Proof of identity and age)",
      "BPL Ration Card / Valid Family Income Certificate (≤ ₹1.8 Lakh per annum)",
      "Medical Certificate / Disability Certificate from government medical officer",
      "Passport-sized photograph"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Attend District Assessment Camp",
        description: "Attend the designated ALIMCO / District Social Welfare Department screening camp organized at your district hospital or block headquarters."
      },
      {
        stepNumber: 2,
        title: "Clinical Screening and Measurement",
        description: "Doctors assess hearing, vision, dentition, and locomotor support requirements and prescribe specific assistive devices."
      },
      {
        stepNumber: 3,
        title: "Document Verification",
        description: "Present your Aadhaar card and BPL card / income proof to the verification desk."
      },
      {
        stepNumber: 4,
        title: "Free Device Distribution",
        description: "Receive the fitted assistive devices free of charge during the grand distribution camp or from the district social welfare office."
      }
    ],
    applicationStartDate: "Annual District Camp Schedules",
    applicationDeadline: "Ongoing through ALIMCO district social welfare camps",
    officialInformationUrl: "https://socialjustice.gov.in/schemes/rashtriya-vayoshri-yojana",
    officialApplicationUrl: "https://alimco.in/rashtriya-vayoshri-yojana",
    sourceVerifiedAt: "2026-01-25",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Atal Pension Yojana (APY) - Guaranteed Old Age Pension",
    slug: "atal-pension-yojana",
    shortDescription: "Government guaranteed pension scheme providing fixed monthly pension of ₹1,000 to ₹5,000 from age 60 for all citizens and unorganized workers.",
    description: "Atal Pension Yojana is a flagship social security scheme administered by the Pension Fund Regulatory and Development Authority (PFRDA) under the Ministry of Finance. APY guarantees a minimum monthly pension to every Indian citizen who joins between the ages of 18 and 40 years, ensuring dignity and income security in senior years.",
    schemeType: "Welfare",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Pension Fund Regulatory and Development Authority (PFRDA), Ministry of Finance",
    categories: ["senior-citizens", "daily-wage-workers", "general-public"],
    states: ["All India"],
    beneficiaryTypes: ["Normal Citizens", "Unorganized Workers", "Self Employed", "Future Senior Citizens"],
    benefits: [
      "Guaranteed monthly pension choice of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 per month upon turning 60 years of age.",
      "Same pension amount continues to the spouse for life after the subscriber's demise.",
      "Nominee receives 100% refund of the accumulated pension corpus (up to ₹8.5 Lakhs) upon the demise of both subscriber and spouse.",
      "Tax benefits under Section 80CCD of the Income Tax Act."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 40,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Any", "Daily Wage Worker", "Farmer", "Self Employed", "Private Sector Employee", "Unemployed"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Citizen must be between 18 and 40 years of age at the time of joining.",
        "Must hold an active savings bank account or post office savings account.",
        "Applicant must not be an income tax payer under current Income Tax laws."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Savings Bank Account Passbook / Account Number",
      "Active Mobile Number linked with bank account"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Visit Bank Branch or NetBanking",
        description: "Log in to your bank's mobile banking / internet banking portal, or visit your savings bank branch."
      },
      {
        stepNumber: 2,
        title: "Select Desired Pension Slab",
        description: "Choose your monthly pension target (₹1,000 to ₹5,000). The monthly auto-debit contribution is calculated automatically based on your entry age."
      },
      {
        stepNumber: 3,
        title: "Fill Nominee and Spouse Details",
        description: "Provide nominee details and spouse Aadhaar for pension continuity."
      },
      {
        stepNumber: 4,
        title: "Submit and Receive PRAN",
        description: "Your Permanent Retirement Account Number (PRAN) is generated instantly, and contributions are auto-debited monthly."
      }
    ],
    applicationStartDate: "Continuous enrollment",
    applicationDeadline: "Open for all citizens aged 18 to 40",
    officialInformationUrl: "https://npscra.nsdl.co.in/scheme-details.php",
    officialApplicationUrl: "https://enps.nsdl.com/eNPS/ApySubRegistration.html",
    sourceVerifiedAt: "2026-01-20",
    status: "Active",
    isFeatured: true
  },

  // --- NORMAL PEOPLE / COMMON CITIZEN SCHEMES ---
  {
    name: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
    slug: "ayushman-bharat-pmjay",
    shortDescription: "World's largest public health insurance scheme providing ₹5,00,000 cashless annual medical coverage per family across empanelled hospitals.",
    description: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is implemented by the National Health Authority (NHA), Ministry of Health and Family Welfare. It provides a health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization to bottom 40% vulnerable families and is universally expanded to ALL senior citizens aged 70 and above under the Ayushman Vaya Vandana initiative.",
    schemeType: "Welfare",
    governmentLevel: "Central Government",
    ministryOrDepartment: "National Health Authority, Ministry of Health and Family Welfare",
    categories: ["general-public", "senior-citizens", "women", "daily-wage-workers"],
    states: ["All India"],
    beneficiaryTypes: ["Normal Citizens", "Families", "Senior Citizens (70+ Universal)", "Low Income Households"],
    benefits: [
      "Cashless and paperless inpatient medical treatment up to ₹5,00,000 per family per year.",
      "Covers 1,949 medical and surgical procedures across 27 specialties including oncology, cardiology, and orthopedics.",
      "Pre-existing diseases covered from Day 1 with 3 days pre-hospitalization and 15 days post-hospitalization medications included.",
      "Universal expansion: Dedicated ₹5 Lakh top-up health coverage for all senior citizens aged 70+ irrespective of family income.",
      "Accepted at over 29,000 empanelled public and private hospitals across India with nationwide portability."
    ],
    eligibilityRules: {
      minAge: 0,
      maxAge: 120,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Any", "Daily Wage Worker", "Farmer", "Self Employed", "Private Sector Employee", "Unemployed", "Student", "Retired"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Families listed under SECC 2011 deprivation criteria, active NFSA Ration Card holders, OR any Indian citizen aged 70 years and above.",
        "Must possess an Aadhaar card for biometric/OTP e-KYC authentication."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card (all family members)",
      "Ration Card / NFSA Card / Family ID",
      "Active Mobile Number for OTP verification"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Check Eligibility Online",
        description: "Visit the official Ayushman portal (beneficiary.nha.gov.in) and enter your mobile number and state/Aadhaar/Ration card to check if your family is listed."
      },
      {
        stepNumber: 2,
        title: "Complete Aadhaar e-KYC",
        description: "Complete quick Aadhaar OTP or biometric e-KYC for each family member (or senior citizen 70+)."
      },
      {
        stepNumber: 3,
        title: "Download Ayushman Card",
        description: "Once verified, immediately download your digital Ayushman Card / Ayushman Vaya Vandana Card (PVC card also available at CSC centers)."
      },
      {
        stepNumber: 4,
        title: "Avail Cashless Hospitalization",
        description: "Present the Ayushman Card or Aadhaar at the Ayushman Mitra desk of any empanelled hospital for cashless treatment."
      }
    ],
    applicationStartDate: "Continuous enrollment",
    applicationDeadline: "Open year-round for all eligible citizens",
    officialInformationUrl: "https://pmjay.gov.in",
    officialApplicationUrl: "https://beneficiary.nha.gov.in",
    sourceVerifiedAt: "2026-01-28",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY) - Universal Accident Insurance",
    slug: "pradhan-mantri-suraksha-bima-yojana",
    shortDescription: "Ultra-affordable accidental death and disability insurance cover of ₹2,00,000 for all citizens aged 18-70 at only ₹20 per year.",
    description: "Pradhan Mantri Suraksha Bima Yojana (PMSBY) is an accident insurance scheme offered by Public Sector and Private General Insurance Companies in tie-up with commercial banks and post offices. It gives every common citizen and earning family member high-value accidental protection for a negligible annual premium of ₹20 auto-debited from their savings account.",
    schemeType: "Welfare",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Department of Financial Services, Ministry of Finance",
    categories: ["general-public", "daily-wage-workers", "farmers"],
    states: ["All India"],
    beneficiaryTypes: ["Normal Citizens", "Bank Account Holders", "Common Public", "Farmers"],
    benefits: [
      "₹2,00,000 payable to nominee in the event of accidental death.",
      "₹2,00,000 cover for permanent total disability (loss of both eyes or both hands/feet).",
      "₹1,00,000 cover for permanent partial disability (loss of sight in one eye or loss of one hand/foot).",
      "Nominal premium of only ₹20 per annum auto-debited directly from bank account once a year."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 70,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Any", "Daily Wage Worker", "Farmer", "Student", "Self Employed", "Private Sector Employee", "Homemaker"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Citizen must be between 18 and 70 years of age.",
        "Must possess an individual savings bank account or post office savings account.",
        "Must submit consent for auto-debit of ₹20 annual premium before May 31 each year."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Savings Bank Account Passbook",
      "Nominee Details (Name, Aadhaar, and relationship)"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Access NetBanking or Visit Bank",
        description: "Open your bank's mobile banking app, net banking portal, or visit your nearest bank/post office branch."
      },
      {
        stepNumber: 2,
        title: "Select PMSBY Insurance",
        description: "Go to the 'Social Security Schemes / Insurance' section and select Pradhan Mantri Suraksha Bima Yojana."
      },
      {
        stepNumber: 3,
        title: "Enter Nominee Details and Auto-Debit Consent",
        description: "Specify nominee information and authorize auto-debit of ₹20 for annual renewal."
      },
      {
        stepNumber: 4,
        title: "Receive Certificate of Insurance",
        description: "Download the instant Acknowledgement Slip and Certificate of Insurance (COI)."
      }
    ],
    applicationStartDate: "Continuous enrollment (Annual renewal by May 31)",
    applicationDeadline: "Open year-round for all bank account holders",
    officialInformationUrl: "https://financialservices.gov.in/beta/en/schemes-programmes/pradhan-mantri-suraksha-bima-yojana",
    officialApplicationUrl: "https://jansuraksha.gov.in",
    sourceVerifiedAt: "2026-01-20",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) - Life Insurance Scheme",
    slug: "pradhan-mantri-jeevan-jyoti-bima-yojana",
    shortDescription: "Affordable life insurance scheme providing ₹2,00,000 risk coverage for death due to any cause at ₹436 annual premium.",
    description: "Pradhan Mantri Jeevan Jyoti Bima Yojana is a one-year renewable term life insurance scheme offered through LIC and private life insurers in collaboration with banks. It ensures that common citizens and their dependent families receive financial security of ₹2 Lakhs in case of the unfortunate death of the earning member.",
    schemeType: "Welfare",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Department of Financial Services, Ministry of Finance",
    categories: ["general-public", "daily-wage-workers", "farmers"],
    states: ["All India"],
    beneficiaryTypes: ["Normal Citizens", "Earning Individuals", "Families", "Workers"],
    benefits: [
      "₹2,00,000 life insurance cover paid directly to the nominee upon the death of the insured due to any cause (natural or accidental).",
      "Low annual premium of ₹436 per year (pro-rata option available for mid-year joiners).",
      "Hassle-free claim settlement directly credited to nominee bank account within 30 days."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 50,
      maxFamilyIncome: null,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Any", "Daily Wage Worker", "Farmer", "Self Employed", "Private Sector Employee", "Homemaker"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Citizen must be between 18 and 50 years of age at the time of enrollment (cover continues up to age 55 subject to annual renewal).",
        "Must have an active savings bank or post office account.",
        "Self-declaration of good health at enrollment."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card",
      "Bank Account Passbook",
      "Nominee identification and bank details"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Enroll via Bank NetBanking or Branch",
        description: "Log in to your bank's portal or submit a PMJJBY enrollment form at your local bank branch."
      },
      {
        stepNumber: 2,
        title: "Fill Auto-Debit and Health Declaration",
        description: "Provide Aadhaar details, designate nominee, and authorize annual debit of ₹436."
      },
      {
        stepNumber: 3,
        title: "Download Insurance Receipt",
        description: "Obtain the Certificate of Insurance with policy number and keep nominee informed."
      }
    ],
    applicationStartDate: "Continuous enrollment",
    applicationDeadline: "Open year-round for citizens aged 18 to 50",
    officialInformationUrl: "https://financialservices.gov.in/beta/en/schemes-programmes/pradhan-mantri-jeevan-jyoti-bima-yojana",
    officialApplicationUrl: "https://jansuraksha.gov.in",
    sourceVerifiedAt: "2026-01-20",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Pradhan Mantri Awas Yojana (PMAY) - Housing for All",
    slug: "pradhan-mantri-awas-yojana",
    shortDescription: "Pucca housing subsidy and home loan interest concessions up to ₹2.67 Lakhs for normal citizens, EWS, and low/middle income families.",
    description: "Pradhan Mantri Awas Yojana (PMAY) is a flagship mission of the Ministry of Housing and Urban Affairs (Urban) and Ministry of Rural Development (Gramin). The mission addresses the housing shortage among the low and middle-income segments including homeless families, ensuring every Indian family owns a pucca house equipped with water, sanitation, and electricity.",
    schemeType: "Welfare",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Housing and Urban Affairs & Ministry of Rural Development",
    categories: ["general-public", "daily-wage-workers", "women", "farmers"],
    states: ["All India"],
    beneficiaryTypes: ["Normal Citizens", "Homeless Families", "Low & Middle Income Groups", "Rural & Urban Households"],
    benefits: [
      "Direct financial grant of ₹1,20,000 in plain areas and ₹1,30,000 in hilly/difficult areas for pucca house construction (PMAY-Gramin).",
      "Credit-Linked Subsidy Scheme (CLSS) provides upfront interest subsidy up to ₹2.67 Lakhs on housing loans for urban home buyers.",
      "Additional financial support of ₹12,000 for toilet construction under Swachh Bharat Mission and 90/95 days of unskilled labor wages under MGNREGS.",
      "Mandatory inclusion of adult woman of the household as sole or joint owner of the house."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 70,
      maxFamilyIncome: 600000,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Any", "Daily Wage Worker", "Farmer", "Self Employed", "Private Sector Employee", "Homemaker"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Beneficiary family must not own a pucca (all-weather permanent) house in their name anywhere in India.",
        "Should not have previously availed central assistance under any housing scheme from the Government of India.",
        "Annual household income within EWS (up to ₹3 Lakhs), LIG (up to ₹6 Lakhs), or MIG limits."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card (all adult family members)",
      "Income Proof / BPL Card / Salary Slip",
      "Land Ownership Documents / Patta (for self-construction)",
      "Bank Account Passbook (Aadhaar-linked for DBT)",
      "Affidavit affirming no pucca house is owned in India"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Apply Online or through CSC",
        description: "Visit the official PMAY portal (pmay-urban.gov.in) or visit your nearest Common Service Centre (CSC) with Aadhaar."
      },
      {
        stepNumber: 2,
        title: "Fill Beneficiary Assessment Form",
        description: "Enter your Aadhaar, family demographics, current residential address, and income details."
      },
      {
        stepNumber: 3,
        title: "Physical and Digital Verification",
        description: "Local municipal / Gram Panchayat survey teams verify the plot, existing shelter status, and geo-tag coordinates."
      },
      {
        stepNumber: 4,
        title: "Sanction and Installment Disbursal",
        description: "Once approved, financial installments are transferred in 3 stages directly to your bank account upon foundation, lintel, and roof completion."
      }
    ],
    applicationStartDate: "Continuous enrollment cycle",
    applicationDeadline: "Open under PMAY 2.0 extension",
    officialInformationUrl: "https://pmaymis.gov.in",
    officialApplicationUrl: "https://pmay-urban.gov.in/apply-online",
    sourceVerifiedAt: "2026-01-25",
    status: "Active",
    isFeatured: true
  },
  {
    name: "Pradhan Mantri Ujjwala Yojana (PMUY - Ujjwala 2.0)",
    slug: "pradhan-mantri-ujjwala-yojana",
    shortDescription: "Deposit-free LPG cooking gas connection and ongoing ₹300 per cylinder subsidy for women in normal and low-income households.",
    description: "Pradhan Mantri Ujjwala Yojana (PMUY - Ujjwala 2.0) is launched by the Ministry of Petroleum and Natural Gas to make clean cooking fuel available to rural and deprived households that were previously using hazardous biomass like firewood or dung cakes.",
    schemeType: "Welfare",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Petroleum and Natural Gas",
    categories: ["general-public", "women", "daily-wage-workers"],
    states: ["All India"],
    beneficiaryTypes: ["Normal Households", "Women Beneficiaries", "Rural & Semi-Urban Families"],
    benefits: [
      "Completely free deposit-free LPG connection including regulator, safety hose, and domestic gas cylinder.",
      "First refill of 14.2 kg LPG cylinder provided completely free of cost.",
      "Free double-burner LPG gas stove (hotplate) provided to the beneficiary.",
      "Targeted direct benefit transfer (DBT) subsidy of ₹300 per cylinder for up to 12 refills per financial year credited directly to bank account."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 100,
      maxFamilyIncome: 300000,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "Female",
      occupations: ["Any", "Homemaker", "Daily Wage Worker", "Farmer", "Self Employed"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "Applicant must be an adult woman aged 18 years or above belonging to a poor / BPL household.",
        "There must NOT be any existing LPG connection in the same household from any Oil Marketing Company (IOCL, BPCL, HPCL).",
        "Migrant families can apply under Ujjwala 2.0 with a self-declaration of address without needing local address proof."
      ]
    },
    requiredDocuments: [
      "Aadhaar Card of the adult woman applicant",
      "Aadhaar Cards of all adult family members residing in household",
      "Ration Card / Family Composition Document (or Self-Declaration for migrants)",
      "Bank Account Passbook (Aadhaar linked)",
      "Passport-sized photograph"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Apply Online or at Local LPG Distributor",
        description: "Visit pmuy.gov.in and choose your nearest LPG distributor (Indane, Bharatgas, or HP Gas), or visit the distributor in person."
      },
      {
        stepNumber: 2,
        title: "Submit e-KYC and Family Details",
        description: "Provide Aadhaar for biometric/OTP e-KYC and submit details of family members."
      },
      {
        stepNumber: 3,
        title: "Distributor Verification and Approval",
        description: "The Oil Marketing Company cross-verifies against the national de-duplication database to confirm no prior LPG connection exists."
      },
      {
        stepNumber: 4,
        title: "Connection Delivery",
        description: "Receive the new gas cylinder, regulator, free stove, and your blue SV book directly at home."
      }
    ],
    applicationStartDate: "Continuous enrollment",
    applicationDeadline: "Open under Ujjwala 2.0 nationwide",
    officialInformationUrl: "https://www.pmuy.gov.in",
    officialApplicationUrl: "https://www.pmuy.gov.in/ujjwala2.html",
    sourceVerifiedAt: "2026-01-26",
    status: "Active",
    isFeatured: true
  },
  {
    name: "National Family Benefit Scheme (NFBS) - NSAP",
    slug: "national-family-benefit-scheme",
    shortDescription: "One-time financial assistance of ₹20,000 paid to normal bereaved BPL families on the unfortunate demise of the primary breadwinner.",
    description: "The National Family Benefit Scheme (NFBS) is a vital component of the National Social Assistance Programme (NSAP) under the Ministry of Rural Development. It provides critical emergency relief to poor and ordinary families who face sudden loss of livelihood due to the untimely death of their family's main earner.",
    schemeType: "Welfare",
    governmentLevel: "Central Government",
    ministryOrDepartment: "Ministry of Rural Development",
    categories: ["general-public", "daily-wage-workers", "widows"],
    states: ["All India"],
    beneficiaryTypes: ["Normal Families", "Bereaved Households", "BPL Citizens"],
    benefits: [
      "Lump-sum cash assistance of ₹20,000 paid directly into the bank account of the surviving head of the family.",
      "Direct DBT transfer through PFMS without any deduction or administrative fees."
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 59,
      maxFamilyIncome: 120000,
      educationLevels: ["Any"],
      currentCourses: ["Any"],
      applicableCategories: ["All"],
      gender: "All",
      occupations: ["Any", "Daily Wage Worker", "Homemaker", "Farmer"],
      disabilityOnly: false,
      minimumDisabilityPercentage: 0,
      additionalConditions: [
        "The primary breadwinner (male or female) must have been between 18 and 59 years of age at the time of death.",
        "The household must be certified as Below Poverty Line (BPL) under state government guidelines.",
        "Application must be filed within 6 months of the breadwinner's demise."
      ]
    },
    requiredDocuments: [
      "Official Death Certificate of the deceased breadwinner",
      "Age proof of the deceased breadwinner showing age between 18 and 59 years",
      "BPL Ration Card / Income Certificate of the surviving family",
      "Aadhaar Card of the surviving applicant / head of household",
      "Bank Account Passbook"
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: "Obtain Application Form",
        description: "Collect the NFBS application form from your local Gram Panchayat, Block Development Officer (BDO), or Municipal Corporation office, or download from nsap.nic.in."
      },
      {
        stepNumber: 2,
        title: "Attach Death Certificate & BPL Proof",
        description: "Attach the municipal death certificate, age proof of the breadwinner, and certified BPL ration card copy."
      },
      {
        stepNumber: 3,
        title: "Verification and Sanction",
        description: "The Sub-Divisional Magistrate (SDM) / BDO verifies the claim and sanctions the grant."
      },
      {
        stepNumber: 4,
        title: "Direct Bank Transfer",
        description: "₹20,000 is credited directly into the applicant's Aadhaar-linked savings account."
      }
    ],
    applicationStartDate: "Continuous submission (within 6 months of death)",
    applicationDeadline: "Open year-round under NSAP",
    officialInformationUrl: "https://nsap.nic.in",
    officialApplicationUrl: "https://nsap.nic.in/citizenApplicationForm.do",
    sourceVerifiedAt: "2026-01-20",
    status: "Active",
    isFeatured: false
  }
];
