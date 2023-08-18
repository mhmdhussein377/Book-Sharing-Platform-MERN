const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    review: {
        type: String
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    genres: [
        {
            type: String
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model("Book", BookSchema);