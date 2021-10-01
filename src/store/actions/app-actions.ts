export const SET_SIDEBAR = "set-sidebar";

export function setSidebarAction(isSidebar: boolean): (dispatch: any) => void {
    return (dispatch) => {
        dispatch({ type: SET_SIDEBAR, payload: isSidebar });
    };
}
