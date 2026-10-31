import mongoose from 'mongoose';

const activityLogSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true,
      enum: [
        'CREATE_SCHEME',
        'UPDATE_SCHEME',
        'DELETE_SCHEME',
        'UPDATE_APPLICATION_STATUS',
        'ADMIN_LOGIN',
        'DATABASE_INITIALIZED',
      ],
    },
    adminUsername: {
      type: String,
      required: true,
      default: 'admin',
    },
    targetType: {
      type: String,
      enum: ['Scheme', 'Application', 'Admin', 'System'],
      default: 'Scheme',
    },
    targetId: {
      type: String,
      default: '',
    },
    targetName: {
      type: String,
      default: '',
    },
    details: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

activityLogSchema.index({ createdAt: -1 });

export default mongoose.models.ActivityLog || mongoose.model('ActivityLog', activityLogSchema);
