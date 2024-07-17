'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    static associate(models) {
      Mentor.belongsTo(models.User, { foreignKey: 'userId' });
      Mentor.hasMany(models.Mentee, { foreignKey: 'mentorId' });
    }
  }
  Mentor.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Mentor',
    }
  );
  return Mentor;
};
