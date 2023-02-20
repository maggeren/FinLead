import React from "react";
import { useState } from "react";
import InlineImage from "./InlineImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const closedEye = <FontAwesomeIcon icon={faEyeSlash}/>;

function InputField(props){

    const[values, setValues] = useState({
        inputType: props.type,
        image: closedEye
    });
    
    function handleClick(){
        values.inputType ==="password" ?
            setValues({
                inputType: "text",
                image: eye,
            })
        : setValues({
            inputType: "password",
            image: closedEye,
        })
        
    }

    return(
        <div>
        <input type={values.inputType} placeholder={props.placeholder}/>
        {props.type === "password" &&(
            <InlineImage class = "eye" name="eye" clickEvent={handleClick} image={values.image}/>
            )}
        <br></br>
       
        </div>
        
    )

    

}

export default InputField;