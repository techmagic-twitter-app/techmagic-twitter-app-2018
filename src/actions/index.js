import {  authRef, provider } from "../config/firebase";

export const signIn = () => dispatch =>{
  authRef.signInWithPopup(provider)
}

export const signOut = () => dispatch =>{
  authRef.signOut();
}