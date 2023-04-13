import React, {useContext} from "react";
import AuthContext from "./AuthContext";

export const CommentField=() =>{
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    return (
        <>
            <div style={{backgroundColor:"lightblue"}}>
                {isLoggedIn ? (
                    <textarea placeholder="write your comment here..."></textarea>
                ) : <p>You must be logged in to write a comment</p>}
            </div>
        </>
    )
}