import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const closeBtn = (state) => {
    setAlert({
      state : state
    });
  }
  
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    if(isChecked === false){
      setIsChecked(true);
      showAlert("Switch On", "success");
    }
    else{
      setIsChecked(false);
      showAlert("Switch Off", "danger");
    }
  }


  return (
    <div className="App">
      <Router>
        <header>
          <Navbar title= "Ahsanul Hasan" />
        </header>
        
        <section>
        <Routes>
            <Route exact path="/about" element={<About showAlert={showAlert} />}></Route>
            <Route exact path="/text" element={<TextForm  heading="Enter Text To Change" />}></Route>
        </Routes>
          
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <Alert alert={alert} closeBtn={closeBtn} />
                  <h3>Enter Text To Change</h3>
                  <div className="form-check form-switch mb-3">
                      <input className="form-check-input" type="checkbox" role="switch" checked={isChecked} id="flexSwitchCheckDefault" onChange={toggleSwitch} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Router>
      
    </div>
  );
}

export default App;
