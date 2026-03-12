import React from 'react';
import {BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';
import "./assets/styles/index.css"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/room" element={<BookingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
