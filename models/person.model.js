const mongoose = require('mongoose');
 

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: { type: String, required: true, },
    location: { type: String, required: true  } 
}, {
    timestamps: true,
    versionKey: false
});
 

const personModel = mongoose.model('person', PersonSchema, 'person');

module.exports = personModel;