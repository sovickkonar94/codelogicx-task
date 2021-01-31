'use strict';
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    userId: DataTypes.INTEGER,
    requestId: DataTypes.INTEGER
  }, {});
  Request.associate = function(models) {
    // associations can be defined here
    Request.belongsTo(models.User);
  };
  return Request;
};