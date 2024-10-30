const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  supplierNo: { type: Number, autoIncrement: true },
  name: String,
  address: String,
  taxNo: String,
  country: String,
  mobile: String,
  email: String,
  status: { type: String, enum: ['Active', 'Inactive', 'Blocked'], default: 'Active' },
}, { collection: 'suppliers' });

module.exports = mongoose.model('Supplier', supplierSchema);
