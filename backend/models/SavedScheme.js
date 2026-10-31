import mongoose from 'mongoose';

const savedSchemeSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: [true, 'User email is required'],
      trim: true,
      lowercase: true,
      index: true,
    },
    schemeId: {
      type: String,
      required: [true, 'Scheme ID is required'],
    },
    schemeSlug: {
      type: String,
      required: [true, 'Scheme slug is required'],
    },
    schemeName: {
      type: String,
      required: [true, 'Scheme name is required'],
    },
    schemeType: {
      type: String,
      default: 'Scholarship',
    },
    savedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

savedSchemeSchema.index({ userEmail: 1, schemeSlug: 1 }, { unique: true });

export default mongoose.models.SavedScheme || mongoose.model('SavedScheme', savedSchemeSchema);
