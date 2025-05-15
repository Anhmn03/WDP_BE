const mongoose = require("mongoose");

const salaryHistorySchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  salary_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Salary', required: true },
  oldSalaryCoefficient: { type: Number, required: true },
  old_monthlySalary: { type: Number, required: true },
  old_dailySalary: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  updated_at: { type: Date, default: Date.now },
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model("SalaryHistory", salaryHistorySchema, "SalaryHistory");