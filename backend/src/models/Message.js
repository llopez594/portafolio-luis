'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class Message extends Model {}

Message.init(
  {
    id:      { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:    { type: DataTypes.STRING(100), allowNull: false },
    email:   { type: DataTypes.STRING(150), allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
    read:    { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName:  'Message',
    tableName:  'messages',
    underscored: true,
  }
);

module.exports = Message;
