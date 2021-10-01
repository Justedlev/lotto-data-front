import ActionType from "../../models/ActionType";
import Application from "../../models/Application";
import { SET_SIDEBAR } from "../actions/app-actions";

const defaultAppState = {
    isSidebar: false,
};

export function applicationReducer(state: Application = defaultAppState, action: ActionType): Application {
    switch (action.type) {
        case SET_SIDEBAR:
            return { ...state, isSidebar: action.payload };
        default:
            return state;
    }
}
