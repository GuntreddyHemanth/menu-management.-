const Category = require('../models/Category');

// Create Category
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Category by ID or Name
exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({
      $or: [{ _id: req.params.id }, { name: req.params.name }]
    });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Edit Category
exports.editCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};