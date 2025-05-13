const mongoose = require("mongoose");

const attendanceSettingSchema = new mongoose.Schema({
  check_in_time: { type: Date, required: true }, // Thời gian điểm danh bắt đầu (ví dụ: '09:00')
  check_out_time: { type: Date, required: true }, // Thời gian điểm danh kết thúc (ví dụ: '18:00')
 
});

module.exports = mongoose.model("AttendanceSetting", attendanceSettingSchema, "AttendanceSetting");

