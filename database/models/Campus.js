/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://pbs.twimg.com/profile_images/1676600958153904131/OSV4hFd7_400x400.png', // Default image URL here
    allowNull: true,
  }
});

// Export the campus model
module.exports = Campus;