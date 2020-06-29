const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opinionSchema = new Schema(
    {
        nickName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('Opinion', opinionSchema);
