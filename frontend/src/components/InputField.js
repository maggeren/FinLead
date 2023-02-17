import React from "react";
import { useState } from "react";

function InputField(props){

    const manageInput = () => {const[inputType, setInputType] = useState([]);

    }
    return(
        <div>
        <input type={props.text} placeholder={props.placeholder}/>
        <br></br>
        </div>
    )

    

}

export default InputField;