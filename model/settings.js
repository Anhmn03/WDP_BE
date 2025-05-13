const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },           // Tên cấu hình (ví dụ: "reminder_checkout")
  value: { type: mongoose.Schema.Types.Mixed, required: true },  // Giá trị có thể là bất kỳ kiểu dữ liệu nào
  reminder_timeCheckout: { type: Date }                          // Thời gian nhắc nhở check-out (nếu có)
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model("Setting", settingsSchema, "Setting");
