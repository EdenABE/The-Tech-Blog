const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
const { post } = require('../controllers/dashboardRoutes');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Post',
  }
);

module.exports = Post;
