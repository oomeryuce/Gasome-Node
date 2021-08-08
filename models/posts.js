'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  };
  Posts.init({
    userId: DataTypes.INTEGER,
    quoteId: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    video: DataTypes.STRING,
    type: DataTypes.INTEGER,
    olnyBoost: DataTypes.BOOLEAN,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};