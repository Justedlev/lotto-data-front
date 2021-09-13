import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GetTicketsComponent from './components/GetTicketsComponent';
import AddTicket from './components/AddTicket';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navigator from './components/Navigation/Navigator';
import { ITEMS, PATH_ADD_TICKET, PATH_HOME } from './config/menu';
import { Container } from '@material-ui/core';

const App: React.FC = () => {

    return (
        <Container>
            <BrowserRouter>
                <Navigator items={ITEMS} />
                <Switch>
                    <Route path={PATH_HOME} exact component={GetTicketsComponent} />
                    <Route path={PATH_ADD_TICKET} exact component={AddTicket} />
                    <Redirect to={"/"} />
                </Switch>
            </BrowserRouter>
        </Container>
    );
};

export default App;
