import { observer, inject } from 'mobx-react'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Transaction from './Transaction';
import '../styles/Transactions.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

@inject("BankStore")
@observer
class Categories extends Component {
    render() {
        return (
            <div>
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
                    {this.props.BankStore.getCategories.map((c, i) =>
                        <TableBody key={i}>
                            <TableRow>
                                <TableCell className="heavy">{c}</TableCell>
                            </TableRow>
                            {this.props.BankStore.transactions.map((t) => t.category === c ?
                                <Transaction transaction={t} key={t.id} /> : null )}
                        </TableBody>)}
                </Table>
            </div>
        )
    }
}

export default Categories;
