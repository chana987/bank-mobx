import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

@inject("GeneralStore", "BankStore")
@observer
class Operations extends Component {
    inputHandler = (e) => {
        this.props.GeneralStore.handleInput(e.target.name, e.target.value)
    }
    addTransaction = (e) => {
        let GeneralStore = this.props.GeneralStore
        let transaction = {
            amount: e.target.className === 'withdraw' ? -GeneralStore.amount : GeneralStore.amount,
            category: GeneralStore.category,
            vendor: GeneralStore.vendor,
            date: GeneralStore.date
        }
        this.props.BankStore.addTransaction({ transaction })
    }
    render() {
        return (
            <Grid container justify="space-around">
                <TextField onChange={this.inputHandler}
                    label="Amount"
                    name="amount"
                    type="number"
                    value={this.props.GeneralStore.amount}
                />
                <TextField onChange={this.inputHandler}
                    label="Vendor"
                    name="vendor"
                    value={this.props.GeneralStore.vendor}
                />
                <TextField onChange={this.inputHandler}
                    label="Category"
                    name="category"
                    value={this.props.GeneralStore.category}
                />
                <TextField onChange={this.inputHandler}
                    type="date"
                    name="date"
                    value={this.props.GeneralStore.date}
                />
                <Link to="/"
                    className="withdraw"
                    name="withdraw"
                    onClick={this.addTransaction}>Withdraw</Link>
                <Link to="/"
                    className="deposit"
                    name="deposit"
                    onClick={this.addTransaction}>Deposit</Link>
            </Grid>
        )
    }
}

export default Operations;