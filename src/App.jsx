import React from 'react';
import {BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import UserHomepage from './pages/UserHomepage';
import BookingPage from './pages/BookingPage';
import DetailRoomPage from './pages/DetailRoomPage';
import ManageRoom from './pages/ManageRoom';
import AddRoomPage from './pages/AddRoomPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutUs from './pages/AboutUs';
import HerosPage from './pages/HerosPage';
import "./assets/styles/index.css";
// import "./assets/styles/dashboard.css";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<UserHomepage />} />
        <Route path="/room" element={<BookingPage/>} />
        <Route path="/detail" element={<DetailRoomPage/>}/>
        <Route path="/admin/room" element={<ManageRoom/>}/>
        <Route path="/add-room" element={<AddRoomPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/' element={<HerosPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
