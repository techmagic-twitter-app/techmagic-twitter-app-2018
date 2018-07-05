import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersRef } from '../../config/firebase';
import User from './User/User';
import './UserList.css';

class UserList extends Component {

    state = {
        usersArr: []
    };

    componentDidMount () {
        usersRef.once('value').then(snapshot =>{
            this.setState({usersArr: Object.values(snapshot.val())});
        });
    }

    renderUsers = () => {
        console.log(this.props.user);
        return this.state.usersArr.map((user, index) => <User key={index} name={user.username} photo={user.photo} /> )
    }

    render () {
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
    user: state.user
});

export default connect(mapStateToProps)(UserList);