import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "@redux/reducers/userReducer";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
    userState: userReducer,
})
export const store = createStore(rootReducers, applyMiddleware(thunk));