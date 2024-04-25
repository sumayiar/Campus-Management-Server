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

  imageurl: {
    type: Sequelize.STRING,
    defaultValue: 'https://coursedog-images-public.s3.us-east-2.amazonaws.com/undefined/htr.png', // Default image URL here
    allowNull: true,
  }
});

// Export the campus model
module.exports = Campus;