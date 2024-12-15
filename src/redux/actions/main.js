import { auth, db, provider, storage } from "@/firebase"
import * as actions from "./actions"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
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
            dispatch(actions.loadingArticle(true));

            let shareImg = "";
            if (payload.image) {
                // Upload the image
                const storageRef = ref(storage, `images/${payload.image.name}`);
                const uploadRef = uploadBytesResumable(storageRef, payload.image);

                await new Promise((resolve, reject) => {
                    uploadRef.on(
                        "state_changed",
                        (snapshot) => {
                            const progress = Math.round(
                                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                            );
                            console.log("Upload is " + progress + "% done");
                        },
                        (error) => reject(error),
                        () => {
                            getDownloadURL(uploadRef.snapshot.ref)
                                .then((url) => {
                                    shareImg = url;
                                    resolve();
                                })
                                .catch((error) => reject(error));
                        }
                    );
                });
            }

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
                shareImg: shareImg || null,
            };

            // Add the article to Firestore
            const collRef = collection(db, "articles");
            await addDoc(collRef, articleData);

            console.log("Article added successfully!");
        } catch (error) {
            console.error("Error adding article: ", error.message);
            alert("Failed to post the article: " + error.message);
        } finally {
            dispatch(actions.loadingArticle(false));
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