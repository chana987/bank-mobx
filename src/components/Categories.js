import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject ("BankStore")
@observer
class Categories extends Component {  
    render() {
        return (
            <div>
                {this.props.BankStore.getCategories().map((c, i) => 
                <p key={i}>{c.name} - {c.sum}</p>)}
            </div>
        );
    }
}

export default Categories;