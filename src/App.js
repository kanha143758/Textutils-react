//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";*/


function App() {
  const [mode,setmode]=useState('light')
  const[alert,setalert]=useState("null")
  
const removebodyclasses= ()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')

}

  const togglemode = (cls)=>{
    removebodyclasses();
    if(cls!==null)
   {
    console.log(cls)
    document.body.classList.add('bg-'+cls)}
    else{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743'
      document.body.style.Color='white'
      showalert("Dark mode activated","success");
     // document.title='Textutils-darkmode'


    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showalert("Light mode activated","success");

    }}
  }
  const showalert= (message,type)=>{
   setalert({
    msg: message,
    type: type
   })

  }
  return (
    /*<>
    <Router>
    
<Navbar tittle="Textutils" mode={mode} togglemode={togglemode} />
<Alert alert={alert}/>

<div className='container'>


<Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<Navigate to="/home" />}/>
           
         
         
          <Route exact name="home" path="/home" element={<Textform mode={mode} showalert={showalert}/>}/>
         
          
           
        </Routes>
        </div>
        </Router>


    </>*/
    <>
   
<Alert alert={alert}/>
<div className='container'>
<Textform mode={mode} showalert={showalert}/>
</div>



    </>
  );
}

export default App;
