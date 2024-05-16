/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://static.vecteezy.com/system/resources/previews/024/555/721/original/cartoon-cute-student-icon-free-png.png', // Default image URL here
    allowNull: true,
  },

  gpa: {
    type: Sequelize.DECIMAL(3, 1),
    allowNull: true,
    validate: {
      isDecimal: true,
      min: 0.0,
      max: 4.0,
    },
  },
  
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
});

// Export the student model
module.exports = Student;