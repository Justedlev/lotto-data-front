import service from "../../config/lotto-data-config";
import ReturnTypes from "../../models/ReturnTypes";
import { DEFAULT, SUCCESSFUL, Ticket, UNSUCCESSFUL } from "../../models/Ticket";
import { setLoadingAddTicketAction } from "./loading-actions";
import { returnCodeAction } from "./return-code-actions";

export const SET_TICKET = "set-ticket";
export const SET_TICKET_MESSAGE = "set-ticket-message";
export const SET_TICKET_ID = "set-ticket-id";
export const SET_TICKET_DATE = "set-ticket-date";
export const SET_TICKET_COMBINATION_SIX_NUMBERS = "set-ticket-combination-six-numbers";
export const SET_TICKET_COMBINATION_STRONG_NUMBER = "set-ticket-combination-strong-number";
export const SET_TICKET_SAVED = "set-ticket-saved";

export function saveTicketAction(ticket: Ticket): (dispatch: any) => void {
    return async (dispatch) => {
        try {
            dispatch(setLoadingAddTicketAction(true));
            const t: Ticket = await service.addTicket(ticket);
            dispatch(setTicketMessageAction("Билет сохранен!"));
            dispatch(setIdTicketAction(NaN));
            dispatch(setDateOfTicketAction(new Date()));
            dispatch(setCombinationSixNumbersOfTicketAction(new Array(6).fill(NaN)));
            dispatch(setCombinationStrongNumberOfTicketAction(NaN));
            dispatch(setTicketSavedAction(t != null ? SUCCESSFUL : UNSUCCESSFUL));
            dispatch(returnCodeAction(ReturnTypes.OK));
            dispatch(setLoadingAddTicketAction(false));
        } catch (e) {
            dispatch(setTicketMessageAction("Произошла ошибка при сохранение"));
            dispatch(setTicketSavedAction(UNSUCCESSFUL));
            dispatch(returnCodeAction(ReturnTypes.NETWORK_ERROR));
            dispatch(setLoadingAddTicketAction(false));
        }
    };
}

export function setTicketAction(ticket: Ticket): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_TICKET, payload: ticket });
    };
}

export function setTicketMessageAction(msg: string): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_TICKET_MESSAGE, payload: msg });
    };
}

export function setTicketSavedAction(msg: string): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_TICKET_SAVED, payload: msg });
    };
}

export function setIdTicketAction(id: number): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_TICKET_ID, payload: id });
        dispatch(setTicketSavedAction(DEFAULT));
    };
}

export function setDateOfTicketAction(date: Date): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_TICKET_DATE, payload: date });
        dispatch(setTicketSavedAction(DEFAULT));
    };
}

export function setCombinationSixNumbersOfTicketAction(sixNumbers: number[]): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({
            type: SET_TICKET_COMBINATION_SIX_NUMBERS,
            payload: sixNumbers,
        });
        dispatch(setTicketSavedAction(DEFAULT));
    };
}

export function setCombinationStrongNumberOfTicketAction(strong: number): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({
            type: SET_TICKET_COMBINATION_STRONG_NUMBER,
            payload: strong,
        });
        dispatch(setTicketSavedAction(DEFAULT));
    };
}
