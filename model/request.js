const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Người nhận
  reason: { type: String, required: true },
  status: { type: String, enum: ['Waitting', 'Accept', 'Deny'], default: 'Waitting' },

  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Người gửi
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Optional nếu chưa cập nhật
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model("Request", requestSchema, "Request");
