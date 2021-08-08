const Users = require('../models').Users;
const UserInfo = require('../models').UserInfo;

module.exports = {
    getById(req, res) {
        return Users
        .findByPk(req.params.id, {
            include: [{
                model: UserInfo,
                as: 'userInfo'
            }],
        })
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: 'User Not Found',
                });
            }
            return res.status(200).send(user);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
    },
}