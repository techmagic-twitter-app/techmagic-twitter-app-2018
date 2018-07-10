import { FETCH_UID } from './types';

export const fetchUid = (uid) => dispatch => {
    dispatch({
        type: FETCH_UID,
        payload: uid
    });
}