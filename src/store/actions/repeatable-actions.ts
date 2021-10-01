import service from "../../config/lotto-data-config";
import { AllOrStrong } from "../../models/AllOrStrong";
import { Repeatable } from "../../models/Repeatable";
import ReturnTypes from "../../models/ReturnTypes";
import { convertDateToString } from "../../utils/converter";
import { setLoadingRepeatableAction } from "./loading-actions";
import { returnCodeAction } from "./return-code-actions";

export const SET_REPEATABLES_DATA = "set-repeatables-data";
export const SET_REPEATABLES = "set-repeatables";
export const SET_REPEATABLES_RECEIVED = "set-repeatables-received";
export const SET_REPEATABLES_MESSAGE = "set-repeatables-message";
export const SET_REPEATABLE_NUMBER = "set-repeatable-number";
export const SET_REPEATABLE_COUNT = "set-repeatable-count";
export const SET_REPEATABLE_FROM_DATE = "set-repeatable-from-date";
export const SET_REPEATABLE_TO_DATE = "set-repeatable-to-date";
export const SET_REPEATABLE_ALLORSTRONG = "set-repeatable-allorstrong";

export function setRepeatablesAction(repeatables: ReturnTypes[]): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_REPEATABLES, payload: repeatables });
    };
}

export function getRepeatablesAction(
    from: Date,
    to: Date,
    allOrStrong: AllOrStrong
): (dispatch: any) => void {
    return async (dispatch) => {
        try {
            dispatch(setLoadingRepeatableAction(true));
            dispatch({
                type: SET_REPEATABLES_DATA,
                payload: { message: "", isReceived: false, repeatables: [] },
            });
            const fromDate: string = convertDateToString(from);
            const toDate: string = convertDateToString(to);
            const repeatables: Repeatable[] = await service.getTicketsRepeatableNumbersOfRangeDate(
                fromDate,
                toDate,
                allOrStrong
            );
            dispatch({
                type: SET_REPEATABLES_DATA,
                payload: {
                    message:
                        repeatables.length === 0
                            ? `По запросу: ${allOrStrong} с ${convertDateToString(
                                  from
                              )} до ${convertDateToString(to)} ничего не найдено!`
                            : "Успешно получено!",
                    isReceived: true,
                    data: repeatables,
                },
            });
            dispatch(returnCodeAction(ReturnTypes.OK));
            dispatch(setLoadingRepeatableAction(false));
        } catch (e) {
            dispatch({
                type: SET_REPEATABLES_DATA,
                payload: {
                    message: "Произошла ошибка",
                    isReceived: false,
                    data: [],
                },
            });
            dispatch(returnCodeAction(ReturnTypes.NETWORK_ERROR));
            dispatch(setLoadingRepeatableAction(false));
        }
    };
}

export function setRepeatableFromDateAction(fromDate: Date): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_REPEATABLE_FROM_DATE, payload: fromDate });
    };
}

export function setRepeatableToDateAction(toDate: Date): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_REPEATABLE_TO_DATE, payload: toDate });
    };
}

export function setRepeatableAllOrStrongAction(allOrStrong: string): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_REPEATABLE_ALLORSTRONG, payload: allOrStrong });
    };
}
