import { observable, computed, action } from 'mobx'
import Transaction from './TransactionStore'
import axios from 'axios'

class BankStore {
    @observable transactions = []
    @computed get balance() {
        let balance = 0
        this.transactions.forEach(t => balance += t.amount)
        return balance
    }
    @computed get transactionByMonth(date) {
        return this.transactions.filter(t => t.date === date)
    }
    @action categories = (transactions) => {
        let categories = []
        transactions.forEach(t => 
            categories.find(c => c.name === t.category) 
            ? c.sum += t.amount 
            : categories.push({name: t.category, sum: t.amount}))
        return categories
    }
    @action getTransactions = async () => {
        try {
            let transactions = await axios.get('http://localhost:4000/transactions')
            transactions.forEach(t => this.transactions.push(new Transaction({...t})))
        } catch {
            throw new Error('Cannot get transactions, try again')
        }
    }
    @action addTransaction = async (transaction) => {
        try {
            await axios.post('http://localhost:4000/transaction', { transaction })
            this.getTransactions()
        } catch {
            throw new Error("Whoops, didn't work")
        }
    }
    @action deleteTransaction = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/transaction/${id}`)
            this.getTransactions()
        } catch {
            throw new Error("Whoops, didn't work")
        }
    }
}

export default BankStore;