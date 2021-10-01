import ReturnTypes from "../../models/ReturnTypes";

export const SET_RETURN_CODE = "set-return-code";

export function returnCodeAction(code: ReturnTypes): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_RETURN_CODE, payload: code });
    };
}
