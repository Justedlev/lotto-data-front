import { combineReducers } from "redux";
import Loading from "../models/Loading";
import { TicketData, TicketsData } from "../models/Ticket";
import { setLoadingReducer } from "./reducers/loading-reducer";
import { getTicketsReducer, receivedReducer, savedReducer, setTicketFieldsReducer } from "./reducers/tickets-reducer";

export type ReducersType = {
    loading: Loading,
    getTickets: TicketsData,
    isReceived: TicketsData,
    isSaved: TicketData,
    setTicketFields: TicketData
}

export const rootReducers = combineReducers<ReducersType>({
    loading: setLoadingReducer,
    getTickets: getTicketsReducer,
    isReceived: receivedReducer,
    isSaved: savedReducer,
    setTicketFields: setTicketFieldsReducer
});