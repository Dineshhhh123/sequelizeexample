const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('employee', 'root', 'Dinesh@123', {
  host: 'localhost',
  dialect: 'mysql',
  Table:'users',
});

module.exports = sequelize;
