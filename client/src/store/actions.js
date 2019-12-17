import * as actionType from "./actionTypes";

export const loginOkay = () => ({ type: actionType.LOGIN_OKAY });
export const loginFail = () => ({ type: actionType.LOGIN_FAIL });
export const setRightPoint = () => ({ type: actionType.SET_RIGHT_POINT });
export const setWrongPoint = () => ({ type: actionType.SET_WRONG_POINT });
