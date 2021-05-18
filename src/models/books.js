const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
       type: String,
       required: true,
    },
    author: String,
    description: String,
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
        default: "fiction",
    },
    purchaseCount: Number,
    imageUrl: String,
    tags: Array
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;