const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  valid_workdays: { type: Number, default: 0 },
  invalid_workdays: { type: Number, default: 0 },
  salary_amount: { type: Number, required: true },
  month: { type: Number, required: true }, // Ví dụ: '2025-05'
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model("Salary", salarySchema, "caculateSalary");
