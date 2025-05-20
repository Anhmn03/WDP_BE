const mongoose = require("mongoose");

const userHistorySchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  old_salary_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Salary' },
  old_monthlySalary: { type: Number },
  old_dailySalary: { type: Number },

  new_salary_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Salary' },
  newSalaryCoefficient: { type: Number },
  new_monthlySalary: { type: Number },
  new_dailySalary: { type: Number },

  old_department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  new_department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },

  old_status: { type: String },
  old_position: { type: String },
  old_role: { type: String },

  new_status: { type: String },
  new_position: { type: String },
  new_role: { type: String },

  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }

}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model("UserHistory", userHistorySchema, "userHistories");
