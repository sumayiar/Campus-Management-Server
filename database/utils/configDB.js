/*==================================================
/database/utils/configDB.js

It declares and exports the variables for database name, username, and password.
==================================================*/
// Declare the variables for database name, username, and password.
const dbName = 'starter-server';
const dbUser = 'postgres';
const dbPwd = 'postgres';  // Note: If needed, change this password to match the password created for PostgreSQL database on the local machine.

// Export the variables 
module.exports = {
  dbName,
  dbUser,
  dbPwd
};

/**
 * The purpose of this file is to set up the parameters of our database.
 * Configuring a database establishes the optimization of performance, security, and functionality of our program.
 * In our case, we have a username and password to ensure the security of our database from unauthorized access.
 */