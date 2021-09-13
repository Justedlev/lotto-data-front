import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import Ticket from "../models/Ticket";
import { reducerAddTicket, reducerGetTickets } from "./reducers/reducer-tickets";

export type ReducersType = {
    getTickets: Ticket[],
    addTicket: Ticket
}

const reducers = combineReducers<ReducersType>({
    getTickets: reducerGetTickets,
    addTicket: reducerAddTicket
});

export const store = createStore(reducers, applyMiddleware(thunk));