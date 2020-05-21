import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
import './index.css';
import App from './App';
=======
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
import TodoList from "components/TDL/TodoList"

>>>>>>> Stashed changes
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

window.axios=axios;
window.token=localStorage.getItem('token');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


<<<<<<< Updated upstream
=======
                <PrivateRoute exact path="/doors-list" component={DoorsList} />
                <PrivateRoute exact path="/todo-list" component={TodoList} />
>>>>>>> Stashed changes

