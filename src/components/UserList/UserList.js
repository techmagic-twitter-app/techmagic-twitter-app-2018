import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import User from './User/User';
import './UserList.css';

// Actions
import {fetchUsers} from '../../actions/users';
import {fetchUid} from '../../actions/uid';

class UserList extends Component {

    state = {
        usersArr: []
    };

    componentDidMount () {
        this.props.fetchUsers()
    }

    uidIntoState = (uid) => {
        //send uid into action
        console.log('click');
        this.props.fetchUid(uid);
    }

    renderUsers= () =>{
        const usersFromDB = Object.values(this.props.users);
        return usersFromDB.map((user,index)=><User key={index} name={user.username} photo={user.photo} uid={user.uid} uidIntoState={this.uidIntoState} /> )
      }

    render () {
        return (
            <Fragment>{this.props.user?
                <div className="UserList-user">
                <img src={this.props.user.photoURL} alt="" width="100"/>
                <p>{this.props.user.displayName}</p>
                </div>: 
                null
            }
                <ul className="UserList-list">{this.renderUsers()}</ul>
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