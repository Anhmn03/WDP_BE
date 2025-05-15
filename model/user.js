const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},// đăng nhập bằng name
  email: { type: String, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String },
  address: { type: String },
  status: { type: String, enum: ['active', 'inactive', 'banned'], default: 'active' },
  position: { type: String },
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  salary_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Salary' },
  role: { type: String, enum: ['admin', 'manager', 'staff', 'user'], default: 'user' }, // để check lại các role đã
  reminder_time: { type: Date },
  dob: { type: Date },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  image: { type: String },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model("User", userSchema, "User");
