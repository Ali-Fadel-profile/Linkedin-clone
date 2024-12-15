import { auth, db, provider, } from "@/firebase"
import * as actions from "./actions"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore"

export function signInApi() {

    return (dispatch) => {
        signInWithPopup(auth, provider).then((resolved) => {
            dispatch(actions.setUserSuccess(resolved.user))
        }).catch((error) => {
            dispatch(actions.setUserFailure(error.message))
        })
    }
}

export function registerUser(email, password) {
    return async (dispatch) => {
        dispatch(actions.loadingUser());
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            dispatch(actions.setUserSuccess(user));
        } catch (error) {
            dispatch(actions.setUserFailure(error.message));
        }
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

export const postArticleApi = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(actions.loadingArticle());

            // Prepare the article data
            const articleData = {
                user: {
                    email: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timeStamp,
                    image: payload.user.photoURL,
                },
                comments: 0,
                video: payload.video || null,
                description: payload.description,
                shareImg: payload.image || null,
            };

            // Add the article to Firestore
            const collRef = collection(db, "articles");
            await addDoc(collRef, articleData);

        } catch (error) {
            alert("Failed to post the article: " + error.message);
        }
    };
};

export const getArticlesApi = () => {
    return (dispatch) => {
        dispatch(actions.loadingArticle())
        let payload;
        const collRef = collection(db, "articles");
        const orderRef = query(collRef, orderBy("user.date", "desc"));
        onSnapshot(orderRef, (snapshot) => {
            payload = snapshot.docs.map((doc) => doc.data())
            dispatch(actions.getArticle(payload))
        })
    }
}