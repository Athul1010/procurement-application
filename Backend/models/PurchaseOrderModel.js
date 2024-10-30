const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
  orderNo: { type: Number, autoIncrement: true },
  orderDate: { type: Date, default: Date.now },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
      stockUnit: String,
      unitPrice: Number,
      packingUnit: String,
      orderQty: Number,
      itemAmount: Number,
      discount: Number,
      netAmount: Number,
    },
  ],
  itemTotal: { type: Number, default: 0 },
  discountTotal: { type: Number, default: 0 },
  netAmount: { type: Number, default: 0 },
}, { collection: 'purchaseorders' });

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);
