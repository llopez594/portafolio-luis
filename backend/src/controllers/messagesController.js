const Message = require('../models/Message');

// POST /api/messages
const create = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, message: 'Todos los campos son obligatorios.' });
    }

    const newMessage = await Message.create({ name, email, message });
    res.status(201).json({ ok: true, data: newMessage });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

module.exports = { create };
