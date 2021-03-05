const Sequelize = require('sequelize');

const sequelize = new Sequelize('mean', 'mean', 'mean', {
  dialect: 'mysql',
  host: 'database',
  port: '3306'
});

module.exports = sequelize;
