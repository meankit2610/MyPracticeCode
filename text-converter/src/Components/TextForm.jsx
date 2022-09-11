import React from 'react'
import { useState } from 'react';

export default function TextForm() {
    const [text , setText] = useState("Enter Text")
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
    <div>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              onChange={handleChange}
      ></textarea>
      <button class="btn btn-primary" type="submit" onClick={handleUp}>
        Convert To UpperCase
      </button>
      <button class="btn btn-primary" type="submit" onClick={handleLow}>
        Convert To LowerCase
      </button>
      
    </div>
  );
}
