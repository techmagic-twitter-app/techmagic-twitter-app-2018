import React from 'react';

export default ({currentPost}) => {
  return (
    <li>
      <h3>Post:{currentPost.post}</h3>
      <p>Date:{currentPost.date}</p>
      <em>likes:{currentPost.likes}</em>
      <hr/>
    </li>
  )
}
