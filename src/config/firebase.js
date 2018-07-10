import firebase from 'firebase';

import { FirebaseConfig } from './dev';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const postsRef = databaseRef.child('posts');
export const usersRef = databaseRef.child('users');
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();


