import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from "react-router-dom";
import '../styles/Transactions.css'
import Transaction from './Transaction';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

@inject("BankStore", "GeneralStore")
@observer
class Transactions extends Component {
    inputHandler = (e) => {
        this.props.GeneralStore.handleInput(e.target.name, e.target.value)
    }
    filterByDate = () => {
        this.props.BankStore.filterByDate(this.props.GeneralStore.startDate, this.props.GeneralStore.endDate)
    }
    render() {
        return (
            <div>
                <div className="dateRange">
                    <input onChange={this.inputHandler}
                        name="startDate"
                        type="date"
                        value={this.props.GeneralStore.startDate}
                    />
                    <input onChange={this.inputHandler}
                        name="endDate"
                        type="date"
                        value={this.props.GeneralStore.endDate}
                    />
                    <button type="submit" onClick={this.filterByDate}>Find</button>
                </div>
                <p className="balance">Balance: {this.props.BankStore.balance}</p>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="heavy">Date</TableCell>
                            <TableCell className="heavy">Amount</TableCell>
                            <TableCell className="heavy">Vendor</TableCell>
                            <TableCell className="heavy"><Link to="/categories">Category</Link></TableCell>
                            <TableCell className="heavy"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.BankStore.transactions.map((t) =>
                            <Transaction transaction={t} key={t.id} />)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Transactions;