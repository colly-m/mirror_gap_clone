'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mentor.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    pincode: DataTypes.STRING,
    profilepic: DataTypes.STRING,
    bio: DataTypes.STRING,
    experience: DataTypes.STRING,
    qualification: DataTypes.STRING,
    qualification: DataTypes.STRING,
    specialization: DataTypes.STRING,
    availability: DataTypes.STRING,
    rate: DataTypes.STRING,
    rating: DataTypes.STRING,
    reviews: DataTypes.STRING,
    isverified: DataTypes.BOOLEAN,
    isApproved: DataTypes.BOOLEAN,
    isDeleted: DataTypes.BOOLEAN,
    isOnline: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};