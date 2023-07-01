import React, { useState } from "react";

export default function TextForm(props) {
const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setResult(newText);
    props.showAlert("Coverted to Uppercase","success");
};

const handleLowerClick = () => {
      let newText = text.toLowerCase();
      setResult(newText);
      props.showAlert("Coverted to Lowercase","success");
  };

const handleCopy = () => {
    // let text = document.getElementById("myResult");
    // text.select();
    navigator.clipboard.writeText(result);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard","success");
   };

const clearClick = () => {
  setText("");
  setResult("");
  props.showAlert("Text cleared","success");
  };

const handleOnChange = (event) => {
setText(event.target.value);
};

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setResult(newText.join(" "))
  props.showAlert("Extra space removed","success");
}

const [text, setText] = useState("");
const [result, setResult] = useState("")

return (
<div style={{color: props.mode === 'dark'?'white':'black'}}>
  <div className="d-flex" style={{width: '100%'}}>
    <div style={{width: '50%'}}>
      <h1 className="my-2">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#c5c5c5':'white'}} id="myBox" cols="30" rows="10">
        </textarea>
      </div>
    </div>
    <div style={{width: '50%'}}>
      <h1 className="my-2 mx-2">Result Preview</h1>
      <div className="mb-3 mx-2">
        <textarea className="form-control" readOnly value={result.length > 0?result:'Nothing to Preview!'}  style={{backgroundColor: props.mode === 'dark'?'#c5c5c5':'white'}} id="myResult" cols="10" rows="10">
        </textarea>
      </div>
    </div>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Result</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearClick}>Clear All</button>

  <div className="container">
    <h2>Results</h2>
    <p>Total {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
    <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    {/* <h2>Preview</h2>
    <p>{text.length > 0?text:'Nothing to Preview!'}</p> */}
  </div>
</div>
);
}