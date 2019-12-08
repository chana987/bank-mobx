import { observable, computed, action } from 'mobx'
import Transaction from './TransactionStore'
import axios from 'axios'

export class BankStore {
    @observable transactions = []

    @computed get balance() {
        let balance = 0
        this.transactions.forEach(t => balance += t.amount)
        return balance
    }
    @computed get getCategories() {
        let categories = [...new Set(this.transactions.map(t => t.category))]
        return categories
    }

    @action filterByDate = (startDate, endDate) => {
        let transactions = this.transactions.filter(t => t.date >= startDate && t.date <= endDate)
        return transactions
    }
    @action fetchTransactions = async () => {
        try {
            let transactions = []
            let categories = await axios.get('http://localhost:4000/transactions')
            categories.data.forEach(t => transactions.push(new Transaction(t.amount, t.category, t.vendor, t.date, t._id)))
            this.transactions = transactions
        } catch(err) {
            console.log(err)
        }
    }
    @action addTransaction = async ({transaction}) => {
        try {
            await axios.post('http://localhost:4000/transaction', { transaction })
            this.fetchTransactions()
        } catch {
            throw new Error("Whoops, didn't work")
        }
    }
    @action deleteTransaction = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/transaction/${id}`)
            this.fetchTransactions()
        } catch {
            throw new Error("Whoops, didn't work")
        }
    }
}
