const Users = require('../models').Users;
const Posts = require('../models').Posts;

module.exports = {
    getById(req, res) {
        return Posts
            .findByPk(req.params.id, {
                include: [{
                    model: Users,
                    as: 'user'
                }],
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
}