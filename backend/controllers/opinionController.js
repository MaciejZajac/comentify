const Opinion = require('../models/Opinion');

exports.addOpinion = (req, res, next) => {
    const { email, nickName, text } = req.body;
    const date = Date.now();

    const newOpinion = new Opinion({
        email,
        nickName,
        text,
        date,
    });

    newOpinion
        .save()
        .then(() => res.json('Opinion added.'))
        .catch((err) => res.status(400).json('Error: ' + err));
};

exports.getOpinions = (req, res, next) => {
    Opinion.find()
        .then((opinions) => res.json(opinions))
        .catch((err) => res.status(400).json('Error: ' + err));
};
