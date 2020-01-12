import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import Categories from './components/Categories'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
          <header></header>
          <div className="links">
            <Link to="/"><Button variant="contained" color="primary" style={{ margin: "20px" }}>
              View transactions
            </Button></Link>
            <Link to="/operations"><Button variant="contained" color="primary" style={{ margin: "20px" }}>
              Add transaction
            </Button></Link>
            <Link to="/categories"><Button variant="contained" color="primary" style={{ margin: "20px" }}>
              Breakdown
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
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            newestOnTop={false}
            draggable
          />
        </div>
      </Router>
    )
  }
}

export default App;