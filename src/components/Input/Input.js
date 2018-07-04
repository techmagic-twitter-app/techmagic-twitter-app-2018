// import React, { Component } from 'react'

// export default class Input extends Component {

//     state ={ 
//         userInput:'',
//         posts:[]
//     }

//     setInput =(event)=>{
//         event.preventDefault();
//         this.setState({
//             userInput:event.target.value
//         })
//     }

//     sendMsg=()=>{
//         let newPosts = [...this.state.posts];
//       // Adding value to state
//       newPosts.push(this.userInput);
//       this.setState({
//         posts:newPosts,
//         userInput:''
//       })
//     }

//   render() {
//     return (
//       <div>
//             <input type="text"
//             onChange={this.setInput}
//             value={this.state.userInput}/>
//             <button onClick={this.sendMsg}>Send</button>
//         <div>{this.state.posts[0]}</div>
//       </div>
//     )
//   }
// }
