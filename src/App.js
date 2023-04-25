import './App.css';
import { useState } from 'react';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import ArticleSaver from './components/ArticleSaver';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);

  }

  const toggleButton = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#14063e'
      showAlert(" Dark Mode is enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(" Light Mode is enable","success");
    }
  }

  const greenmode = () => {
    if(mode === 'light'){
        setMode('green');
        document.body.style.backgroundColor = 'green'
        showAlert(" Green Mode is enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(" Light Mode is enable","success");
    }
  }

// export default class App extends Component {
//   render() { //Render is a lifecycle method.
//     return (
//       <div>
//         {/* <NavBar/> */}
//         <NavBar title ='TextUtils' mode = {mode} greenModeTheme={greenmode} toggleButton={toggleButton}/>
//         <News pageSize={6}/>
//       </div>
//     )
//   }
// }
return (
  <>
  <Router>
    <NavBar title ='TextUtils' mode = {mode} greenModeTheme={greenmode} toggleButton={toggleButton}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <News pageSize={6}/>
          </Route>
    </Switch>
    </div>
  </Router>
  </>
  );
}

export default App;
