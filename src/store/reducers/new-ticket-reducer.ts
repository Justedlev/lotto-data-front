import ActionType from "../../models/ActionType";
import { TicketData } from "../../models/Ticket";
import {
    SET_TICKET,
    SET_TICKET_COMBINATION_SIX_NUMBERS,
    SET_TICKET_COMBINATION_STRONG_NUMBER,
    SET_TICKET_DATE,
    SET_TICKET_ID,
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
            return { ...action.payload };
        case SET_TICKET_MESSAGE:
            return { ...state, message: action.payload };
        case SET_TICKET_SAVED:
            return { ...state, saved: action.payload };
        case SET_TICKET_ID:
            return {
                ...state,
                ticket: { ...state.ticket, id: action.payload },
            };
        case SET_TICKET_DATE:
            return {
                ...state,
                ticket: { ...state.ticket, date: action.payload },
            };
        case SET_TICKET_COMBINATION_SIX_NUMBERS:
            return {
                ...state,
                ticket: {
                    ...state.ticket,
                    combination: {
                        ...state.ticket.combination,
                        sixNumbers: action.payload,
                    },
                },
            };
        case SET_TICKET_COMBINATION_STRONG_NUMBER:
            return {
                ...state,
                ticket: {
                    ...state.ticket,
                    combination: {
                        ...state.ticket.combination,
                        strong: action.payload,
                    },
                },
            };
        default:
            return state;
    }
}
