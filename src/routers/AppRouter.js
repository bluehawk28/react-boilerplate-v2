import React from 'react';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {Switch, Router, Route, Link, NavLink} from 'react-router-dom'

export const history = createHistory();

const AppRouter = () =>(
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>   
</Router>
);

export default AppRouter;