import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import Categories from './components/Categories'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

@inject("BankStore")
@observer
class App extends Component { 
  componentDidMount = () => {
    this.props.BankStore.fetchTransactions()
  } 
  render() {
    return (
      <Router>
        <div className="App">
          <div className="links">
          
            <Link to="/"><Button color="default">
              View transactions
            </Button></Link>
            <Link to="/operations"><Button color="default">
              Add transaction
            </Button></Link>
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