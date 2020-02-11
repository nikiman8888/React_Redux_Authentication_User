const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: {
        getOne: (req, res, next) => {
            const token = req.headers.authorization.substring(7);
            Promise.all([
                utils.jwt.verifyToken(token)
            ])
                .then(([data]) => {
    
                    models.User.findById(data.id)
                        .then((user) => {
                            res.send({success:true,user:user.username})
                        });
                })
                .catch(err => {               
                    next(err);
                })
        }
    },

    post: {
        register: (req, res, next) => {
            const { username, password } = req.body.user;
            //const existingUsername = models.User.findOne({name:username});


            models.User.create({ username, password })
                .then(user => {
                    console.log(user)
                    res.send({ success: true, message: 'Succesfull Registered' })
                }).catch((err) => {
                    let message = 'Something is not correct';
                    if (err.code === 11000) {
                        message = 'Username already exist'
                    }
                    return res.json({ success: false, message: message })
                });
        },

        login: (req, res, next) => {
            const { username, password } = req.body.user;
            models.User.findOne({ username })

                .then((user) => Promise.all([user, user !== null ? user.matchPassword(password) : null]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send({ success: false, message: 'Invalid username or password' });
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.authCookieName, token).send({ success: true, token: token ,user:user.username});
                })
                .catch(next);
        },

        logout: (req, res, next) => {

            res.clearCookie(config.authCookieName).send('Logout successfully!');
        },

        put: (req, res, next) => {
            const { id } = req.query;
            const { money } = req.body; /// triabva proverka

            models.User.updateOne({ _id: id }, { money }) // triabva da se izmisli

                .then((updatedUser) => res.send(updatedUser))
                .catch(next)
        }
    },
};