import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    refNo: {
      type: String,
      required: [true, 'Reference number is required'],
      unique: true,
      trim: true,
      index: true,
    },
    studentName: {
      type: String,
      required: [true, 'Student name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      trim: true,
      default: '',
    },
    schemeId: {
      type: String,
      default: '',
    },
    schemeName: {
      type: String,
      required: [true, 'Scheme name is required'],
      trim: true,
    },
    ministry: {
      type: String,
      default: 'Government of India',
    },
    state: {
      type: String,
      default: 'All India',
    },
    category: {
      type: String,
      default: 'General',
    },
    educationLevel: {
      type: String,
      default: 'Undergraduate',
    },
    institution: {
      type: String,
      default: '',
    },
    applicationDate: {
      type: String,
      default: () => new Date().toISOString().split('T')[0],
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
      index: true,
    },
    remark: {
      type: String,
      default: 'Application received and placed in verification queue.',
    },
    nextStep: {
      type: String,
      default: 'Institute verification and document scrutiny.',
    },
    reviewedBy: {
      type: String,
      default: 'System',
    },
    reviewedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

applicationSchema.index({ refNo: 1, email: 1 });
applicationSchema.index({ status: 1, createdAt: -1 });

export default mongoose.models.Application || mongoose.model('Application', applicationSchema);
