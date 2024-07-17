'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mentee extends Model {
    static associate(models) {
      Mentee.belongsTo(models.User, { foreignKey: 'userId' });
      Mentee.belongsTo(models.Mentor, { foreignKey: 'mentorId' });
    }
  }
  Mentee.init(
    {
      userId: DataTypes.INTEGER,
      mentorId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Mentee',
    }
  );
  return Mentee;
};