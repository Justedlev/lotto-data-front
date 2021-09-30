import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GetTicketsComponent from './components/Tickets/TicketsComponent';
import AddTicket from './components/AddTicket/AddTicketComponent';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navigator from './components/Navigation/NavbarComponent';
import { ITEMS, PATH_ADD_TICKET, PATH_HOME, PATH_REPEATABLE } from './config/menu';
import RepeatablesComponent from './components/Repeatables/RepeatablesComponent';

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navigator items={ITEMS} />
            <Switch>
                <Route path={PATH_HOME} exact component={GetTicketsComponent} />
                <Route path={PATH_ADD_TICKET} exact component={AddTicket} />
                <Route path={PATH_REPEATABLE} exact component={RepeatablesComponent} />
                <Redirect to={PATH_HOME} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
