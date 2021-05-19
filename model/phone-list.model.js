const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String
    }
});

const List = mongoose.model('Lists', phoneSchema);

module.exports = List;