const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemNo: { type: Number, autoIncrement: true },
  itemName: String,
  inventoryLocation: String,
  brand: String,
  category: String,
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  stockUnit: String,
  unitPrice: Number,
  itemImages: [String],
  status: { type: String, enum: ['Enabled', 'Disabled'], default: 'Enabled' },
}, { collection: 'items' });

module.exports = mongoose.model('Item', itemSchema);
