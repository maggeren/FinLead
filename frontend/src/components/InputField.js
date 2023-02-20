import React from "react";
import { useState } from "react";
import InlineImage from "./InlineImage";

function InputField({ type, value, onChange }) {
  const initialType = type;
  const [inputType, setInputType] = useState(type);

  const handleClick = (e) => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  return (
    <div>
      <input
        value={value}
        type={inputType}
        placeholder={initialType}
        name={initialType}
        onChange={onChange}
      />
      {inputType === "password" && (
        <InlineImage class="eye-closed" name="eye" clickEvent={handleClick} />
      )}
      <br></br>
    </div>
  );
}

export default InputField;
