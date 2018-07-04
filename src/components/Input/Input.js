import React, { Component } from 'react';

// Actions
import {sendMessage} from '../../actions/posts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
    this.props.sendMessage({
        post:this.state.post,
        likes:0,
        date:Date.now()
    })
    this.setState({
        post:''
    })
}



render() {
return (
    <div className="Input">
        <input type="text" onChange={this.setInputVal} value={this.state.post} />
        <button onClick={this.sendMsg}>Send</button>
    </div>
    )
}


}

const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage
},dispatch)

export default connect(null,mapDispatchToProps)(Input);