import { observable, computed, action } from 'mobx'
import Transaction from './TransactionStore'
import axios from 'axios'

export class BankStore {
    @observable transactions = []
    @observable filteredTransactions = []

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
        this.filteredTransactions = [...this.transactions].filter(t => t.date >= startDate && t.date <= endDate)
    }

    @action fetchTransactions = async () => {
        try {
            let transactions = []
            let response = await axios.get('/transactions')
            response.data.forEach(t => transactions.push(new Transaction(t.amount, t.category, t.vendor, t.date, t._id)))
            this.transactions = transactions
            this.filteredTransactions = transactions
        } catch(err) {
            console.log(err)
        }
    }
    @action addTransaction = async ({transaction}) => {
        try {
            let response = await axios.post('/transaction', { transaction })
            this.fetchTransactions()
            return response
        } catch {
            throw new Error("Whoops, didn't work")
        }
    }
    @action deleteTransaction = async (id) => {
        try {
            await axios.delete(`/transaction/${id}`)
            this.fetchTransactions()
        } catch {
            console.log("Whoops, didn't work")
        }
    }
}
