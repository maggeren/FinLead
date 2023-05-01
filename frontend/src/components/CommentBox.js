import React, {useState} from "react";
import "../styles/user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
  } from "@fortawesome/free-solid-svg-icons";

export const CommentBox =(props)=>{

  const [content, setContent] = useState(props.content);
  
  const [isEditField, setEditField] = useState(false);

  const[likes, setLikes] = useState(props.likes);

  const handleUpdate = async(event)=>{
    event.preventDefault();
    console.log(content);
    setEditField(false);
    let response = null;
    response = await fetch(`http://localhost:4000/api/updateComment/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
       })
       if(response.ok){
        console.log("Det gik godt!");
       }
       else{
        console.log("Response kom galt af sted!");
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

  return (
    <div className="comment-box">     
    <div className="d-flex flex-row flex-container">
    <div className="p-2 inline-block user-pic-container">
            <img className="user-pic" src="/userPicture.png"/>
        </div>
        <a style={{paddingLeft:"5px"}} href="#">{props.userName}</a>
        {isEditField ? (
          <form onSubmit={handleUpdate}>
           <textarea onChange={handleChange}>{content}</textarea>
           <button type="submit">Save</button>
           </form>
        ): (<p className="post-content">{content}</p>        
        )}     
        <span className="post-date">{props.date}</span>

        </div>
        <button onClick={()=>setEditField(true)}>Edit</button>  
        <span className="post-like" onClick={incrementLike}>{likes} </span>
        <span>👍</span>
    </div>
  )
}