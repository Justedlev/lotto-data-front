import ActionType from "../../models/ActionType";
import { TicketsData } from "../../models/Ticket";
import {
    SET_TICKET_LIST_DATA,
    SET_TICKET_LIST_DATA_MESSAGE,
    SET_TICKET_LIST_DATA_RECEIVED,
} from "../actions/tickets-actions";

const defaultTicketsData = {
    message: "",
    isReceived: false,
    data: [],
};

export function ticketListDataReducer(
    state: TicketsData = defaultTicketsData,
    action: ActionType
): TicketsData {
    switch (action.type) {
        case SET_TICKET_LIST_DATA_RECEIVED:
            return { ...state, isReceived: action.payload };
        case SET_TICKET_LIST_DATA:
            return { ...state, data: action.payload.slice() };
        case SET_TICKET_LIST_DATA_MESSAGE:
            return { ...state, message: action.payload };
        default:
            return state;
    }
}
