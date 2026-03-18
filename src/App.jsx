import React from 'react';
import {BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import Homepage from './pages/UserHomepage';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
