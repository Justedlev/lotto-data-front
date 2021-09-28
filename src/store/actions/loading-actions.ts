export const SET_LOADING = "set-loading";
export const SET_LOADING_TICKETS = "set-loading-tickets";
export const SET_LOADING_ADD_TICKET = "set-loading-add-ticket";
export const SET_LOADING_DELETE_TICKET = "set-loading-delete-ticket";
export const SET_LOADING_REPEATABLE = "set-loading-repeatable";

export function setLoadingAction(isLoading: boolean): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_LOADING, payload: isLoading });
    }
};

export function setLoadingTicketsAction(isLoading: boolean): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_LOADING_TICKETS, payload: isLoading });
    }
};

export function setLoadingAddTicketAction(isLoading: boolean): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_LOADING_ADD_TICKET, payload: isLoading });
    }
};

export function setLoadingDeleteTicketAction(isLoading: boolean): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_LOADING_DELETE_TICKET, payload: isLoading });
    }
};

export function setLoadingRepeatableAction(isLoading: boolean): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_LOADING_REPEATABLE, payload: isLoading });
    }
};