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
    const { user } = this.props;
    const { post } = this.state;
    this.props.sendMessage({
        post:  post,
        likes: 0,
        date: Date.now(),
        userId: user.uid,
        userName: user.displayName,
        userPhoto: user.photoURL
    })
    this.setState({
        post:''
    })
}



render() {
    const { user } = this.props;
    return (
        user?
        <div className="Input">
            <input type="text" onChange={this.setInputVal} value={this.state.post} />
            <button onClick={this.sendMsg}>Send</button>
        </div>: null
)}


}
const mapStateToProps = state =>({
    user: state.user
})
  
const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Input);


// import React, { Component } from 'react';

// // Actions
// import {sendMessage} from '../../actions/posts';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

// // Styles
// import './Input.css'

//  class Input extends Component {

// state = { 
//     post:'',
// }



// setInputVal=(event)=>{
//     this.setState({
//         post:event.target.value
//     })
// }

// sendMsg=()=>{
//     this.props.sendMessage({
//         post:this.state.post,
//         likes:0,
//         date:Date.now()
//     })
//     this.setState({
//         post:''
//     })
// }



// render() {
//     const { user, post } = this.props;
//     return (
//         user?
//         <div className="Input">
//             <input type="text" onChange={this.setInputVal} value={post} />
//             <button onClick={this.sendMsg}>Send</button>
//         </div>: null
// )}

// // return (
// //     <div className="Input">
// //         <input type="text" onChange={this.setInputVal} value={this.state.post} />
// //         <button onClick={this.sendMsg}>Send</button>
// //     </div>
// //     )
// // }


// }
// const mapStateToProps = state =>({
//     user: state.user
// })


// const mapDispatchToProps = dispatch => bindActionCreators({
//     sendMessage
// },dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Input);
