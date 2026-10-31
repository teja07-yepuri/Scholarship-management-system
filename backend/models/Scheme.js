import mongoose from 'mongoose';

const schemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Scheme name is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: [true, 'Short description is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Full description is required'],
    },
    schemeType: {
      type: String,
      required: [true, 'Scheme type is required'],
      enum: ['Scholarship', 'Welfare Scheme'],
      default: 'Welfare Scheme',
    },
    governmentLevel: {
      type: String,
      required: [true, 'Government level is required'],
      enum: ['Central Government', 'State Government'],
      default: 'Central Government',
    },
    ministryOrDepartment: {
      type: String,
      default: 'Government of India',
    },
    categories: [
      {
        type: String,
        required: true,
      },
    ],
    states: [
      {
        type: String,
        default: 'All India',
      },
    ],
    beneficiaryTypes: [
      {
        type: String,
      },
    ],
    benefits: [
      {
        type: String,
        required: true,
      },
    ],
    eligibilityRules: {
      minAge: { type: Number, default: 0 },
      maxAge: { type: Number, default: 120 },
      maxFamilyIncome: { type: Number, default: null }, // In INR per annum, null means no cap
      educationLevels: [{ type: String }], // e.g. 'Class 9-10', 'Class 11-12', 'Undergraduate', 'Postgraduate', 'Any'
      currentCourses: [{ type: String }],
      applicableCategories: [{ type: String }], // 'SC', 'ST', 'OBC', 'General', 'EWS', 'Minority', 'All'
      gender: { type: String, enum: ['All', 'Female', 'Male', 'Transgender'], default: 'All' },
      occupations: [{ type: String }], // 'Farmer', 'Student', 'Daily Wage', 'Small Business', 'Any'
      disabilityOnly: { type: Boolean, default: false },
      minimumDisabilityPercentage: { type: Number, default: 40 },
      additionalConditions: [{ type: String }],
    },
    requiredDocuments: [
      {
        type: String,
        required: true,
      },
    ],
    applicationSteps: [
      {
        stepNumber: { type: Number },
        title: { type: String },
        description: { type: String },
      },
    ],
    applicationStartDate: {
      type: String,
      default: 'Open throughout year / As notified',
    },
    applicationDeadline: {
      type: String,
      default: 'Open / Ongoing',
    },
    officialInformationUrl: {
      type: String,
      required: [true, 'Official information URL is required'],
    },
    officialApplicationUrl: {
      type: String,
      required: [true, 'Official application URL is required'],
    },
    sourceVerifiedAt: {
      type: String,
      default: () => new Date().toISOString().split('T')[0],
    },
    status: {
      type: String,
      enum: ['Active', 'Upcoming', 'Closed'],
      default: 'Active',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

schemeSchema.index({ name: 'text', shortDescription: 'text', description: 'text' });
schemeSchema.index({ schemeType: 1, governmentLevel: 1, status: 1 });

export default mongoose.models.Scheme || mongoose.model('Scheme', schemeSchema);
