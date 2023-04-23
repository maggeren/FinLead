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

    const handleSumbit = async(event) =>{
       event.preventDefault();
       
    }

    return (
        <>
            <div style={{backgroundColor:"lightblue"}}>
             <button onClick={handleClick}>Comment</button>
             {isExpanded &&(
                   <div>
                    <form>
                    <textarea name="content" placeholder="write your comment here..."></textarea>
                    <button type="submit"></button>
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