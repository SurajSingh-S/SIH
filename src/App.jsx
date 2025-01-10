import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Adjust the path as necessary
import Header from './components/Header';
//import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Donation from './components/Donation';
import SuccessStories from './components/Successstories';
import JobPortal from './pages/JobPortal';
import AlumniDirectory from './pages/AlumniDirectory';
import ProtectedRoute from './components/ProtectedRoute';
import About from './components/About';
import Feedback from './pages/Feedback';
import Networkinghub from './pages/Networkinghub';
//import Signup from './components/Signup';
const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [login,islogin]= useState(true)

  const handleRegistration = () => {
    setIsRegistered(true); // Update state when user registers
  };

  const handleLogout = () => {
    setIsRegistered(false); // Reset state on logout
  };

  return (

    
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header isRegistered={isRegistered} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            {/* Redirect to Register page on initial load */}
            <Route path="/" element={<Home />} /> {/* Home page */}
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register onRegister={handleRegistration} />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/jobs" element={<JobPortal />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/about" element={<About />} />
            <Route  path='/feedback' element={<Feedback/>}/>
            <Route path='/networkinghub' element={<Networkinghub/>}/>
            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
            <Route path="/alumni" element={<ProtectedRoute element={AlumniDirectory} />} />
            
          </Routes>
        </main>
       

        
      </div>

      
    </AuthProvider>
  );
};

export default App;