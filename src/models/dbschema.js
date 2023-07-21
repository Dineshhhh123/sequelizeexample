const { DataTypes } = require('sequelize');
const sequelize = require('../helpers/helper');


const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // Add more fields as needed
    },
    {
      timestamps: true, // Automatically manages createdAt and updatedAt fields
      underscored: true, // Follows the snake_case naming convention for table and column names
    }
  );
  
  module.exports = User;
