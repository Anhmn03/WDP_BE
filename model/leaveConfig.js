const mongoose = require("mongoose");

const leaveConfigSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  start_date: { type: Date, required: true }, // Ngày bắt đầu tính nghỉ phép trong năm
  max_leave_days: { type: Number, required: true }, // Số ngày nghỉ phép tối đa
  user_leave_days: { type: Number, default: 0 }, // Số ngày đã nghỉ
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model("LeaveConfig", leaveConfigSchema, "leaveConfig");
