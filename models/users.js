'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasOne(models.UserInfo, {
        foreignKey:'userId',
        as: 'userInfo',
      });
      Users.hasOne(models.Posts, {
        foreignKey:'userId',
        as: 'user',
      });
    }
  };
  Users.init({
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.INTEGER,
    verified: DataTypes.BOOLEAN,
    emailVerifiedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
    /*defaultScope: {
      attributes: { exclude: ['password'] },
    }*/
  });
  return Users;
};