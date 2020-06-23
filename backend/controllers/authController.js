const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const { validationResult } = require('express-validator');

exports.signin = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const { email, password, confirmPassword } = req.body;

    try {
        const hashedPass = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPass });
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
