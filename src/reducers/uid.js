import { FETCH_UID } from '../actions/types';

export default (state="", action) => {
    switch (action.type) {
        case FETCH_UID:
            return action.payload || "";
        default:
            return state;
    }
}