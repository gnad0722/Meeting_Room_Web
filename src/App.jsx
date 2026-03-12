import React from 'react';
import {BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import Homepage from './pages/Homepage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
