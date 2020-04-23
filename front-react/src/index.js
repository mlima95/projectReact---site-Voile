import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import './index.css';
import {Provider} from 'react-redux';
import store from './store/configureStore';

ReactDOM.render(
    <Provider store ={store}>
    <AppRouter></AppRouter>
    </Provider>,
    document.getElementById('root')
);