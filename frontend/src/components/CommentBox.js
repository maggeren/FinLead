import React, {Fragment, useState} from "react";
import { CommentField } from "./CommentField";
import "../styles/user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
  } from "@fortawesome/free-solid-svg-icons";

export const CommentBox =(props)=>{

  const [content, setContent] = useState(props.content);
  
  const id = props.id;
  const [isEditField, setEditField] = useState(false);

  const[likes, setLikes] = useState(props.likes);

  const[replyActive, setReply] = useState(false); 

  const handleUpdate = async(event)=>{
    event.preventDefault();
    console.log(content);
    setEditField(false);
    let response = null;
    let objectToPass ={id: id, content: content}
    response = await fetch(`http://localhost:4000/api/updateComment/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectToPass),
       })
       if(response.ok){
        console.log("Det gik godt!");
       }
       else{
        console.log("Response kom galt af sted!");
       }
  }

  const handleDelete = async(event)=>{
    event.preventDefault();
    let response = null;
    console.log("For denne her er id " + id);
    let objectToPass ={id: id}
    response = await fetch(`http://localhost:4000/api/deleteComment/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectToPass),
    })
    console.log(response);
    if(response.ok){
      console.log("Det lykkedes");
    }
    else{
      console.log("Nej det gjorde ej!");
    }

  }

  const incrementLike= (event)=>{
     setLikes(likes +1);
     console.log(likes);
  }

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    console.log(value);
    setContent(value);

  };

  const reply = async(event) => {
     event.preventDefault();
     let response = null;
     const content = event.target[0].value;
     const commentObject ={
      content: content,
      user: "kage",
      tickerRef: props.ticker,
      parent: id
    };
    console.log(commentObject.parent);
    response = await fetch(`http://localhost:4000/api/postComment/${props.ticker}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentObject),
       })
       if(response.ok){
        const responseData = await response.json();
        console.log(responseData);
       }
       console.log("Så er vi færdige!");

  }

  const openReply = ()=>{
    setReply(!replyActive)
  }

  return (
    <Fragment>
    <div className="comment-box">     
    
    <div className="user-pic-container">
            <img className="user-pic" src="/userPicture.png"/>
            
        </div>
        <div className="post-content">
        <p hidden name="id">{props.id}</p>
        <a href="#">{props.userName}</a> 
        {isEditField ? (
          <form onSubmit={handleUpdate}>
           <textarea onChange={handleChange}>{content}</textarea>
           <button type="submit">Save</button>
           </form>
        ): (<p style={{paddingTop: "1%"}}>{content}</p>        
        )}
        </div>
        <div className="bottom-row">
        {/* <span className="bottom-item">👍</span>     */}
        <span className=" bottom-item post-like" onClick={incrementLike}>{likes} </span>
        <span className="bottom-item" onClick={openReply}>Reply</span> 
        <span className="bottom-item post-date">{props.date}</span>
        </div>
        <hr></hr>
        <div className="comment-options">        
        <button onClick={()=>setEditField(true)}>Edit</button> 
        <form onSubmit={handleDelete}>
        <button type="submit"style={{marginLeft:"2%"}}>Delete</button>
        </form>
        </div>
    </div>
    {replyActive && (
      <div className="reply-field">
      <form onSubmit={reply}>
        <textarea>
            
        </textarea>
        <button>Post reply</button>
        </form>
    </div>
    )}
    
    </Fragment>
  )
}