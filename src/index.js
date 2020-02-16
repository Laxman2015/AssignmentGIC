import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import rootReducer from './reducers/index';

import './index.css';


ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <MuiThemeProvider theme={getMuiTheme}>
            <Routes />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('App'));