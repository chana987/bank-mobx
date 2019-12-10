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

    @action filterByDate = (startDate = '1700-01-01T00:00:00Z GMT', endDate = '4000-12-31T00:00:00Z GMT') => {
        this.filteredTransactions = [...this.transactions].filter(t => t.date >= startDate && t.date <= endDate)
    }

    @action fetchTransactions = async () => {
        try {
            let transactions = []
            let response = await axios.get('http://localhost:4000/transactions')
            response.data.forEach(t => transactions.push(new Transaction(t.amount, t.category, t.vendor, t.date, t._id)))
            this.transactions = transactions
            this.filteredTransactions = transactions
        } catch(err) {
            console.log(err)
        }
    }
    @action addTransaction = async ({transaction}) => {
        if (transaction.amount === '' || transaction.amount <= 0 || transaction.category === '' || transaction.vendor === '' || transaction.date === '') {
            return "Incorrect input"
        }
        try {
            let response = await axios.post('http://localhost:4000/transaction', { transaction })
            this.fetchTransactions()
            return response
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
