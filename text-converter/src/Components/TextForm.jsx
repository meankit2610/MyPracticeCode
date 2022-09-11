import React from 'react'
import { useState } from 'react';

export default function TextForm() {
  const [text, setText] = useState("Enter Text")
  const [min, setMin] = useState(true)
  
  const handleTime = () => {
    min ? setMin(false) : setMin(true)
  }
    const handleUp = () => {
        
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLow = () => {
        
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleChange = (e) => {
        console.log("change");
        setText(e.target.value)
    }
  return (
    <>
      <h1>Enter The Text Analyze</h1>
      <div className="container">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button class="btn btn-primary mx-2" type="submit" onClick={handleUp}>
          Convert To UpperCase
        </button>
        <button class="btn btn-primary mx-2" type="submit" onClick={handleLow}>
          Convert To LowerCase
        </button>

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
                class="btn btn-primary mx-2"
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
                class="btn btn-primary mx-2"
                type="submit"
                onClick={handleTime}
              >
                In Minutes
              </button>
            </div>
          )}

          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
