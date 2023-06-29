import React, { useState } from "react";

export default function TextForm(props) {
const handleUpClick = () => {
// console.log("Uppercase was clicked");
let newText = text.toUpperCase();
setText(newText);
};

const handleLowerClick = () => {
  let newText = text.toLowerCase();
  setText(newText);
  };

const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    };

  const clearClick = () => {
    setText("");
    };

const handleOnChange = (event) => {
setText(event.target.value);
};

const [text, setText] = useState("");

return (
<div style={{color: props.mode === 'dark'?'white':'black'}}>
  <h1 >{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#c5c5c5':'white'}} id="myBox" cols="30" rows="10">
    </textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={clearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

  <div className="container">
    <h2>Results</h2>
    <p>Total {text.split(" ").length} words and {text.length} character</p>
    <p>{0.08 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length > 0?text:'Enter something in the above textbox to preview it here'}</p>
  </div>
</div>
);
}