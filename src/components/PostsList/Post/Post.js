import React, { Component } from 'react';
import moment from 'moment';

import './Post.css';

class Post extends Component {

  dateForma = (data )=> moment(data).format('LLL');

  render() {
 
    const { currentPost } = this.props
      return (
      <li className="Post">
        <div className="Post-user">
          <img src={currentPost.userPhoto} alt="userPhoto" width="80"/>
          <h2>{currentPost.userName}</h2>
        </div>
        <h3>{currentPost.post}</h3>
        <p>{this.dateForma(currentPost.date)}</p>
        <p className="Post-like"><i className="fas fa-heart"></i>{currentPost.likes}</p>
      </li>
    )
  }
    
}
export default Post;

