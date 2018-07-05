import { combineReducers } from 'redux';
import userReducer from './user';
import postReducer from './post';
import usersReducer from './users';



export default combineReducers({
    user:userReducer,
    post:postReducer,
    users:usersReducer
});
