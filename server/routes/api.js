const express = require('express')
const router = express.Router()
const Transaction = require('../models/TransactionSchema')

// router.get('http://localhost:4000/transactions', function (req, res) {
router.get('/transactions', function (req, res) {
    Transaction.find({}, function (err, transactions) {
        if (err) {
            console.log(err)
        }
        res.send(transactions)
    })
})

// router.post('http://localhost:4000/transaction', async function (req, res) {
router.post('/transaction', async function (req, res) {
    const transaction = new Transaction({ ...req.body.transaction })
    await transaction.save()
    res.send(transaction)
})

// router.delete('http://localhost:4000/transaction/:id', async function (req, res) {
router.delete('/transaction/:id', async function (req, res) {
    await Transaction.findByIdAndDelete({ _id: req.params.id })
    res.send("success")
})

module.exports = router