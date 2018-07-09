import { authRef, usersRef, provider } from '../config/firebase';
import { FETCH_USER } from './types';

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
    usersRef.orderByChild("uid")
    .equalTo(user.uid)
    .once("value")
    .then(snapshot => {
      if (!snapshot.val()) {
        usersRef.push().set({
          username: user.displayName,
          uid: user.uid,
          photo: user.photoURL
        });
      }
  });
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    }
    else{
      dispatch({
        type: FETCH_USER,
        payload: ""
      }); 
    }
  });
};




export const signIn = () => dispatch =>{
  authRef.signInWithPopup(provider)
}

export const signOut = () => dispatch =>{
  authRef.signOut();
}
