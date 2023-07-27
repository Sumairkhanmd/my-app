import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick=()=>{
        //console.log("clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleclear=()=>{
      //console.log("clicked");
      let newText="";
      setText(newText);
  }
    const handleLowClick=()=>{
      //console.log("clicked");
      let newText=text.toLowerCase();
      setText(newText);
  }
    const handleOnChange=(event)=>{
        //console.log("changed");
        setText(event.target.value)
    }
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <form>
          <div className="mb-3" />
          <label htmlFor="My box" className="form-label">
            {props.title}
          </label>
          <textarea
            className="form-control"
            id="My box"
            rows="8"
            value={text}
            onChange={handleOnChange}
          />
        </form>
      </div>
      <br></br>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Text</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Text</button>
      <button className="btn btn-primary mx-2" onClick={handleclear}>Clear text</button>      
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>The number of characters is: {text.length} and the number of words is: {text.split(" ").length-1}</p>
        <p>The time required to read the above text is: {0.008*text.split(" ").length}</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
