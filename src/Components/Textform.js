import React from 'react'
import { useState } from 'react';


export default function Textform(props) {
    const[text,setText]  = useState("Enter Text here:");
    
    const handleTextUpdate = (e) =>{
        setText(e.target.value)
    }

    const handleUpClick = () =>{
        setText(text.toUpperCase())
    }

    const handleLowerClick = () =>{
        setText(text.toLowerCase())
    } 

    const handleClearClick = () =>{
      setText(" ");
    }

    const handleCopyClick = () =>{
      let enteredText = document.getElementById('myBox')
      enteredText.select();
      navigator.clipboard.writeText(enteredText.value);
    }

    const handleExtraSpaces = () =>{
      setText(text.trim().split(/ +/).join(' '))
    }

    
  return (
    <>
    <div className="container">
      <h3  style={{color:props.mode==='light'?'black':'white'}} >{props.heading}</h3>
        <div className="mb-3" >
        <textarea className="form-control" value = {text}  onChange={handleTextUpdate} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-success mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-danger mx-1' onClick={handleLowerClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-warning mx-1' onClick={handleCopyClick}>Copy Text</button>
        <button className='btn btn-info mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
    </div>
    <div className="container my-3">
          <p style={{color:props.mode==='light'?'black':'white'}} >{((text.match(/\b\w+\b/g) || []).length)} words and {text.length} characters</p>
    </div>
    
    </>
  )
}
