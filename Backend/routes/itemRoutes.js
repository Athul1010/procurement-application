const express = require('express');
const router = express.Router();
const Item = require('../models/ItemModel');

// Add a new item
router.post('/', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.send(item);
});

// Get all items
router.get('/', async (req, res) => {
  const items = await Item.find().populate('supplier', 'name');
  res.send(items);
});

module.exports = router;
