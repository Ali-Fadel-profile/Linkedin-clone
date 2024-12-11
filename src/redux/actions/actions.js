import * as actionTypes from "./actionTypes";

export const loadingUser = () => {
    return {
        type: actionTypes.LOADING_USER,
    }
}
export const setUserSuccess = (user) => {
    return {
        type: actionTypes.SET_USER_SUCCESS,
        payload: user,
    }
}
export const setUserFailure = (error) => {
    return {
        type: actionTypes.SET_USER_FAILURE,
        payload: error,
    }
}
