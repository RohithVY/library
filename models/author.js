const { default: mongoose } = require('mongoose');
const mongooese = require('mongoose');

const authorSchema = mongooese.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchema);