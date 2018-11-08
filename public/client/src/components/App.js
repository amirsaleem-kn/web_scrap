import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

import Test from './Test';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
    render(){
        return(
            <Provider store = {createStoreWithMiddleware(reducers)}>
                <Router>
                    <Route exact path = '/' component = {Test}/>
                </Router>
            </Provider>
        )
    }
}

export default App;