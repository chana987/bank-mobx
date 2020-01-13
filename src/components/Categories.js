import { observer, inject } from 'mobx-react'
import React, { Component } from 'react';
import Transaction from './Transaction';
import '../App.css'
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
                            <TableCell style={{ fontWeight: 900 }}>Date</TableCell>
                            <TableCell style={{ fontWeight: 900 }}>Amount</TableCell>
                            <TableCell style={{ fontWeight: 900 }}>Vendor</TableCell>
                            <TableCell style={{ fontWeight: 900 }}>Category</TableCell>
                            <TableCell style={{ fontWeight: 900 }}></TableCell>
                        </TableRow>
                    </TableHead>
                    {this.props.BankStore.getCategories.map((c, i) =>
                        <TableBody key={i}>
                            <TableRow>
                                <TableCell style={{ fontWeight: 800, fontSize: "25px", paddingTop: "40px", paddingLeft: "40px", textDecoration: "underline" }}>{c}</TableCell>
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
