const { Client } = require('pg');
const { Sequelize } = require('sequelize');

const db = new Sequelize('logbook_HCID', 'postgres', 'informatika', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = db;
