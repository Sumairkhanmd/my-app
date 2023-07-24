import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here2");
    const handleUpClick=()=>{
        console.log("clicked");
        setText("You have clicked on handleUpClick");
    }
    const handleOnChange=(event)=>{
        console.log("changed");
        setText(event.target.value)
    }
  return (
    <>
      <div>
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
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Text</button>
    </>
  );
}
