import { FETCH_POSTS } from '../actions/types';

const initialState = {
  usersPosts:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
    // get post by object values
      // console.log(action.payload)
      const posts = Object.values(action.payload)
      // get posts uid
      // console.log(Object.keys(action.payload))
      // const postUID = Object.keys(action.payload)
      return {
        ...state,
        usersPosts:[...posts],
      }
    default:
      return state;
  }
};