// // src/components/DonationPortal.jsx
// import React, { useState } from 'react';

// const Donationportal = () => {
//   const [amount, setAmount] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (amount === '' || isNaN(amount) || parseFloat(amount) <= 0) {
//       setError('Please enter a valid donation amount');
//       return;
//     }
//     setError('');
//     setSuccess('Thank you for your donation!');
//     setAmount('');
//     setMessage('');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
//       <div className="w-full max-w-md p-8 space-y-8 bg-black bg-opacity-75 shadow-lg">
//         <h2 className="text-3xl font-bold text-center">Donation Portal</h2>
//         {error && <p className="text-red-600 mb-4">{error}</p>}
//         {success && <p className="text-green-600 mb-4">{success}</p>}
        
//         <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//           <input
//             type="text"
//             placeholder="Enter donation amount"
//             className="w-full px-4 py-2 text-black bg-gray-200 rounded-md"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
          
//           <textarea
//             placeholder="Leave a message (optional)"
//             className="w-full px-4 py-2 text-black bg-gray-200 rounded-md"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
          
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-300"
//           >
//             Donate
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Donationportal;
