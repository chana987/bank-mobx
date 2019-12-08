import React, { Component } from 'react';
import Moment from 'react-moment';
import { inject, observer } from 'mobx-react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import '../styles/Transaction.css'

@inject("BankStore")
@observer
class Transaction extends Component {
    deleteTransaction = () => {
        this.props.BankStore.deleteTransaction(this.props.transaction.id)
    }

    render() {
        let transaction = this.props.transaction
        return (
        <TableRow>
            <TableCell className="table-cell"><Moment format="MMM D, YYYY">{transaction.date}</Moment></TableCell>
            <TableCell className="table-cell">{transaction.amount}</TableCell>
            <TableCell className="table-cell">{transaction.vendor}</TableCell>
            <TableCell className="table-cell">{transaction.category}</TableCell>
            <TableCell className="table-cell"><Button variant="contained" color="default" onClick={this.deleteTransaction}>x</Button></TableCell>
        </TableRow>
        );
    }
}

export default Transaction;