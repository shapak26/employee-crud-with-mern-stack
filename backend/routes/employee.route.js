let mongoose = require('mongoose')
let express = require('express')
let router = express.Router()
let employeeSchema = require('../models/Employee')

router.route('/create-employee').post((req, res, next) => {
    employeeSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data);
            res.json(data);
        }
    })
})

module.exports = router;