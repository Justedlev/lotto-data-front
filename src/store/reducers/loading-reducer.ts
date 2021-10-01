import ActionType from "../../models/ActionType";
import Loading from "../../models/Loading";
import {
    SET_LOADING,
    SET_LOADING_ADD_TICKET,
    SET_LOADING_DELETE_TICKET,
    SET_LOADING_REPEATABLE,
    SET_LOADING_TICKETS,
} from "../actions/loading-actions";

const defaultLoading = {
    isLoading: false,
    isLoadingTickets: false,
    isLoadingDeleteTicket: false,
    isLoadingAddTicket: false,
    isLoadingRepeatable: false,
};

export function loadingReducer(state: Loading = defaultLoading, action: ActionType): Loading {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_LOADING_TICKETS:
            return { ...state, isLoadingTickets: action.payload };
        case SET_LOADING_DELETE_TICKET:
            return { ...state, isLoadingDeleteTicket: action.payload };
        case SET_LOADING_ADD_TICKET:
            return { ...state, isLoadingAddTicket: action.payload };
        case SET_LOADING_REPEATABLE:
            return { ...state, isLoadingRepeatable: action.payload };
        default:
            return state;
    }
}
