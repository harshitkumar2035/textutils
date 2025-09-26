
import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    setText("");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" 
          value={text} 
          onChange={handleOnChange} 
          style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
                  color: props.mode==='dark'?'white':'black'}}
          id="myBox" rows="8">
        </textarea>
      </div>
        
        <div className="mt-3 d-grid gap-2 d-sm-flex justify-content-sm-center"></div>

      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
     
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      <div className="my-3">
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
