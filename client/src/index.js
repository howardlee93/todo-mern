import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider } from 'react-redux';
import {configureStore} from './store/store';


import axios from 'axios';



const root = document.getElementById('root');

const store = configureStore({});

window.axios = axios;

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
