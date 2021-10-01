import service from "../../config/lotto-data-config";
import ReturnTypes from "../../models/ReturnTypes";
import { Ticket } from "../../models/Ticket";
import { returnCodeAction } from "./return-code-actions";
import { setLoadingDeleteTicketAction, setLoadingTicketsAction } from "./loading-actions";

export const SET_TICKET_LIST_DATA = "set-tickets";
export const SET_TICKET_LIST_DATA_RECEIVED = "set-tickets-received";
export const SET_TICKET_LIST_DATA_MESSAGE = "set-tickets-message";
export const SET_TICKET_LIST_DATA_DELETE_TICKET = "set-delete-ticket-from-tickets";
export const SET_TICKET_LIST_DATA_EDIT_TICKET = "set-delete-ticket-from-tickets";

export function setReceivedTicketsAction(isReceived: boolean): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_TICKET_LIST_DATA_RECEIVED, payload: isReceived });
    };
}

export function setDeleteTicketAction(isDeleted: boolean): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_TICKET_LIST_DATA_DELETE_TICKET, payload: isDeleted });
    };
}

export function editTicketAction(ticket: Ticket): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_TICKET_LIST_DATA_EDIT_TICKET, payload: ticket });
    };
}

export function ticketsAction(): (dispatch: any) => void {
    return async (dispatch) => {
        try {
            dispatch(setLoadingTicketsAction(true));
            const tickets: Ticket[] = await service.getTickets();
            dispatch({ type: SET_TICKET_LIST_DATA, payload: tickets });
            dispatch(setReceivedTicketsAction(tickets != null));
            dispatch(returnCodeAction(ReturnTypes.OK));
            dispatch(setLoadingTicketsAction(false));
        } catch (e) {
            dispatch(returnCodeAction(ReturnTypes.NETWORK_ERROR));
            dispatch(setLoadingTicketsAction(false));
        }
    };
}

export function deleteTicketAction(numberOfTicket: number): (dispatch: any) => void {
    return async (dispatch) => {
        try {
            dispatch(setLoadingDeleteTicketAction(true));
            const t: Ticket = await service.deteleTicket(numberOfTicket);
            console.log(t);
            dispatch(ticketsAction());
            dispatch(returnCodeAction(ReturnTypes.OK));
            dispatch(setLoadingDeleteTicketAction(false));
        } catch (e) {
            dispatch(returnCodeAction(ReturnTypes.NETWORK_ERROR));
            dispatch(setLoadingDeleteTicketAction(false));
        }
    };
}
