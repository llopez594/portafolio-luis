'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class Project extends Model {}

Project.init(
  {
    id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title:        { type: DataTypes.STRING(120), allowNull: false },
    description:  { type: DataTypes.TEXT, allowNull: false },
    icon:         { type: DataTypes.STRING(10), defaultValue: '💻' },
    github_url:   { type: DataTypes.STRING(255), allowNull: true },
    demo_url:     { type: DataTypes.STRING(255), allowNull: true },
    technologies: { type: DataTypes.JSON, allowNull: false },
    featured:     { type: DataTypes.BOOLEAN, defaultValue: false },
    order_index:  { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  {
    sequelize,
    modelName:  'Project',
    tableName:  'projects',
    underscored: true,
  }
);

module.exports = Project;
