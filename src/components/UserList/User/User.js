import React, {Component} from 'react';
import './User.css';

class User extends Component {

    render(){
        const { user, uidIntoState } = this.props;
        return (
            <li className="user-elem"
                onClick={()=>uidIntoState(user.uid)}>
                    <img
                    src={user.photo}
                    alt="userPhoto"
                    width="50"/>
                    <p>{user.username}</p>
            </li>
        )
    }

}

export default User;