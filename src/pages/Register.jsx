import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth(); // Ensure this matches your AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      setError('');
      setLoading(true);
      await register(email, password);
      navigate('/'); // Redirect to home page after successful registration
    } catch (err) {
      setError('Failed to create an account');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-black bg-opacity-75 shadow-lg">
        <h2 className="text-3xl font-bold text-center">SignUp</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">

          <label htmlFor="email" className="text-gray-400 mb-2"></label>
          <input
          placeholder='Email'
            type="email"
            id="email"
            className="w-full px-4 py-2 text-black bg-gray-200 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <label htmlFor="password" className="text-gray-400 mb-2"></label>
          <input
          placeholder='Password'
            type="password"
            id="password"
            className="w-full px-4 py-2 text-black bg-gray-200 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <label htmlFor="confirm-password" className="text-gray-400 mb-2"></label>
          <input
          placeholder='Confirm Password'
            type="password"
            id="confirm-password"
            className="w-full px-4 py-2 text-black bg-gray-200 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br />
          
          <button
            type="submit"
            className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
