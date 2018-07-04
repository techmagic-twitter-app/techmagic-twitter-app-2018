import { authRef, provider } from '../config/firebase';
import { FETCH_USER } from './types';

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
      if (user) {
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