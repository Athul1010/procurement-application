const express = require('express');
const router = express.Router();
const Supplier = require('../models/SupplierModel');

// Add a new supplier
router.post('/', async (req, res) => {
  const supplier = new Supplier(req.body);
  await supplier.save();
  res.send(supplier);
});

// Get all suppliers
router.get('/', async (req, res) => {
  const suppliers = await Supplier.find();
  res.send(suppliers);
});

module.exports = router;
