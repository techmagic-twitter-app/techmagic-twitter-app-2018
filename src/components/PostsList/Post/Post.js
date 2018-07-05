import React from 'react';

// styles
import './Post.css'

export default ({currentPost}) => {
  return (
    <li className="Post">
      <h3>{currentPost.post}</h3>
      <p>date:{currentPost.date}</p>
      <p><i className="fas fa-heart"></i>{currentPost.likes}</p>
    </li>
  )
}
