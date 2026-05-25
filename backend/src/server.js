require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const projectsRouter = require('./routes/projects');
const messagesRouter = require('./routes/messages');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

const app  = express();
const PORT = process.env.PORT || 3000;

// ——— Middlewares
app.use(cors());
app.use(express.json());

// ——— Rutas
app.get('/', (req, res) => res.json({ ok: true, message: 'API Portafolio Luis López' }));
app.use('/api/projects', projectsRouter);
app.use('/api/messages', messagesRouter);

// ——— Manejo de errores
app.use(notFound);
app.use(errorHandler);

// ——— Inicio
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
