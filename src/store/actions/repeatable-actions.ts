import service from "../../config/lotto-data-config";
import { AllOrStrong } from "../../models/AllOrStrong";
import Repeatable from "../../models/Repeatable";
import ReturnTypes from "../../models/ReturnTypes";
import { setLoadingRepeatableAction } from "./loading-actions";
import { setReturnCodeAction } from "./return-code-actions";

export const SET_REPEATABLES = "set-repeatable";
export const SET_REPEATABLE_NUMBER = "set-repeatable-number";
export const SET_REPEATABLE_COUNT = "set-repeatable-count";
export const SET_REPEATABLE_FROM_DATE = "set-repeatable-from-date";
export const SET_REPEATABLE_TO_DATE = "set-repeatable-to-date";
export const SET_REPEATABLE_ALLORSTRONG = "set-repeatable-allorstrong";

export function setRepeatablesAction(repeatables: ReturnTypes[]): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_REPEATABLES, payload: repeatables });
    }
};

export function getRepeatablesAction(fromDate: Date, toDate: Date, allOrStrong: AllOrStrong): (dispatch: any) => void {
    return async dispatch => {
        try{
            dispatch(setLoadingRepeatableAction(true));
            const repeatables: Repeatable[] = await service.getTicketsRepeatableNumbersOfRangeDate(fromDate, toDate, allOrStrong);
            dispatch({ type: SET_REPEATABLES, payload: repeatables });
            dispatch(setReturnCodeAction(ReturnTypes.OK));
            dispatch(setLoadingRepeatableAction(false));
        } catch (e) {
            dispatch(setReturnCodeAction(ReturnTypes.NETWORK_ERROR));
            dispatch(setLoadingRepeatableAction(false));
        }
    }
};

export function setRepeatableFromDateAction(fromDate: Date): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_REPEATABLE_FROM_DATE, payload: fromDate });
    }
};

export function setRepeatableToDateAction(toDate: Date): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_REPEATABLE_TO_DATE, payload: toDate });
    }
};

export function setRepeatableAllOrStrongAction(allOrStrong: string): (dispatch: any) => void {
    return dispatch => {
        dispatch({ type: SET_REPEATABLE_ALLORSTRONG, payload: allOrStrong });
    }
};