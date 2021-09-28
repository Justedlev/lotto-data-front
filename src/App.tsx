import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GetTicketsComponent from './components/GetTicketsComponent';
import AddTicket from './components/AddTicket';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navigator from './components/Navigation/Navigator';
import { ITEMS, PATH_ADD_TICKET, PATH_CALCULATE, PATH_HOME } from './config/menu';
import CalculateNextCombination from './components/CalculateNextCombination';

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navigator items={ITEMS} />
            <Switch>
                <Route path={PATH_HOME} exact component={GetTicketsComponent} />
                <Route path={PATH_ADD_TICKET} exact component={AddTicket} />
                <Route path={PATH_CALCULATE} exact component={CalculateNextCombination} />
                <Redirect to={"/"} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
