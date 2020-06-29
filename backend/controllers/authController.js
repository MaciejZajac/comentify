const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
// const keys = require('../config/keys');
const { validationResult } = require('express-validator');

exports.signin = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const { email, nickName, password } = req.body;

    try {
        const hashedPass = await bcrypt.hash(password, 12);
        const user = new User({ email, nickName, password: hashedPass });
        const createUser = await user.save();

        res.status(201).json({
            message: 'Created new account',
            userId: createUser._id,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.login = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const { email, password } = req.body;
    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                const error = new Error(
                    'There is no such email in a database.'
                );
                throw error;
            }

            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then((isEqual) => {
            if (!isEqual) {
                const error = new Error('Wrong password.');
                error.code = 401;
                throw error;
            }
            const token = jwt.sign(
                {
                    email: loadedUser.email,
                    userId: loadedUser._id.toString(),
                },
                keys.SECRET_TOKEN,
                { expiresIn: '24h' }
            );

            res.status(200).json({
                message: 'Log in successful',
                user: {
                    token: token,
                    userId: loadedUser._id.toString(),
                },
            });
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
