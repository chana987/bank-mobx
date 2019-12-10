import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../App.css'
import Transaction from './Transaction';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

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
                <h3 className="balance">Balance: ${this.props.BankStore.balance}</h3>
                <div className="dateRange">
                    <input onChange={this.inputHandler}
                        name="startDate"
                        type="date"
                        value={this.props.GeneralStore.startDate}
                        style={{ margin: "20px" }}
                    />
                    <input onChange={this.inputHandler}
                        name="endDate"
                        type="date"
                        value={this.props.GeneralStore.endDate}
                        style={{ margin: "20px" }}
                    />
                    <Button onClick={this.filterByDate} variant="contained" color="primary">Find</Button>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 900 }}>Date</TableCell>
                            <TableCell style={{ fontWeight: 900 }}>Amount</TableCell>
                            <TableCell style={{ fontWeight: 900 }}>Vendor</TableCell>
                            <TableCell style={{ fontWeight: 900 }}>Category</TableCell>
                            <TableCell style={{ fontWeight: 900 }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.BankStore.filteredTransactions.map((t) =>
                            <Transaction transaction={t} key={t.id} />)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Transactions;