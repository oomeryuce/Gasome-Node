const Sequelize = require('sequelize');
const { Users } = require('../models');
const { Posts } = require('../models');
const { PostActions } = require('../models');

module.exports = {
  getById(req, res) {
    return Posts
      .findByPk(req.params.id, {
        attributes: {
          include: [[Sequelize.fn('COUNT', Sequelize.col('PostActions.postId')), 'likeCount']],
        },
        include: [
          {
            model: Users,
            as: 'user',
          },
          {
            model: PostActions,
            attributes: [],
            where: {
              action: 1,
            },
            required: false,
          },
        ],
        group: ['Posts.id', 'user.id'],
      })
      .then((post) => {
        if (!post) {
          return res.status(404).send({
            message: 'Post Not Found',
          });
        }
        return res.status(200).send(post);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },
};
