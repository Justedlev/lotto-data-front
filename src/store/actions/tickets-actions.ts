import service from "../../config/lotto-data-config";
import ReturnTypes from "../../models/ReturnTypes";
import { DEFAULT, SUCCESSFUL, Ticket, UNSUCCESSFUL } from "../../models/Ticket";
import { setReturnCodeAction } from './return-code-actions';
import { setLoadingAddTicketAction, setLoadingDeleteTicketAction, setLoadingTicketsAction } from "./loading-actions";

export const SET_GET_TICKETS = "set-get-tickets";
export const SET_NUMBER_OF_TICKET = "set-number-of-ticket";
export const SET_TICKET = "set-ticket";
export const SET_DATE_OF_TICKET = "set-date-of-ticket";
export const SET_COMBINATION_FIRST_NUMBER_OF_TICKET = "set-combination-first-number-of-ticket";
export const SET_COMBINATION_SECOND_NUMBER_OF_TICKET = "set-combination-second-number-of-ticket";
export const SET_COMBINATION_THIRD_NUMBER_OF_TICKET = "set-combination-third-number-of-ticket";
export const SET_COMBINATION_FOURTH_NUMBER_OF_TICKET = "set-combination-fourth-number-of-ticket";
export const SET_COMBINATION_FIFTH_NUMBER_OF_TICKET = "set-combination-fifth-number-of-ticket";
export const SET_COMBINATION_SIXTH_NUMBER_OF_TICKET = "set-combination-sixth-number-of-ticket";
export const SET_COMBINATION_STRONG_NUMBER_OF_TICKET = "set-combination-strong-number-of-ticket";
export const SET_SAVED = "set-saved";
export const SET_RECEIVED = "set-received";
export const SET_DELETED = "set-deleted";

export function setDeletedTicketAction(isdeleted: boolean): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_DELETED, payload: isdeleted });
    }
};

export function setReceivedTicketsAction(isReceived: boolean): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_RECEIVED, payload: isReceived });
    }
};

export function setSavedTicketAction(msg: string): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_SAVED, payload: msg });
    }
};

export function setTicketAction(ticket: Ticket): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_TICKET, payload: ticket });
    }
};

export function addNumberOfTicketAction(numberOfTicket: number): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_NUMBER_OF_TICKET, payload: numberOfTicket });
        dispatch(setSavedTicketAction(DEFAULT));
    };
};

export function addDateOfTicketAction(date: Date): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_DATE_OF_TICKET, payload: date });
        dispatch(setSavedTicketAction(DEFAULT));
    };
};

export function addCombinationFirstNumberOfTicketAction(first: number): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_COMBINATION_FIRST_NUMBER_OF_TICKET, payload: first });
        dispatch(setSavedTicketAction(DEFAULT));
    };
};

export function addCombinationSecondNumberOfTicketAction(second: number): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_COMBINATION_SECOND_NUMBER_OF_TICKET, payload: second });
        dispatch(setSavedTicketAction(DEFAULT));
    };
};

export function addCombinationThirdNumberOfTicketAction(third: number): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_COMBINATION_THIRD_NUMBER_OF_TICKET, payload: third });
        dispatch(setSavedTicketAction(DEFAULT));
    };
};

export function addCombinationFourthNumberOfTicketAction(fourth: number): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_COMBINATION_FOURTH_NUMBER_OF_TICKET, payload: fourth });
        dispatch(setSavedTicketAction(DEFAULT));
    };
};

export function addCombinationFifthNumberOfTicketAction(fifth: number): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_COMBINATION_FIFTH_NUMBER_OF_TICKET, payload: fifth });
        dispatch(setSavedTicketAction(DEFAULT));
    };
};

export function addCombinationSixthNumberOfTicketAction(sixth: number): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_COMBINATION_SIXTH_NUMBER_OF_TICKET, payload: sixth });
        dispatch(setSavedTicketAction(DEFAULT));
    };
};

export function addCombinationStrongNumberOfTicketAction(strong: number): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_COMBINATION_STRONG_NUMBER_OF_TICKET, payload: strong });
        dispatch(setSavedTicketAction(DEFAULT));
    };
};

export function updateTicketsAction(tickets: Ticket[]): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_GET_TICKETS, payload: tickets });
    };
};

export function getTicketsAction(): (dispatch: any) => void {
    return async dispatch => {
        try {
            dispatch(setLoadingTicketsAction(true));
            const tickets: Ticket[] = await service.getTickets();
            dispatch(setLoadingTicketsAction(false));
            dispatch({ type: SET_GET_TICKETS, payload: tickets });
            dispatch(setReceivedTicketsAction(tickets != null));
            dispatch(setReturnCodeAction(ReturnTypes.OK));
        } catch (e) {
            dispatch(setLoadingTicketsAction(false));
            dispatch(setReturnCodeAction(ReturnTypes.NETWORK_ERROR));
        };
    };
};

export function saveTicketAction(ticket: Ticket): (dispatch: any) => void {
    return async dispatch => {
        try {
            dispatch(setLoadingAddTicketAction(true));
            const t: Ticket = await service.addTicket(ticket);
            dispatch(setLoadingAddTicketAction(false));
            dispatch(addNumberOfTicketAction(NaN));
            dispatch(addDateOfTicketAction(new Date()));
            dispatch(addCombinationFirstNumberOfTicketAction(NaN));
            dispatch(addCombinationSecondNumberOfTicketAction(NaN));
            dispatch(addCombinationThirdNumberOfTicketAction(NaN));
            dispatch(addCombinationFourthNumberOfTicketAction(NaN));
            dispatch(addCombinationFifthNumberOfTicketAction(NaN));
            dispatch(addCombinationSixthNumberOfTicketAction(NaN));
            dispatch(addCombinationStrongNumberOfTicketAction(NaN));
            dispatch(setSavedTicketAction(t != null ? SUCCESSFUL : UNSUCCESSFUL));
            dispatch(setReturnCodeAction(ReturnTypes.OK));
        } catch (e) {
            dispatch(setLoadingAddTicketAction(false));
            dispatch(setSavedTicketAction(UNSUCCESSFUL));
            dispatch(setReturnCodeAction(ReturnTypes.NETWORK_ERROR));
        };
    };
};

export function deleteTicketAction(numberOfTicket: number): (dispatch: any) => void {
    return async dispatch => {
        try {
            dispatch(setLoadingDeleteTicketAction(true));
            const t: Ticket = await service.deteleTicket(numberOfTicket);
            console.log(t);
            dispatch(setLoadingDeleteTicketAction(false));
            dispatch(getTicketsAction());
            dispatch(setReturnCodeAction(ReturnTypes.OK));
        } catch (e) {
            dispatch(setLoadingDeleteTicketAction(false));
            dispatch(setReturnCodeAction(ReturnTypes.NETWORK_ERROR));
        };
    };
};