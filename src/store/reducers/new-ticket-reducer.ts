import ActionType from "../../models/ActionType";
import { TicketData } from "../../models/Ticket";
import {
    SET_TICKET,
    SET_TICKET_MESSAGE,
    SET_TICKET_SAVED,
} from "../actions/new-ticket-actions";

const defaultTicketData = {
    message: "",
    saved: "",
    ticket: {
        id: NaN,
        date: new Date(),
        combination: {
            sixNumbers: new Array(6).fill(NaN),
            strong: NaN,
        },
    },
};

export function ticketDataFieldsReducer(
    state: TicketData = defaultTicketData,
    action: ActionType
): TicketData {
    switch (action.type) {
        case SET_TICKET:
            return { ...state, ticket: action.payload };
        case SET_TICKET_MESSAGE:
            return { ...state, message: action.payload };
        case SET_TICKET_SAVED:
            return { ...state, saved: action.payload };
        default:
            return state;
    }
}
