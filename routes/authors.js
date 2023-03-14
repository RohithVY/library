const express = require('express');
const router = express.Router()
const Author = require('../models/author.js')
//get all authors
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query !== null && req.query.name !== "") {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find(searchOptions);
        res.render('authors/index', {
            authors: authors,
            searchOptions: req.query
        });
    } catch (err) {
        res.redirect('/');
    }
});


//new author
router.get('/new', async (req, res) => {
    try {
        const author = new Author();
        res.render('authors/new', { author: author });
    } catch (err) {
        res.redirect('/authors');
    }
});


//create new author 
router.post('/', async (req, res) => {
    let author; // Define author outside of the try block
    try {
        author = new Author({
            name: req.body.name
        });
        const newAuthor = await author.save();
        res.redirect(`authors`);
    } catch (err) {
        // Use author within the catch block
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error in creating author'
        });
    }
});

module.exports = router;