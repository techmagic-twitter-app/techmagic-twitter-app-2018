import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
// Date lib
import moment from 'moment';
// Actions
import {removePost} from '../../../actions/posts'
// Styles
import './Post.css';


class Post extends Component {

  // Format date
  dateForma = (data )=> moment(data).format('LLL');


  // Remove post
  removePostHandler = removePostId => {
    // console.log(removePostId)
    const {removePost} = this.props
    removePost(removePostId)
  };


  render() {
    const { currentPost, user } = this.props;
      return (
        <li className="Post">
          <div className="Post-user">
            <img src={currentPost.userPhoto} alt="userPhoto" width="80"/>
            <h2>{currentPost.userName}</h2>
          </div>
          <h3>{currentPost.post}</h3>
          <p>{this.dateForma(currentPost.date)}</p>
          <p className="Post-like"><i className="fas fa-heart"></i>{currentPost.likes}</p>
          {user?
            <button className="Post-delete" onClick={()=>this.removePostHandler(currentPost.postId)} >╳</button>
            :null}
        </li>
    )
  } 
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  removePost
},dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Post);

