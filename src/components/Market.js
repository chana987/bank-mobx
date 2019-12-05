import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './Item'

@observer
class Market extends Component {
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    addItem = (e) => {
        if (e.key === 'Enter' || e.target.type === "submit") {
            this.props.store.addItem(this.state.name, this.state.price)
        }
    }
    render() {
        return (
            <div>
                <label htmlFor="name">Product name: </label>
                <input type="text" name="name" onChange={this.handleInputChange} onKeyDown={this.addItem} />
                <label htmlFor="price">Price: </label>
                <input type="number" name="price" onChange={this.handleInputChange} onKeyDown={this.addItem} />
                <button type="submit" onClick={this.addItem}>Add item</button>
                {this.props.store.items.map((item, index) => <Item item={item} key={index} store={this.props.store} />)}
            </div>
        );
    }
}

export default Market;