import service from "../../config/lotto-data-config";
import ActionType from "../../models/ActionType";
import ReturnTypes from "../../models/ReturnTypes";
import Ticket from "../../models/Ticket";
import { SET_RETURN_CODE } from './actions-return-code';

export const SET_GET_TICKETS = "set-get-tickets";
export const SET_NUMBER_OF_TICKET = "set-number-of-ticket";
export const SET_DATE_OF_TICKET = "set-date-of-ticket";
export const SET_COMBINATION_FIRST_NUMBER_OF_TICKET = "set-combination-first-number-of-ticket";
export const SET_COMBINATION_SECOND_NUMBER_OF_TICKET = "set-combination-second-number-of-ticket";
export const SET_COMBINATION_THIRD_NUMBER_OF_TICKET = "set-combination-third-number-of-ticket";
export const SET_COMBINATION_FOURTH_NUMBER_OF_TICKET = "set-combination-fourth-number-of-ticket";
export const SET_COMBINATION_FIFTH_NUMBER_OF_TICKET = "set-combination-fifth-number-of-ticket";
export const SET_COMBINATION_SIXTH_NUMBER_OF_TICKET = "set-combination-sixth-number-of-ticket";
export const SET_COMBINATION_STRONG_NUMBER_OF_TICKET = "set-combination-strong-number-of-ticket";

export function getTicketsAction(): (dispatch: any) => void {
    return async dispatch => {
        try {
            const tickets: Ticket[] = await service.getTickets();
            dispatch({ type: SET_GET_TICKETS, payload: tickets });
            dispatch({ type: SET_RETURN_CODE, payload: ReturnTypes.OK })
        } catch (e) {
            dispatch({ type: SET_RETURN_CODE, payload: ReturnTypes.NETWORK_ERROR })
        };
    };
}

export function addNumberOfTicketAction(numberOfTicket: number): ActionType {
    return {type: SET_NUMBER_OF_TICKET, payload: numberOfTicket};
}

export function addDateOfTicketAction(date: Date): ActionType {
    return {type: SET_DATE_OF_TICKET, payload: date};
}

export function addCombinationFirstNumberOfTicketAction(first: number): ActionType {
    return {type: SET_COMBINATION_FIRST_NUMBER_OF_TICKET, payload: first};
}

export function addCombinationSecondNumberOfTicketAction(second: number): ActionType {
    return {type: SET_COMBINATION_SECOND_NUMBER_OF_TICKET, payload: second};
}

export function addCombinationThirdNumberOfTicketAction(third: number): ActionType {
    return {type: SET_COMBINATION_THIRD_NUMBER_OF_TICKET, payload: third};
}

export function addCombinationFourthNumberOfTicketAction(fourth: number): ActionType {
    return {type: SET_COMBINATION_FOURTH_NUMBER_OF_TICKET, payload: fourth};
}

export function addCombinationFifthNumberOfTicketAction(fifth: number): ActionType {
    return {type: SET_COMBINATION_FIFTH_NUMBER_OF_TICKET, payload: fifth};
}

export function addCombinationSixthNumberOfTicketAction(sixth: number): ActionType {
    return {type: SET_COMBINATION_SIXTH_NUMBER_OF_TICKET, payload: sixth};
}

export function addCombinationStrongNumberOfTicketAction(strong: number): ActionType {
    return {type: SET_COMBINATION_STRONG_NUMBER_OF_TICKET, payload: strong};
}

export function saveTicketAction(ticket: Ticket): (dispatch: any) => void {
    return async dispatch => {
        try {
            const request: Ticket = await service.addTicket(ticket);
            dispatch({ type: SET_RETURN_CODE, payload: request })
        } catch (e) {
            dispatch({ type: SET_RETURN_CODE, payload: ReturnTypes.NETWORK_ERROR })
        };
    };
}

export function deleteTicketAction(numberOfTicket: number): (dispatch: any) => void {
    return async dispatch => {
        try {
            const request: Ticket = await service.deteleTicket(numberOfTicket);
            dispatch({ type: SET_RETURN_CODE, payload: request })
        } catch (e) {
            dispatch({ type: SET_RETURN_CODE, payload: ReturnTypes.NETWORK_ERROR })
        };
    };
}