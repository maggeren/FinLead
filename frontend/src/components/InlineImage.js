import React, { useState } from "react";


function InlineImage(props){

     const customStyle ={
        marginLeft: "146px",
        marginBottom: "-20px",
        cursor: "pointer"
     };
     
    return <span class="ab"><i className={props.class} id={props.id} name={props.name} onClick ={props.clickEvent} style={customStyle}>{props.image}</i></span>
}

export default InlineImage;