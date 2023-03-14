const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index.js')
const authorsRouter = require('./routes/authors.js')
const path = require('path');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');

const app =  express();
const port = process.env.PORT || 5000

connectDB()


app.use(expressLayouts)
// Where our public files going to be - styles, javascript

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/layout')

app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter)
app.use('/authors', authorsRouter)

app.listen(port, ( )=>{
    console.log('Server started on port ' + port);
})