import { observable, action } from 'mobx'
import { Item } from './Item'

export class Inventory {
    @observable items = []
    @action addItem = (name, price = 0, quantity = 1) => {
        if (name === '' || price === '') {
            alert('incomplete info')
            return
        }
        let index = this.items.findIndex(i => i.name === name)
        index === -1 ?
            this.items.push(new Item (name, price, quantity)) :
            this.items[index].quantity++
    }
    @action buyItem = (name) => {
        let index = this.items.findIndex(i => i.name === name)
        this.items[index].quantity--
        if (this.items[index].quantity === 0) {
            this.items.splice(index, 1)
        }
    }
    @action changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name)
        item.price = price
    }
}