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

router.route('/get-employee').get((req, res, next) => {
    employeeSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

router.route('/delete-employee/:id').delete((req, res, next) => {
    employeeSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

//edit employee

router.route('/edit-employee/:id').get((req, res) => {
    employeeSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//update employee

router.route('/edit-employee/:id').put((req, res, next) => {
    employeeSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
            console.log('update laew')
        }
    })
})

module.exports = router;