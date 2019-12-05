import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Inventory as inventory } from './stores/Inventory';
import { GeneralStore as generalStore } from './stores/GeneralStore';
import { Provider } from 'mobx-react'

let Inventory = new inventory()
let GeneralStore = new generalStore()
const store = {Inventory, GeneralStore}

ReactDOM.render(<Provider {...store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
