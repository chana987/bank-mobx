import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject ("Inventory")
@observer
class Item extends Component {
    buyItem = () => {
        this.props.Inventory.buyItem(this.props.item.name)
    }
    changePrice = () => {
        let price = prompt("Enter new price:")
        this.props.Inventory.changePrice(this.props.item.name, price)
    }
    render() {
        let item = this.props.item
        return (
            <li>
                <button onClick={this.buyItem}>Buy</button>
                <span onDoubleClick={this.changePrice}>{item.quantity} {item.name} available at ${item.price} per item</span>
            </li>
        );
    }
}

export default Item;