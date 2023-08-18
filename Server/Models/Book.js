const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    photo: {
        type: String,
        required: true,
    },
    review: {
        type: String,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {timestamps: true});

module.exports = mongoose.model("Book", BookSchema);