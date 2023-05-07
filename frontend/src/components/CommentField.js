import React, {useContext, useState} from "react";
import AuthContext from "./AuthContext";
import { ModalPopup } from "./ModalPopup";

export const CommentField=(props) =>{
  const { userState, setUserState } = useContext(AuthContext);
    const [isExpanded, setExpanded] = useState(false);
    const [modalVisible, setModal] = useState(false);
    const [comment, setComment] = useState("");
    console.log("min ticker er " + props.ticker);
    console.log("For min context er bruger " + userState.userReference);

    function handleClick(){
        if(userState.isLoggedIn){
       setExpanded(true);
       }
       else{
        setExpanded(false);
       }
    }
    const handleChange = (event) => {
        const value = event.target.value;
        console.log(value);
        setComment(value);
        console.log(comment);
      };

    const handleSubmit = async(event) =>{
       event.preventDefault();
       let response = null;
       const commentObject ={
         content: comment,
         user: userState.userReference,
         tickerRef: props.ticker,
       };
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
        // Trigger re-render of Stock component by updating comments state
        props.setComments((prevComments) => [...prevComments, responseData]);
       } else{
        console.log("Den gik sgu ikke");
       }
       setExpanded(false);
       setComment('');
    }

    return (
        <>
            <div style={{backgroundColor:"lightblue"}}>
             <button onClick={handleClick}>Comment</button>
             {isExpanded &&(
                   <div>
                    <form onSubmit={handleSubmit}>
                    <p hidden name="user">{userState.userReference}</p>
                    <textarea name="content" placeholder="write your comment here..." onChange={handleChange}></textarea>
                    <br></br>
                    <button type="submit">Post</button>
                    </form>
                    </div>
                    )
                }
            {modalVisible && (
                <ModalPopup></ModalPopup>
            )}
            </div>
        </>
    )
}