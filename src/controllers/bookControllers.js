const Book = require('../models/books');

exports.createNewBook = (req, res) => {
    Book.create({
        ...req.body
    }, (err, newBook) => {
        if (err) return res.status(500).json({ message: err });
        else return res.status(200).json({ message: "Book Added Successfully", data: newBook });
    });
}


exports.fetchAllBooks = (req, res) => {
    let conditions = {};
    if (req.query.category) conditions.category = req.query.category;
    if (req.query.author) conditions.author = req.query.author;
    Book.find(conditions, (err, books) => {
        if (err) return res.status(500).json({ message: err });
        else return res.status(200).json({ message: "Request Was Successful. Here's Your Requested Data", data: books });
    });
}


exports.fetchSingleBook = (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) return res.status(500).json({ message: err });
        else if (!book) return res.status(404).json({ message: "Book Not Found" });
        else return res.status(200).json({ message: "Request Was Successful. Here's Your Requested Data", data: book });
    });
}


exports.updateSingleBook = (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        category: req.body.category,
        purchaseCount: req.body.purchaseCount,
        imageUrl: req.body.imageUrl,
        tags: req.body.tags
    }, (err, updatedBook) => {
        if (err) return res.status(500).json({ message: err });
        else if (!updatedBook) return res.status(404).json({ message: "Book Not Found"});
        else {
            updatedBook.save((err, savedBook) => {
                if (err) return res.status(404).json({ message: err});
                else return res.status(200).json({ message: "Book Updated Successfully", data: savedBook });
            });
        }
    });
}


exports.deleteSingleBook = (req, res) => {
    Book.findByIdAndDelete(req.params.id, (err, book) => {
        if (err) return res.status(500).json({ message: err });
        else if (!book) return res.status(404).json({ message: "Book Not Found" });
        else return res.status(200).json({ message: "Book Deleted Successfully"});
    });
}