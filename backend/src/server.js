require('dotenv').config();

const express = require('express');
const cors = require('cors');

const projectsRouter = require('./routes/projects');
const messagesRouter = require('./routes/messages');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_PATH = process.env.BASE_PATH || '';

app.use(cors());
app.use(express.json());

const health = (req, res) => {
  res.json({
    ok: true,
    message: 'API Portafolio Luis Lopez',
    basePath: BASE_PATH || '/',
    endpoints: {
      projects: `${BASE_PATH}/api/projects`,
      featured: `${BASE_PATH}/api/projects/featured`,
      messages: `${BASE_PATH}/api/messages`,
    },
  });
};

app.get('/', health);

if (BASE_PATH) {
  app.get(BASE_PATH, health);
}

app.use('/api/projects', projectsRouter);
app.use('/api/messages', messagesRouter);

if (BASE_PATH) {
  app.use(`${BASE_PATH}/api/projects`, projectsRouter);
  app.use(`${BASE_PATH}/api/messages`, messagesRouter);
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});