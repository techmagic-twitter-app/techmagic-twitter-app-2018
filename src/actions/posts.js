import { postsRef } from '../config/firebase';
import { FETCH_POSTS } from './types'

export const sendMessage = (newPost)=> async dispatch =>{
    postsRef.push().set(newPost)
}


export const fetchPost = () => async dispatch => {
    postsRef.on("value", snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };