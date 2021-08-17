const express = require('express')
const router = express.Router()

const Phone = require('./../models/Phone.model')


router.get('/', (req, res) => {

    Phone
        .find()
        // .select('')
        .sort({ createdAt: -1 })
        .then(response => res.json(response), 200)
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching phones', err }))
})


router.get('/phone/:phone_id', (req, res) => {

    Phone
        .findById(req.params.phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching phone', err }))
})


router.post('/new', (req, res) => {

    const phone = req.body

    Phone
        .create(phone)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving phones', err }))
})


router.put('/edit/:phone_id', (req, res) => {

    const phone = req.body

    Phone
        .findByIdAndUpdate(req.params.phone_id, phone, {new: true})
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing phones', err }))
})


module.exports = router