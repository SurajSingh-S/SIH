// // ForgotPassword.js
// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const { resetPassword } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await resetPassword(email);
//       alert('Password reset email sent!');
//     } catch (error) {
//       console.error('Failed to reset password:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg">
//         <h2 className="text-2xl text-white mb-4">Reset Password</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mb-4 p-2 w-full"
//         />
//         <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg">
//           Reset Password
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;
