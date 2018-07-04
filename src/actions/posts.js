import { postsRef } from '../config/firebase';

export const sendMessage = (newPost)=> async dispatch =>{
    postsRef.push().set(newPost)
}