import React from 'react'
import { useState } from 'react';

export default function TextForm(prop) {
  const [text, setText] = useState("")
  const [min, setMin] = useState(true)
  
  const handleTime = () => {
    min ? setMin(false) : setMin(true)
  }
    const handleUp = () => {
        
        let newText = text.toUpperCase()
      setText(newText)
      prop.showAlert("Converted To UpperCase", "success");
    }
    const handleLow = () => {
        
        let newText = text.toLowerCase()
      setText(newText)
      prop.showAlert("Converted To LowerCase", "success");
    }
    const handleChange = (e) => {
        console.log("change");
        setText(e.target.value)
    }
    const handleExtraSpace  = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      prop.showAlert("Extra Spaces Removed", "success");
    };
    const handleCopy = () => {
      let text = document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      prop.showAlert("Text Copied To Clipboard", "success");
    };
  return (
    <>
      <div
        className="container"
        style={{ color: prop.mode === `light` ? `black` : `white` }}
      >
        <h1>Enter The Text Analyze</h1>
        <textarea
          style={{
            backgroundColor: prop.mode === "dark" ? "grey" : "white",
            color: prop.mode === `light` ? `black` : `white`,
          }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
        <div className="container ">
          <button
            className="btn btn-primary mx-2 my-2"
            type="submit"
            onClick={handleUp}
          >
            Convert To UpperCase
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            type="submit"
            onClick={handleLow}
          >
            Convert To LowerCase
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            type="submit"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            type="submit"
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>
        </div>

        <div className="conatiner2">
          <h2>Your Text Summary</h2>
          <p>
            {text.split(" ").length} Words and {text.length} characters
          </p>
          {min ? (
            <div>
              <p>
                This can be Read in <b>{0.008 * text.split(" ").length}</b>{" "}
                Minutes
              </p>
              <button
                className="btn btn-primary mx-2"
                type="submit"
                onClick={handleTime}
              >
                In Seconds
              </button>
            </div>
          ) : (
            <div>
              <p>
                This can be Read in <b>{0.48 * text.split(" ").length}</b>{" "}
                Seconds
              </p>
              <button
                className="btn btn-primary mx-2"
                type="submit"
                onClick={handleTime}
              >
                In Minutes
              </button>
            </div>
          )}

          <h2>Preview</h2>
          <p>{text ? text : "Enter Something In the Box To Preview"}</p>
        </div>
      </div>
    </>
  );
}
