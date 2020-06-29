const router = require('express').Router();
const { check, body } = require('express-validator');
const opinionController = require('../controllers/opinionController');

router.post(
    '/add',
    [
        check('email').isEmail().normalizeEmail(),
        body('nickName', 'Enter a valid nickname').isLength({ min: 4 }),
        body('text', 'Enter a valid nickname').isLength({ min: 10, max: 1000 }),
    ],
    opinionController.addOpinion
);

router.get('/all', opinionController.getOpinions);

module.exports = router;
