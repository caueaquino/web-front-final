import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Agenda from '../pages/calendars';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/register" exact={true} component={Register} />
                    <Route path="/calendar" exact={true} exact={true} component={Agenda} />
                </Switch>
            </BrowserRouter>
        )
    }
}