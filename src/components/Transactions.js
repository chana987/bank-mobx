import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { Link } from "react-router-dom"
import Transaction from './Transaction'

@inject ("BankStore")
@observer
class Transactions extends Component {   
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Vendor</th>
                        <th>Amount</th>
                        <Link to="/categories"><th>Category</th></Link>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.BankStore.transactions.map((t) => 
                        <Transaction transaction={t} key={t.id} /> )}
                </tbody>
            </table>
        );
    }
}

export default Transactions;