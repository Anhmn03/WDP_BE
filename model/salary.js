const salaryLevelSchema = new mongoose.Schema({
  salary_coefficient: { type: Number, required: true },
    monthly_salary: { type: Number, required: true }, // Mức lương tháng
    daily_salary: { type: Number, required: true }, // Mức lương theo ngày
    status: { 
      type: String, 
      enum: ['active', 'inactive'], 
      default: 'active' 
    }, // Trạng thái của cấp lương
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Người tạo
    updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Người cập nhật
  }, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });
  
  module.exports = mongoose.model("SalaryLevel", salaryLevelSchema, "salary");
  