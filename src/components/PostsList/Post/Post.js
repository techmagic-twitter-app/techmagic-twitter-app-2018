import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
// Date lib
import moment from 'moment';
// Actions
import {removePost, addLike} from '../../../actions/posts'
// Styles
import './Post.css';


class Post extends Component {

  // Format date
  dateFormat = (data )=> moment(data).format('LLL');


  // Remove post
  removePostHandler = removePostId => {
    // console.log(removePostId)
    const {removePost} = this.props
    removePost(removePostId)
  };

  addLikeHandler = (id, likes) => {
    const {addLike} = this.props;
    addLike(id, likes);
  }

  render() {
    const { currentPost, user } = this.props;
      return (
        <li className="Post">
          <div className="Post-user">
            <img
            src={currentPost.userPhoto}
            alt="userPhoto" width="80"/>
            <h2>{currentPost.userName}</h2>
          </div>
          <h3>{currentPost.post}</h3>
          <p>{this.dateFormat(currentPost.date)}</p>
          <p
          className="Post-like"
          onClick={()=>this.addLikeHandler(currentPost.postId, currentPost.likes)}>
            <i className="fas fa-heart"></i>
            {currentPost.likes}
          </p>
          {user && user.uid === currentPost.userId ?
            <button
              className="Post-delete"
              onClick={()=>this.removePostHandler(currentPost.postId)}>╳</button>
            :null}
        </li>
    )
  } 
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  removePost,
  addLike
},dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Post);

