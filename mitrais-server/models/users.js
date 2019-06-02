'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.CHAR
  }, {
    underscored: true,
  });
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};