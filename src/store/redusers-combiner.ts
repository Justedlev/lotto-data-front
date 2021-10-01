import { combineReducers } from "redux";
import Application from "../models/Application";
import Loading from "../models/Loading";
import { RepeatableData } from "../models/Repeatable";
import RepeatableInput from "../models/RepeatableInput";
import { TicketData, TicketsData } from "../models/Ticket";
import { applicationReducer } from "./reducers/app-reducer";
import { loadingReducer } from "./reducers/loading-reducer";
import { ticketDataFieldsReducer } from "./reducers/new-ticket-reducer";
import { repeatableFieldsReducer, repeatablesReducer } from "./reducers/repeatable-reducer";
import { ticketListDataReducer } from "./reducers/tickets-reducer";

export type ReducersType = {
    getLoading: Loading;
    getApplication: Application;
    getTickets: TicketsData;
    getTicketFields: TicketData;
    getRepeatableFields: RepeatableInput;
    getRepeatables: RepeatableData;
};

export const rootReducers = combineReducers<ReducersType>({
    getLoading: loadingReducer,
    getApplication: applicationReducer,
    getTickets: ticketListDataReducer,
    getTicketFields: ticketDataFieldsReducer,
    getRepeatableFields: repeatableFieldsReducer,
    getRepeatables: repeatablesReducer,
});
