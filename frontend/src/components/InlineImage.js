import React, { useState } from "react";

function InlineImage(props){

     const customStyle ={
        marginLeft: "-22px",
        cursor: "pointer"
     };

     const questionStyle = {
        marginRight: "30px",
        cursor: "pointer"
     }

    return <i className={props.class} id={props.id} name={props.name} onClick={props.clickEvent} style={customStyle}></i>
}

export default InlineImage;