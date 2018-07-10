import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {sendMessage} from '../../actions/posts';
import {fetchUid} from '../../actions/uid';
// Styles
import './Input.css'

 class Input extends Component {

state = { 
    post:'',
}


setInputVal=(event)=>{
        this.setState({
            post:event.target.value
        })
}


sendMsg=(event)=>{
    event.preventDefault();
    const { user } = this.props;
    const { post } = this.state;
    if(post) {
        this.props.sendMessage({
            post:  post,
            likes: 0,
            date: Date.now(),
            userId: user.uid,
            userName: user.displayName,
            userPhoto: user.photoURL
        });
        // clearing input
        this.setState({
            post:''
        })
    } else {
        alert('put smth in!');
    }
}



render() {
    const { 
        user , 
        selectedUser
    } = this.props;
    return (
        user && selectedUser===user.uid ?
        <form
            className="Input"
            onSubmit={this.sendMsg}>
            <input type="text"
            onChange={this.setInputVal}
            value={this.state.post} />
            <button>Send</button>
        </form> : null
    );
}


}
const mapStateToProps = state =>({
    user: state.user,
    selectedUser: state.uid
});
  

const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage,
    fetchUid
},dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Input);
