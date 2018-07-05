import React from 'react';
import './User.css';

export default ({name, photo}) => {
    return (
        <li className="user-elem">
                <img src={photo} alt="userPhoto" width="50" height="50"/>
                <p>{name}</p>
        </li>
    )
}