import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Hellogif from './hello.jpg';
import { Col, Container, Image, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

function App() {
  return (
    // <Router>
      <Container fluid className="App">
        <Navbar/>
          <div className="d-flex justify-content-center align-items-center bodyContent">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route exact path="/">
                <Image className="img-fluid AppImg" src={Hellogif} rounded/>
                  {/* img-fluid so that it scales with parent element */}
              </Route>
              
            </Switch>
          </div>
      </Container>
    // </Router>
  );
}

export default App;
