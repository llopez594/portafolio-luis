const notFound = (req, res) => {
  res.status(404).json({ ok: false, message: `Ruta ${req.originalUrl} no encontrada.` });
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ ok: false, message: 'Error interno del servidor.' });
};

module.exports = { notFound, errorHandler };
