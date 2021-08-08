'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      name: 'Gasome',
      userName: 'gasome',
      password: 'gasome',
      email: 'info@gasome.com',
      type: 1,
      verified: true,
      emailVerifiedAt: null
    }], {});
    await queryInterface.bulkInsert('UserInfos', [{
      userId: 1,
      bio: 'Official Gasome Main Account',
      avatar: 'gasome',
      cover: 'gasome',
      language: 'en',
      device: null,
      os: null,
      online: true,
      level: 100,
      gender: 0,
      birthday: null,
      latitude: null,
      longitude: null,
      weblink: "gasome.com",
      twitch: null
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
