import React, { Component } from 'react';
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
            <div>{this.props.user?
                <div className="my-block">
                <img src={this.props.user.photoURL} alt="" width="50"/>
                <p>{this.props.user.displayName}</p>
                </div>: 
                null
            }
                <ul>{this.renderUsers()}</ul>
            </div>
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