import ActionType from "../../models/ActionType";
import { AllOrStrong } from "../../models/AllOrStrong";
import { RepeatableData } from "../../models/Repeatable";
import RepeatableInput from "../../models/RepeatableInput";
import { SET_REPEATABLES, SET_REPEATABLES_DATA, SET_REPEATABLES_RECEIVED, SET_REPEATABLE_ALLORSTRONG, SET_REPEATABLE_FROM_DATE, SET_REPEATABLE_TO_DATE } from "../actions/repeatable-actions";

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

const defaultRepeatableState = {
    isReceived: false,
    repeatables: []
}

export function getRepeatablesReducer(state: RepeatableData = defaultRepeatableState, action: ActionType): RepeatableData {
    switch (action.type) {
        case SET_REPEATABLES_DATA:
            return action.payload;
        case SET_REPEATABLES:
            return { ...state, repeatables: action.payload.slice() };
        case SET_REPEATABLES_RECEIVED:
            return { ...state, isReceived: action.payload };
        default:
            return state;
    }
}