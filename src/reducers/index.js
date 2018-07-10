import { combineReducers } from 'redux';
import userReducer from './user';
import postReducers from './posts';
import usersReducer from './users';
import uidReducer from './uid';



export default combineReducers({
    user:userReducer,
    posts:postReducers,
    users:usersReducer,
    uid:uidReducer
});
