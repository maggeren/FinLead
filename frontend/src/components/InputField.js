import React from "react";
import { useState } from "react";
import InlineImage from "./InlineImage";

function InputField(props){

    const manageInput = () => {const[inputType, setInputType] = useState(props.type);

    }

    const handleClick =(e)=>{
        inputType === "password" ? setInputType("text"): setInputType("password")
    }

    return(
        <div>
        <input type={props.type} placeholder={props.placeholder}/>
        {props.type === "password" &&(
            <InlineImage class = "eye-closed" name="eye" clickEvent = {handleClick}/>
            )}
        <br></br>
       
        </div>
        
    )

    

}

export default InputField;