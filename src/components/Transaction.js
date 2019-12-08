import React, { Component } from 'react';
import Moment from 'react-moment';
import { inject, observer } from 'mobx-react';

@inject("BankStore")
@observer
class Transaction extends Component {
    deleteTransaction = () => {
        this.props.BankStore.deleteTransaction(this.props.transaction.id)
    }

    render() {
        let transaction = this.props.transaction
        return (
        <tr>
            <td><Moment format="MMM, YYYY">{transaction.date}</Moment></td>
            <td>{transaction.vendor}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td><button className="transaction-delete" onClick={this.deleteTransaction}>x</button></td>
        </tr>
        );
    }
}

export default Transaction;