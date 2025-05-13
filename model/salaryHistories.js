const mongoose = require("mongoose");

const salaryHistorySchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  salary_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Salary', required: true },
  old_salaryCoefficient: { type: Number, required: true },
  old_monthlySalary: { type: Number, required: true },
  changed_at: { type: Date, default: Date.now },
  changed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model("SalaryHistory", salaryHistorySchema, "SalaryHistory");
