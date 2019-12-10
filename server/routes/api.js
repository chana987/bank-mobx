const express = require('express')
const router = express.Router()
const Transaction = require('../models/TransactionSchema')

router.get('/transactions', function (req, res) {
    Transaction.find({}, function (err, transactions) {
        if (err) {
            console.log(err)
        }
        res.send(transactions)
    })
})

router.post('/transaction', async function (req, res) {
    const transaction = new Transaction({ ...req.body.transaction })
    await transaction.save()
    res.send(transaction)
})

router.delete('/transaction/:id', async function (req, res) {
    await Transaction.findByIdAndDelete({ _id: req.params.id })
    res.send("success")
})

module.exports = router