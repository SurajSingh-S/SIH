
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import { AuthProvider } from './context/AuthContext';
import AlumniDirectoryPage from './pages/AlumniDirectoryPage';
import EventsPage from './pages/Events';  

function App() {
    return (
        <Router>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route  path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/alumni-directory" element={<AlumniDirectoryPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    {/* Add more routes as needed */}
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;


