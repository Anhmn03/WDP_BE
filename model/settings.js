const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },           // Tên cấu hình (ví dụ: "reminder_checkout")
  value: { type: mongoose.Schema.Types.Mixed, required: true },  // Giá trị có thể là bất kỳ kiểu dữ liệu nào
  reminder_timeCheckout: { type: Date },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }                         
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model("Setting", settingsSchema, "settings");
