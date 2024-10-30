const express = require('express');
const router = express.Router();
const PurchaseOrder = require('../models/PurchaseOrderModel');

// Add a new purchase order
router.post('/', async (req, res) => {
  const purchaseOrder = new PurchaseOrder(req.body);
  await purchaseOrder.save();
  res.send(purchaseOrder);
});

// Get all purchase orders
router.get('/', async (req, res) => {
  const purchaseOrders = await PurchaseOrder.find().populate('supplier', 'name');
  res.send(purchaseOrders);
});

module.exports = router;
