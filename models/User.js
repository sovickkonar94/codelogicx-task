'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Request);
    User.hasMany(models.Friend);
  };
  return User;
};