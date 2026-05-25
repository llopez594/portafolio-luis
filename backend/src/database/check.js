const sequelize = require('./connection');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('❌ No se pudo conectar:', error.message);
  } finally {
    await sequelize.close();
  }
})();
