import { auth, provider } from "@/firebase"
import * as actions from "./actions"
import { signInWithPopup } from "firebase/auth"

export function signInApi() {
    return (dispatch) => {
        signInWithPopup(auth, provider).then((resolved) => {
            dispatch(actions.setUserSuccess(resolved.user))
        }).catch((error) => {
            dispatch(actions.setUserFailure(error.message))
        })
    }
}

export function getUserAuth() {
    // to changeed user account which stored in redux 
    return (dispatch) => {
        dispatch(actions.loadingUser());
        auth.onAuthStateChanged(async (user) => {
            dispatch(actions.setUserSuccess(user))
        })
    }
}

export const signOut = () => {
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch(actions.setUserSuccess(null))
        }).catch((error) => {
            dispatch(actions.setUserFailure(error.message))
        })
    }
}