const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

const Test = sequelize.define('test', {
  testName: Sequelize.STRING,
  type: Sequelize.STRING,
  timeAllowed: Sequelize.INTEGER
});

module.exports = Test;