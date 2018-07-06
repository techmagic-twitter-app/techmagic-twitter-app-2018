import { combineReducers } from 'redux';
import userReducer from './user';
import postReducers from './posts';
import usersReducer from './users';



export default combineReducers({
    user:userReducer,
    posts:postReducers,
    users:usersReducer
});
