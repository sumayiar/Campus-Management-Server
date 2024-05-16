/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  //Define the campus name
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  //Define the campus address
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  //Define the campus description
  description: {
    type: Sequelize.STRING,
  }
});

// Export the campus model
module.exports = Campus;