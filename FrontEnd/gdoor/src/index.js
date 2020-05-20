import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import {Provider} from "react-redux";
import store from "./store";

import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

import Index from "views/Index";
import NucleoIcons from "views/NucleoIcons";
import Login from "components/login.component";
import Register from "components/register.component";
import PrivateRoute from "./components/private-route/PrivateRoute";
import DoorsList from "components/doorlist.component";

import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

window.axios=axios;
window.token=localStorage.getItem('token');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/index" render={props => <Index {...props} />} />
                <Route
                    path="/nucleo-icons"
                    render={props => <NucleoIcons {...props} />}
                />
                <Route 
                    path="/login"
                    render={props => <Login {...props} />}
                />
                <Route
                    path="/register"
                    render={props => <Register {...props} />}
                />
                

                <PrivateRoute exact path="/doors-list" component={DoorsList} />

                <Redirect to="/index" />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);