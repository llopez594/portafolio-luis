'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        type:          Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:    true,
        allowNull:     false,
      },
      title: {
        type:      Sequelize.STRING(120),
        allowNull: false,
      },
      description: {
        type:      Sequelize.TEXT,
        allowNull: false,
      },
      icon: {
        type:         Sequelize.STRING(10),
        allowNull:    true,
        defaultValue: '💻',
      },
      github_url: {
        type:         Sequelize.STRING(255),
        allowNull:    true,
        defaultValue: null,
      },
      demo_url: {
        type:         Sequelize.STRING(255),
        allowNull:    true,
        defaultValue: null,
      },
      technologies: {
        type:    Sequelize.JSON,
        allowNull: false,
        comment: 'Array de strings con las tecnologías usadas',
      },
      featured: {
        type:         Sequelize.BOOLEAN,
        allowNull:    false,
        defaultValue: false,
      },
      order_index: {
        type:         Sequelize.INTEGER,
        allowNull:    false,
        defaultValue: 0,
        comment: 'Orden de aparición en el portafolio',
      },
      created_at: {
        type:      Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        type:      Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('projects');
  },
};
