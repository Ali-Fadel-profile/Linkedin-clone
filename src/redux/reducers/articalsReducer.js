import * as actions from "@redux/actions/actionTypes"

const intialState = {
    loading: false,
    articles: [],
}

export const articalsReducer = (state = intialState, action) => {
    switch (action.type) {
        case actions.LOADING_ARTICALS:
            return {
                ...state,
                loading: true,
            }
        case actions.GET_ARTICLES:
            return {
                loading: false,
                articles: action.payload,
            }
        default:
            return state;
    }
}
