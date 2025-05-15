const mongoose = require("mongoose");

const userAttendanceSchema = new mongoose.Schema({
  time: { type: Date, required: true }, // Ngày giờ điểm danh
  type: { 
    type: String, 
    enum: ['check_in', 'check_out'], 
    required: true 
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { 
    type: String, 
    enum: ['approved', 'pending', 'rejected'], 
    default: 'pending' 
  },
  justification: { type: String }, 
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model("UserAttendance", userAttendanceSchema, "UserAttendance");
