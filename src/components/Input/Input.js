import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import {sendMessage} from '../../actions/posts';
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


sendMsg=()=>{
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
    const { user } = this.props;
    return (
        user?
        <div className="Input">
            <input type="text" onChange={this.setInputVal} value={this.state.post} />
            <button onClick={this.sendMsg}>Send</button>
        </div> : null
    );
}


}
const mapStateToProps = state =>({
    user: state.user
});
  

const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage
},dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Input);
