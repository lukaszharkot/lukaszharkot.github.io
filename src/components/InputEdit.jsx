import { useState } from "react";

export const InputEdit = ({ value, handleChange }) => {
    const [text, setText] = useState(value);

    return(
        <input 
            style={{
            width:'100%',
            textAlign:"center",
            height: '25px',
            borderRadius: '7px',
            fontFamily: 'monospace',
            color: 'black',
            marginBottom: '5px'}}
            value= {text}
            onChange = {(e) => setText(e.currentTarget.value)}
            onBlur = {(e) => handleChange(e)}
        />
    );
}