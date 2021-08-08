'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
      },
      bio: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      cover: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      device: {
        type: Sequelize.STRING,
      },
      os: {
        type: Sequelize.STRING,
      },
      online: {
        type: Sequelize.BOOLEAN,
      },
      level: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.INTEGER,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      latitude: {
        type: Sequelize.STRING,
      },
      longitude: {
        type: Sequelize.STRING,
      },
      weblink: {
        type: Sequelize.STRING,
      },
      twitch: {
        type: Sequelize.STRING,
      },
      createdAt: {
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserInfos');
  },
};
