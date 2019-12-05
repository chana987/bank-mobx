import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject ("BankStore")
@observer
class Categories extends Component {   
    render() {
        return (
            <div>
                {this.props.BankStore.transactions.map((t) => 
                    <Transaction transaction={t} key={t._id} /> )}
            </div>
        );
    }
}

export default Categories;