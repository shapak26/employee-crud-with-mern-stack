const mongoose = require('mongoose')
const Schema = mongoose.Schema

let employeeSchema = new Schema({
    name: {
        type: String
    },
    work: {
        type: String
    },
    salary: {
        type: Number
    }
}, {
    collection: 'employee'
})

module.exports = mongoose.model('Employee', employeeSchema);