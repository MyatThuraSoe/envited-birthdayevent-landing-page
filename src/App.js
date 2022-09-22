import React from "react";
import LandingPage from "./pages/landingPage";
import CreateEvent from "./pages/createEvent";
import EventPage from "./pages/eventPage";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/create' element={<CreateEvent/>} />
          <Route path='/event' element={<EventPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
