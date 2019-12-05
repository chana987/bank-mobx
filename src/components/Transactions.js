import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Transaction from './Transaction'

@inject ("BankStore")
@observer
class Transactions extends Component {   
    render() {
        return (
            <div>
                {this.props.BankStore.transactions.map((t) => 
                    <Transaction transaction={t} key={t._id} /> )}
            </div>
        );
    }
}

export default Transactions;