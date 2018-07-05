import { authRef, usersRef, provider } from '../config/firebase';
import { FETCH_USER } from './types';

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      var sameUsers = 0;
      let currentUserUid = user.uid;
      usersRef.once('value').then(snapshot => {
        Object.values(snapshot.val())
          .forEach((item, index, arr) => {
          if(currentUserUid === item.uid) {
            sameUsers++;
          } else if (sameUsers===0 && index===arr.length-1){
            //check if such user exists
            //and add new user into db
            usersRef.push().set({
              username: user.displayName,
              uid: user.uid,
              photo: user.photoURL
            });
          }
        })
      });
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: ''
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