//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
//import NoPage from './components/NoPage.js';
import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

const [mode, setMode] = useState ('light');

const [text1, setText1] = useState("Dark Mode");

const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {

        setAlert({

                msg  : message,
                type : type

                })

setTimeout(() => {

        setAlert(null);
}, 2000);

}

const toggleMode = () => {
if(mode === 'light'){
        setMode('dark');
        setText1("Light Mode");
        document.body.style.backgroundColor = '#24166d70';
        showAlert("Dark Mode has been enabled", "success");
}
else{
        setMode('light');
        setText1("Dark Mode");
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled", "success");
}

}

const toggleMode1 = () => {
  if(mode === 'light'){
          setMode('dark');
          setText1("Light Mode");
          document.body.style.backgroundColor = '#4b4b9a';
          showAlert("Blue Mode has been enabled", "success");
  }
  else{
          setMode('light');
          setText1("Dark Mode");
          document.body.style.backgroundColor = 'white';
          showAlert("Light Mode has been enabled", "success");
  }
  
  }
  
return (
  <>
         <Navbar  title= "TextUtility" yashswitch = {text1} yashmode = {mode} yashBlue={toggleMode1} yashToggleMode={toggleMode} aboutYash= "about website" homeYash = "Home" dropdownYash= "Dropdown"  disabledYash = "Disabled"/>
                <Alert yashAlert={alert}></Alert>
          
            <div className="container my-3">
             <BrowserRouter basename = "/TextUtility0">
             
                <Routes>
                   <Route exact path="/TextUtility0" element={<TextForm yashShowAlert={showAlert} headingYash= "Enter your text" yashmode = {mode}></TextForm>}  /> 
                   <Route path="/home" element ={<TextForm yashShowAlert={showAlert} headingYash= "Enter your text" yashmode = {mode}></TextForm>}/>
                   <Route path="/about" element ={<AboutUs heading = "About Us"> </AboutUs>}/>
                </Routes>
              </BrowserRouter>    
             </div>
             
  </>
  );
} 

export default App;
