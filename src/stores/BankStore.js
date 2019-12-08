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
    @action transactionByMonth(date) {
        return this.transactions.filter(t => t.date === date)
    }
    @action getCategories = () => {
        let categories = []
        this.transactions.forEach(t => 
            categories[t.category]
            ? categories[t.category].push(t)
            : categories.push({[t.category]: t.amount})
        )
        return categories
    }
    @action getTransactions = async () => {
        try {
            let transactions = []
            let data = await axios.get('http://localhost:4000/transactions')
            data.data.forEach(t => transactions.push(new Transaction(t.amount, t.category, t.vendor, t.date, t._id)))
            this.transactions = transactions
        } catch(err) {
            console.log(err)
        }
    }
    @action addTransaction = async ({transaction}) => {
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
