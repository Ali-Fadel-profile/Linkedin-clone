import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "@redux/reducers/userReducer";
import { thunk } from "redux-thunk";
import { articalsReducer } from "../reducers/articalsReducer";

const rootReducers = combineReducers({
    userState: userReducer,
    articalesState: articalsReducer,
})
export const store = createStore(rootReducers, applyMiddleware(thunk));