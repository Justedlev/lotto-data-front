import ActionType from "../../models/ActionType";
import { TicketData, TicketsData } from "../../models/Ticket";
import {
    SET_NUMBER_OF_TICKET,
    SET_GET_TICKETS,
    SET_COMBINATION_FIRST_NUMBER_OF_TICKET,
    SET_COMBINATION_SECOND_NUMBER_OF_TICKET,
    SET_COMBINATION_THIRD_NUMBER_OF_TICKET,
    SET_COMBINATION_FOURTH_NUMBER_OF_TICKET,
    SET_COMBINATION_FIFTH_NUMBER_OF_TICKET,
    SET_COMBINATION_SIXTH_NUMBER_OF_TICKET,
    SET_COMBINATION_STRONG_NUMBER_OF_TICKET,
    SET_DATE_OF_TICKET, SET_RECEIVED, SET_SAVED
} from "../actions/tickets-actions";

const defaultTicketData = {
    saved: '',
    ticket: {
        numberOfTicket: NaN,
        date: new Date(),
        combination: {
            first: NaN,
            second: NaN,
            third: NaN,
            fourth: NaN,
            fifth: NaN,
            sixth: NaN,
            strong: NaN
        }
    }
};

const defaultTicketsData = {
    isReceived: false,
    tickets: []
};

export function savedReducer(state: TicketData = defaultTicketData, action: ActionType): TicketData {
    return action.type === SET_SAVED ? { ...state, saved: action.payload } : state;
};

export function setTicketFieldsReducer(state: TicketData = defaultTicketData, action: ActionType): TicketData {
    switch (action.type) {
        case SET_NUMBER_OF_TICKET:
            return { ...state, ticket: { ...state.ticket, numberOfTicket: action.payload } };
        case SET_DATE_OF_TICKET:
            return { ...state, ticket: { ...state.ticket, date: action.payload } };
        case SET_COMBINATION_FIRST_NUMBER_OF_TICKET:
            return { ...state, ticket: { ...state.ticket, combination: { ...state.ticket.combination, first: action.payload } } };
        case SET_COMBINATION_SECOND_NUMBER_OF_TICKET:
            return { ...state, ticket: { ...state.ticket, combination: { ...state.ticket.combination, second: action.payload } } };
        case SET_COMBINATION_THIRD_NUMBER_OF_TICKET:
            return { ...state, ticket: { ...state.ticket, combination: { ...state.ticket.combination, third: action.payload } } };
        case SET_COMBINATION_FOURTH_NUMBER_OF_TICKET:
            return { ...state, ticket: { ...state.ticket, combination: { ...state.ticket.combination, fourth: action.payload } } };
        case SET_COMBINATION_FIFTH_NUMBER_OF_TICKET:
            return { ...state, ticket: { ...state.ticket, combination: { ...state.ticket.combination, fifth: action.payload } } };
        case SET_COMBINATION_SIXTH_NUMBER_OF_TICKET:
            return { ...state, ticket: { ...state.ticket, combination: { ...state.ticket.combination, sixth: action.payload } } };
        case SET_COMBINATION_STRONG_NUMBER_OF_TICKET:
            return { ...state, ticket: { ...state.ticket, combination: { ...state.ticket.combination, strong: action.payload } } };
        default:
            return state;
    };
};

export function receivedReducer(state: TicketsData = defaultTicketsData, action: ActionType): TicketsData {
    return action.type === SET_RECEIVED ? { ...state, isReceived: action.payload } : state;
};

export function getTicketsReducer(state: TicketsData = defaultTicketsData, action: ActionType): TicketsData {
    return action.type === SET_GET_TICKETS ? { ...state, tickets: action.payload.slice(0) } : state;
};