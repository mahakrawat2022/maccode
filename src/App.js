import React, {useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import {
 // BrowserRouter as Router,
  //Switch,
  //Route,
  //Link
//} from "react-router-dom";




function App() {
  const [mode,setMode]=useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null); 

  const showAlert = (message, type) => {
    setAlert({
      mesg: message,
      type: type
    });
    setTimeout(() => {  //we are using setTimeout to dissmiss our alert which ae are using for enabling dark mode or so we dont want it to hang just like thta in our websir so we are setting its time that till what time it should be present and after that it should be set back to null so in this code we are setting the alert as null after 3sec
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode =()=>{
    if(mode===`light`)
    {
    setMode(`dark`)
  document.body.style.background='grey';
  showAlert("dark mode has been enabled","success");
  document.title="TextUtils-dark mode"  //here we are updating title in our website whenever the dark mode is enabled the tile will be change and we can do so wehenever we want to give an updated title this is originally in the index.html file
    }
  else
  {
  setMode(`light`)
  document.body.style.background='white';
  showAlert("light mode has been enabled","success");
  document.title="TextUtils-dark mode"

  }
  }
  return (
    <>
      {/*<Navbar title="Textutils" aboutText="About textutils" />*/}

      {/*we have passed a props here ..check in documentation
   //it means we have made a react component of which we can change title and it is 
  //reusable just in the place of textutlis we have to write our desired content
  //in can we want to change any othe thing that also we can pass in the forn of a 
  //prob (check in Navbar.js)*/}

  {/*<Navbar/>  if we are using this then the default values will be used */}
  <Router>
  <Navbar title="TextUtile"  mode={mode} toggleMode={toggleMode}  />    

  <Alert alert={alert}/> {/*the above state variable will be passed here*/}
  < div className='container'>   { /*container is the class in bootstrap whith the help of which we can fit anything 
                                     in a container */}

<Routes>
  <Route exact path="/about" element={<About />} />
  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="enter the text to analyze" mode={mode} />} />
  </Routes>

</div>

</Router>
  
</>
  );
}

export default App;
