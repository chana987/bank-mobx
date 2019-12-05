import { observable } from 'mobx'

export class Item {
    @observable name
    @observable price
    @observable quantity
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}