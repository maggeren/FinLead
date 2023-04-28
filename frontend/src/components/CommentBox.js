import React from "react";
import "../styles/user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
  } from "@fortawesome/free-solid-svg-icons";

export const CommentBox =(props)=>{
  return (
    <div className="comment-box">
     
    <div className="d-flex flex-row flex-container">
    <div className="p-2 inline-block user-pic-container">
            <img className="user-pic" src="/userPicture.png"/>
        </div>
        <a style={{paddingLeft:"5px"}} href="#">{props.userName}</a>
        <p className="post-content">{props.content}</p>     
        <span className="post-date">{props.date}</span>
        </div>
   
    </div>
  )
}