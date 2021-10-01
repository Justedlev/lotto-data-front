import ActionType from "../../models/ActionType";
import { TicketData, TicketsData } from "../../models/Ticket";
import {
    SET_ID_TICKET,
    SET_GET_TICKETS,
    SET_COMBINATION_STRONG_NUMBER_OF_TICKET,
    SET_DATE_OF_TICKET,
    SET_RECEIVED,
    SET_SAVED,
    SET_TICKET,
    SET_COMBINATION_SIX_NUMBERS_OF_TICKET,
} from "../actions/tickets-actions";

const defaultTicketData = {
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

const defaultTicketsData = {
    isReceived: false,
    tickets: [],
};

export function savedReducer(state: TicketData = defaultTicketData, action: ActionType): TicketData {
    return action.type === SET_SAVED ? { ...state, saved: action.payload } : state;
}

export function setTicketFieldsReducer(
    state: TicketData = defaultTicketData,
    action: ActionType
): TicketData {
    switch (action.type) {
        case SET_TICKET:
            return { ...action.payload };
        case SET_ID_TICKET:
            return {
                ...state,
                ticket: { ...state.ticket, id: action.payload },
            };
        case SET_DATE_OF_TICKET:
            return {
                ...state,
                ticket: { ...state.ticket, date: action.payload },
            };
        case SET_COMBINATION_SIX_NUMBERS_OF_TICKET:
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
        case SET_COMBINATION_STRONG_NUMBER_OF_TICKET:
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

export function receivedReducer(state: TicketsData = defaultTicketsData, action: ActionType): TicketsData {
    return action.type === SET_RECEIVED ? { ...state, isReceived: action.payload } : state;
}

export function getTicketsReducer(state: TicketsData = defaultTicketsData, action: ActionType): TicketsData {
    return action.type === SET_GET_TICKETS ? { ...state, tickets: action.payload.slice(0) } : state;
}
