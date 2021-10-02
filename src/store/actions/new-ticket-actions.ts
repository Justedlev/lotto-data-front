import service from "../../config/lotto-data-config";
import ReturnTypes from "../../models/ReturnTypes";
import { ERROR, SUCCESSFUL, Ticket, UNSUCCESSFUL } from "../../models/Ticket";
import { convertDateToString } from "../../utils/converter";
import { setLoadingAddTicketAction } from "./loading-actions";
import { returnCodeAction } from "./return-code-actions";

export const SET_TICKET = "set-ticket";
export const SET_TICKET_MESSAGE = "set-ticket-message";
export const SET_TICKET_SAVED = "set-ticket-saved";

export function saveTicketAction(ticket: Ticket): (dispatch: any) => void {
    return async (dispatch) => {
        try {
            dispatch(setLoadingAddTicketAction(true));
            const t: Ticket = await service.addTicket(ticket);
            if (t) {
                dispatch(
                    setTicketMessageAction(
                        `Билет №${t.id} за ${convertDateToString(
                            ticket.date
                        )} с числами: ${t.combination.sixNumbers
                            .sort((a, b) => a - b)} [${t.combination.strong}] успешно сохранен!`
                    )
                );
                dispatch(setTicketAction(ticket));
                dispatch(setTicketSavedAction(SUCCESSFUL));
            } else {
                dispatch(setTicketMessageAction(`Билет №${ticket.id} уже сохранен!`));
                dispatch(setTicketSavedAction(UNSUCCESSFUL));
            }
            dispatch(returnCodeAction(ReturnTypes.OK));
            dispatch(setLoadingAddTicketAction(false));
        } catch (e) {
            console.log(e);
            dispatch(setTicketMessageAction("Произошла ошибка при сохранение"));
            dispatch(setTicketSavedAction(ERROR));
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
