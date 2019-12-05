import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Moment from 'react-moment';

class Transaction extends Component {
    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }

    render() {
        let transaction = this.props.transaction
        return (
        <div className="transaction">
            <Moment format="MMM-YYYY">{transaction.date}</Moment>
            <span className="transaction-vendor">{transaction.vendor}</span>
            <span className="transaction-amount">{transaction.amount}</span>
            <Link to={`/transactions/breakdown/categories/${transaction.category}`} className="transaction-category">{transaction.category}</Link>
            <button className="transaction-delete" onClick={this.deleteTransaction}>x</button>
        </div>
        );
    }
}

export default Transaction;