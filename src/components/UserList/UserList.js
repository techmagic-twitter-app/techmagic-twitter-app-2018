import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import User from './User/User';
import './UserList.css';

// Actions
import {fetchUsers} from '../../actions/users';

class UserList extends Component {

    state = {
        usersArr: []
    };

    componentDidMount () {
        this.props.fetchUsers()
    }

    // renderUsers = () => {
    //     console.log(this.props.users);
    //     return this.props.users.map((user, index) => <User key={index} name={user.username} photo={user.photo} /> )
    // }

    renderUsers= () =>{
        const usersFromDB = Object.values(this.props.users);
        return usersFromDB.map((user,index)=><User key={index} name={user.username} photo={user.photo} /> )
      }

    render () {
        console.log(this.props.users);
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
    fetchUsers
},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(UserList);