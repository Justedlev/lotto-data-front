import ActionType from "../../models/ActionType";
import { AllOrStrong } from "../../models/AllOrStrong";
import Repeatable from "../../models/Repeatable";
import RepeatableInput from "../../models/RepeatableInput";
import { SET_REPEATABLES, SET_REPEATABLE_ALLORSTRONG, SET_REPEATABLE_FROM_DATE, SET_REPEATABLE_TO_DATE } from "../actions/repeatable-actions";

const defaultRepatableInput = {
    allOrStrong: AllOrStrong.ALL,
    fromDate: new Date(),
    toDate: new Date()
};

export function setRepeatableFieldsReducer(state: RepeatableInput = defaultRepatableInput, action: ActionType): RepeatableInput {
    switch (action.type) {
        case SET_REPEATABLE_FROM_DATE:
            return { ...state, fromDate: action.payload };
        case SET_REPEATABLE_TO_DATE:
            return { ...state, toDate: action.payload };
        case SET_REPEATABLE_ALLORSTRONG:
            return { ...state, allOrStrong: action.payload };
        default:
            return state;
    }
}

export function getRepeatablesReducer(state: Repeatable[] = [], action: ActionType): Repeatable[] {
    switch (action.type) {
        case SET_REPEATABLES:
            return action.payload.splice(0);
        default:
            return state;
    }
}