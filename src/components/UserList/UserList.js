import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import User from './User/User';
import './UserList.css';

// Actions
import {fetchUsers} from '../../actions/users';
import {fetchUid} from '../../actions/uid';

class UserList extends Component {

    componentDidMount () {
        this.props.fetchUsers()
    }

    uidIntoState = (uid) => {
        this.props.fetchUid(uid);
    }

    renderUsers= () =>{
        const {users, user} = this.props;
        const usersFromDB = Object.values(users);
        return usersFromDB.map(userFromDB=>{
            if (userFromDB.uid === user.uid) {
                //do not render logged in user
                return null;
            } else {
            return <User
                    key={userFromDB.uid}
                    user={userFromDB}
                    uidIntoState={this.uidIntoState}/>}
            })
      }

    render () {
        const {user, users} = this.props;
        return (
            <Fragment>
                {user?
                <div
                    className="UserList-user"
                    onClick={()=>this.uidIntoState(user.uid)}>
                    <img src={user.photoURL}
                    alt={user.displayName}
                    width="100"/>
                    <p>
                        {user.displayName}
                    </p>
                </div>
                :
                null}
                {Object.values(users).length?
                <ul className="UserList-list">
                    {this.renderUsers()}
                </ul>:
                null}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    users: state.users
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers,
    fetchUid
},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
