'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserInfo.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'userInfo',
      });
    }
  }
  UserInfo.init({
    userId: DataTypes.INTEGER,
    bio: DataTypes.STRING,
    avatar: DataTypes.STRING,
    cover: DataTypes.STRING,
    language: DataTypes.STRING,
    device: DataTypes.STRING,
    os: DataTypes.STRING,
    online: DataTypes.BOOLEAN,
    level: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    weblink: DataTypes.STRING,
    twitch: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UserInfo',
  });
  return UserInfo;
};
