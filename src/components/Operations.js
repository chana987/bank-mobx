import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'

@inject("GeneralStore", "BankStore")
@observer
class Operations extends Component {
    inputHandler = (e) => {
        this.props.GeneralStore.handleInput(e.target.name, e.target.value)
    }
    render () {
        return (
            <div>
                <input onChange = {this.inputHandler} 
                        name = "amount"
                        type = "number"
                        placeholder = "Amount"
                        value = {this.props.GeneralStore.amount}
                        />
                <input onChange = {this.inputHandler} 
                        name = "category"
                        placeholder = "Category"
                        value = {this.props.GeneralStore.category}
                        /> 
                <input onChange = {this.inputHandler} 
                        name = "vendor"
                        placeholder = "Vendor"
                        value = {this.props.GeneralStore.vendor}
                        /> 
                <input onChange = {this.inputHandler} 
                        name = "date"
                        type = "date"
                        placeholder = "Date"
                        value = {this.props.GeneralStore.date}
                        /> 
                <Link to="/" 
                    className="withdraw" 
                    name="withdraw" 
                    onClick={this.props.BankStore.addTransaction}>Withdraw</Link>
                <Link to="/" 
                    className="deposit" 
                    name="deposit" 
                    onClick={this.props.BankStore.addTransaction}>Deposit</Link>
            </div>
        )   
    }
}

export default Operations;