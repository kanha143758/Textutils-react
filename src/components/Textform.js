import { useState } from "react"
import React from 'react'
//import PropTypes from 'prop-types'



export default function Textform(props) {
        const [text,settext]=useState("")
        //const [btntxt,setbtntxt]=useState("convert to uppercase")
      

        const handleonchange = (event)=>{
            console.log("change")
            settext(event.target.value)
             
        }
        const handleupconvert = ()=>{
            console.log("clicked")
            let newText=text.toUpperCase()
            settext(newText)
           /* setbtntxt("convert to lowercase")
            if(newText===text)
            {
              let ntext=text.toLowerCase()
              settext(ntext)
              setbtntxt("convert to uppercase")
            }*/
             props.showalert("text uppercase done","success");
        }
        const handleloconvert = ()=>{
          console.log("clicked")
          let newText=text.toLowerCase()
          settext(newText)
          props.showalert("text lowercase done","success");
           
      }
      const handleclick = ()=>{
        settext("")
        props.showalert("text clear","success");
      }
      const handlecopy = ()=>{
        let text1 = document.getElementById("exampleFormControlTextarea1");
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showalert("text coppied","warning");
      }
  return (
    <>
    <div>
                  
          <div className={`mb-3  text-${props.mode==='light'?'dark':'light'}`}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text Below</label>
            <textarea className="form-control" placeholder="Enter Your Text" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='light'?'white':'#042743', color:props.mode==='light'?'black':'white'}}value={text} onChange={handleonchange} rows="6"></textarea>
          </div>
              <button className='btn btn-primary mx-2' onClick={handleupconvert}>convert to UpperCase</button>
              <button className='btn btn-primary mx-2' onClick={handleloconvert}>convert to LowerCase</button>
              <button className='btn btn-primary mx-2' onClick={handleclick}>clear</button>
              <button className='btn btn-primary mx-2' onClick={handlecopy}>copy</button>
                
    </div>
          <div className={`my-3  text-${props.mode==='light'?'dark':'light'}`}>
              <h1>about text</h1>
              <p>{text.split(" ").length} words {text.length}</p>

          </div>
          
    </>
  )
}
