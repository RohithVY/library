const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index.js')

const app =  express();
const port = process.env.PORT || 5000

app.set('view-engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
// Where our public files going to be - styles, javascript
app.use(express.static('public'))
app.use('/', indexRouter)

app.listen(port, ( )=>{
    console.log('Server started on port ' + port);
})