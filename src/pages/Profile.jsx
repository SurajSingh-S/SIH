// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Login from './Login';
// import Register from './Register';
// import ForgotPassword from './ForgotPassword';
// import Dashboard from './Dashboard';
// import Profile from './Profile';
// import Navbar from './components/Navbar';

// function App() {
//   const { currentUser } = useAuth();

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Public routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />

//         {/* Protected routes */}
//         <Route
//           path="/dashboard"
//           element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/profile"
//           element={currentUser ? <Profile /> : <Navigate to="/login" />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Replace with your actual Firebase setup
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to log in:', error);
    }
  };

  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

