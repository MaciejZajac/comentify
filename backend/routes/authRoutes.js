const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post(
    '/signin',
    [
        check('email')
            .isEmail()
            .custom((value, { req }) => {
                return User.findOne({ email: value }).then((userDoc) => {
                    if (userDoc) {
                        return Promise.reject('This email already exits.');
                    }
                });
            })
            .normalizeEmail(),
        body('password', 'Please enter a password')
            .isLength({ min: 4 })
            .isAlphanumeric()
            .trim(),
        body('nickName', 'Enter a unique nickname').custom((value, { req }) => {
            return User.findOne({ nickName: value }).then((userDoc) => {
                if (userDoc) {
                    return Promise.reject(
                        'User with this nickname already exits.'
                    );
                }
            });
        }),
        body('confirmPassword')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Password have to match!');
                }
                return true;
            })
            .trim(),
    ],
    authController.signup
);
