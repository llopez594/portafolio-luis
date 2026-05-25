const Project = require('../models/Project');

// GET /api/projects
const getAll = async (req, res) => {
  try {
    const projects = await Project.findAll({
      order: [['order_index', 'ASC']],
    });
    res.json({ ok: true, data: projects });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

// GET /api/projects/featured
const getFeatured = async (req, res) => {
  try {
    const projects = await Project.findAll({
      where:  { featured: true },
      order:  [['order_index', 'ASC']],
    });
    res.json({ ok: true, data: projects });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

// GET /api/projects/:id
const getOne = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ ok: false, message: 'Proyecto no encontrado' });
    res.json({ ok: true, data: project });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

module.exports = { getAll, getFeatured, getOne };
