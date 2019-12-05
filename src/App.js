import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import Categories from './components/Categories'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

@inject("BankStore")
@observer
class App extends Component { 
  componentDidMount = () => {
    this.props.BankStore.getTransactions()
  } 
  render() {
    return (
      <Router>
        <div>
          <div className="links">
            <Link to="/">View transactions</Link>
            <Link to="/operations">Add transaction</Link>
          </div>
          
          <Route exact path="/operations">
            <Operations />
          </Route>
          <Route exact path="/">
            <Transactions /> 
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;