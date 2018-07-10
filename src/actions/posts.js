import { postsRef } from '../config/firebase';
import { FETCH_POSTS } from './types'

export const sendMessage = (newPost)=> async dispatch =>{
    postsRef.push().set(newPost);
}


export const fetchPost = () => async dispatch => {
    postsRef.on("value", snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };


  export const removePost = (postId) => async dispatch => {
    postsRef
      .child(postId)
      .remove();
  };

  export const addLike = (id, likes) => async dispatch => {
    let addedLikes = likes+1;
    postsRef
      .child(id)
      .update({likes: addedLikes});
  }
