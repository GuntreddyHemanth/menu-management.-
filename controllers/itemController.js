const Item = require('../models/Item');

// Create Item
exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Item by ID or Name
exports.getItem = async (req, res) => {
  try {
    const item = await Item.findOne({
      $or: [{ _id: req.params.id }, { name: req.params.name }]
    });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Edit Item
exports.editItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Search Item by Name
exports.searchItem = async (req, res) => {
  try {
    const items = await Item.find({ name: { $regex: req.query.name, $options: 'i' } });
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};