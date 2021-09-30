import { combineReducers } from "redux";
import Application from "../models/Application";
import Loading from "../models/Loading";
import Repeatable from "../models/Repeatable";
import RepeatableInput from "../models/RepeatableInput";
import { TicketData, TicketsData } from "../models/Ticket";
import { getApplicationReducer } from "./reducers/app-reducer";
import { setLoadingReducer } from "./reducers/loading-reducer";
import { getRepeatablesReducer, setRepeatableFieldsReducer } from "./reducers/repeatable-reducer";
import { getTicketsReducer, receivedReducer, savedReducer, setTicketFieldsReducer } from "./reducers/tickets-reducer";

export type ReducersType = {
    loading: Loading,
    getApplication: Application
    getTickets: TicketsData,
    isReceived: TicketsData,
    isSaved: TicketData,
    setTicketFields: TicketData,
    setRepeatableFields: RepeatableInput,
    getRepeatables: Repeatable[]
}

export const rootReducers = combineReducers<ReducersType>({
    loading: setLoadingReducer,
    getApplication: getApplicationReducer,
    getTickets: getTicketsReducer,
    isReceived: receivedReducer,
    isSaved: savedReducer,
    setTicketFields: setTicketFieldsReducer,
    setRepeatableFields: setRepeatableFieldsReducer,
    getRepeatables: getRepeatablesReducer
});