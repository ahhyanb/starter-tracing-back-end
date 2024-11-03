const path = require("path");
require("dotenv").config();

console.log("DATABASE_URL:", process.env.DATABASE_URL); // For debugging purposes

module.exports = {
  development: {
    client: 'pg',  // Ensure this is 'pg' for PostgreSQL
    connection: process.env.DATABASE_URL, // Ensure DATABASE_URL is loaded from environment variables
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
