import * as actions from "@redux/actions/actionTypes"
const intialState = {
    loading: false,
    user: null,
    error: "",
}

export const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case actions.LOADING_USER:
            return {
                ...state,
                loading: true,
            }
        case actions.SET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            }
        case actions.SET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}
