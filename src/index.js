import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BankStore as bankStore } from './stores/BankStore';
import { GeneralStore as generalStore } from './stores/GeneralStore';
import { Provider } from 'mobx-react'

let BankStore = new bankStore()
let GeneralStore = new generalStore()
const store = {BankStore, GeneralStore}

ReactDOM.render(<Provider {...store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
