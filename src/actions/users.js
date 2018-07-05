import { usersRef } from '../config/firebase';
import { FETCH_USERS } from './types';


export const fetchUsers = () => async dispatch => {
  usersRef.on("value", snapshot => {
    dispatch({
      type: FETCH_USERS,
      payload: snapshot.val()
    });
  });
};


