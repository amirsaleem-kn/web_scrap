import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../reducers';
import Test from '../components/Test';
import AdminLogin from '../containers/AdminLogin'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
    render(){
        return(
            <Provider store = {createStoreWithMiddleware(reducers)}>
                <div>
                    <h1>Header Menu</h1>
                    <Switch>
                        <Route exact path="/" component={Test}/>
                        <Route exact path="/auth/admin" component={AdminLogin}/>
                    </Switch>
                </div>
            </Provider>
        )
    }
}

export default App;