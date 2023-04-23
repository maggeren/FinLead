import React, {useContext, useState} from "react";
import AuthContext from "./AuthContext";
import { ModalPopup } from "./ModalPopup";

export const CommentField=() =>{
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const [isExpanded, setExpanded] = useState(false);
    const [modalVisible, setModal] = useState(false);

    function handleClick(){
        console.log("isLoggedIn: ", isLoggedIn);
        if(isLoggedIn){
       setExpanded(true);
       }
       else{
        setModal(true);
       }
    }

    return (
        <>
            <div style={{backgroundColor:"lightblue"}}>
             <button onClick={handleClick}>Comment</button>
             {isExpanded &&(
                    <textarea placeholder="write your comment here..."></textarea>
                    )
                }
            {modalVisible && (
                <ModalPopup></ModalPopup>
            )}
            </div>
        </>
    )
}