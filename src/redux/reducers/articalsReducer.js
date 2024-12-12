import * as actions from "@redux/actions/actionTypes"

const intialState = {
    loading: false,
    articals: [],
}

export const articalsReducer = (state = intialState, action) => {
    switch (action.type) {
        case actions.LOADING_ARTICALS:
            return {
                ...state,
                loading: action.payload,
            }
        case actions.GET_ARTICLES:
            return {
                loading: false,
                user: action.payload,
            }
        default:
            return state;
    }
}
