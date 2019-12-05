import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Item from './Item'

@inject ("Inventory", "GeneralStore")
@observer
class Market extends Component {
    handleInputChange = (e) => {
        this.props.GeneralStore.handleInput(e.target.name, e.target.value)
    }
    addItem = (e) => {
        let generalStore = this.props.GeneralStore
        if (e.key === 'Enter' || e.target.type === "submit") {
            this.props.Inventory.addItem(generalStore.name, generalStore.price)
            generalStore.handleInput("name", "")
            generalStore.handleInput("price", "")
        }
    }
    render() {
        return (
            <div>
                <label htmlFor="name">Product name: </label>
                <input type="text" 
                    name="name" 
                    onChange={this.handleInputChange} 
                    onKeyDown={this.addItem}
                    value = {this.props.GeneralStore.name} />
                <label htmlFor="price">Price: </label>
                <input type="number" 
                    name="price" 
                    onChange={this.handleInputChange} 
                    onKeyDown={this.addItem}
                    value = {this.props.GeneralStore.price} />
                <button type="submit" onClick={this.addItem}>Add item</button>
                {this.props.Inventory.items.map((item, index) => <Item item={item} key={index} />)}
            </div>
        );
    }
}

export default Market;