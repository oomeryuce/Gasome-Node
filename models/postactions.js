'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PostActions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PostActions.belongsTo(models.Posts, {
        foreignKey: 'id',
      });
    }
  }
  PostActions.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    action: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PostActions',
  });
  return PostActions;
};
