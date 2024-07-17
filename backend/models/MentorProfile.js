'use strict'
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
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      pincode: DataTypes.STRING,
      profilePic: DataTypes.STRING,
      bio: DataTypes.STRING,
      experience: DataTypes.STRING,
      qualification: DataTypes.STRING,
      specialization: DataTypes.STRING,
      availability: DataTypes.STRING,
      rate: DataTypes.STRING,
      rating: DataTypes.STRING,
      reviews: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN,
      isApproved: DataTypes.BOOLEAN,
      isDeleted: DataTypes.BOOLEAN,
      isBlocked: DataTypes.BOOLEAN,
      isOnline: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Mentor',
    }
  );
  return Mentor;
};