import ActionType from "../../models/ActionType";
import Ticket from "../../models/Ticket";
import { SET_NUMBER_OF_TICKET, SET_GET_TICKETS, SET_COMBINATION_FIRST_NUMBER_OF_TICKET, SET_COMBINATION_SECOND_NUMBER_OF_TICKET, SET_COMBINATION_THIRD_NUMBER_OF_TICKET, SET_COMBINATION_FOURTH_NUMBER_OF_TICKET, SET_COMBINATION_FIFTH_NUMBER_OF_TICKET, SET_COMBINATION_SIXTH_NUMBER_OF_TICKET, SET_COMBINATION_STRONG_NUMBER_OF_TICKET, SET_DATE_OF_TICKET } from "../actions/action-tickets";

export const initialState = {
    numberOfTicket: 0,
    date: new Date(),
    combination: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0,
        sixth: 0,
        strong: 0
    }
};

export function reducerGetTickets(tickets: Ticket[] = [], action: ActionType): Ticket[] {
    return action.type === SET_GET_TICKETS ? action.payload.slice(0) : tickets;
}

export function reducerAddTicket(ticket: Ticket = initialState, action: ActionType): Ticket {
    switch (action.type) {
        case SET_NUMBER_OF_TICKET:
            return { ...ticket, numberOfTicket: action.payload };
        case SET_DATE_OF_TICKET:
            return { ...ticket, date: action.payload };
        case SET_COMBINATION_FIRST_NUMBER_OF_TICKET:
            return { ...ticket, combination: { ...ticket.combination, first: action.payload } };
        case SET_COMBINATION_SECOND_NUMBER_OF_TICKET:
            return { ...ticket, combination: { ...ticket.combination, second: action.payload } };
        case SET_COMBINATION_THIRD_NUMBER_OF_TICKET:
            return { ...ticket, combination: { ...ticket.combination, third: action.payload } };
        case SET_COMBINATION_FOURTH_NUMBER_OF_TICKET:
            return { ...ticket, combination: { ...ticket.combination, fourth: action.payload } };
        case SET_COMBINATION_FIFTH_NUMBER_OF_TICKET:
            return { ...ticket, combination: { ...ticket.combination, fifth: action.payload } };
        case SET_COMBINATION_SIXTH_NUMBER_OF_TICKET:
            return { ...ticket, combination: { ...ticket.combination, sixth: action.payload } };
        case SET_COMBINATION_STRONG_NUMBER_OF_TICKET:
            return { ...ticket, combination: { ...ticket.combination, strong: action.payload } };
        default:
            return ticket;
    }
}