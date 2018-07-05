import React, { Component } from 'react';
import moment from 'moment';

import './Post.css';

class Post extends Component {

  dateForma = (data )=> moment(data).format("MMM Do YY");

  render() {
    const { currentPost } = this.props
      return (
      <li className="Post">
        <h3>{currentPost.post}</h3>
        <p>date:{this.dateForma(currentPost.date)}</p>
        <p><i className="fas fa-heart"></i>{currentPost.likes}</p>
      </li>
    )
  }
}

export default Post
