import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'
import { toast } from 'react-toastify';

@inject("GeneralStore", "BankStore")
@observer
class Operations extends Component {
    inputHandler = (e) => {
        this.props.GeneralStore.handleInput(e.target.name, e.target.value)
    }
    addTransaction = async (event) => {
        event.persist()
        let GeneralStore = this.props.GeneralStore
        let transaction = {
            amount: event.target.childNodes[0].data === "Withdraw" ? -parseInt(GeneralStore.amount) : parseInt(GeneralStore.amount),
            category: GeneralStore.category,
            vendor: GeneralStore.vendor,
            date: GeneralStore.date
        }
        try {
            let response = await this.props.BankStore.addTransaction({ transaction })
            if (response.data) {
                toast.success("Transaction added")
            } else {
                toast.error(response)
            }
        } catch (err) {
            toast.error("Something went wrong")
        }
    }
    render() {
        return (
            <div className="add-transaction">
                <Grid container justify="space-around" direction="column" style={{ width: "300px" }}>
                    <h1>Add Transaction</h1>
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
                    <div>
                        <Link to="/"
                            name="withdraw"
                            onClickCapture={this.addTransaction}
                            className="withdraw">
                            <Button variant="contained" color="primary"
                                style={{ margin: "20px" }}>Withdraw
                                </Button>
                        </Link>
                        <Link to="/"
                            name="deposit"
                            onClickCapture={this.addTransaction}
                            className="deposit">
                            <Button variant="contained" color="primary"
                                style={{ margin: "20px" }}>Deposit
                                </Button>
                        </Link>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default Operations;