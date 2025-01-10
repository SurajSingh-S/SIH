// import React from 'react';
// import { useAuth } from '../context/AuthContext'; // Import the authentication context
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

// const Donation = () => {
//   const { user } = useAuth(); // Get the current user from the auth context
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleDonate = () => {
//     if (user) {
//       // Logic for donation goes here
//       alert('Thank you for your donation!');
//     } else {
//       // If not logged in, redirect to login page
//       navigate('/login');
//     }
//   };

//   return (
//     <div className="container mx-auto py-12 text-center">
//       <h1 className="text-4xl font-bold mb-4">Make a Donation</h1>
//       <p className="mb-8">Your contributions help us support our alumni community.</p>
//       <button
//         onClick={handleDonate}
//         className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300"
//       >
//         Donate Now
//       </button>
//     </div>
//   );
// };

// export default Donation;



// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext"; // Import the authentication context
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// const DonationPage = () => {
//   const { user } = useAuth(); // Get the current user from the auth context
//   const navigate = useNavigate(); // Initialize the navigate function

//   const [amount, setAmount] = useState("");
//   const [goal, setGoal] = useState(10000); // Example goal
//   const [raised, setRaised] = useState(4500); // Example current raised amount
//   const [showShareOptions, setShowShareOptions] = useState(false); // Toggle share options

//   const handleDonate = (e) => {
//     e.preventDefault();
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     const donationAmount = parseFloat(amount);
//     if (!isNaN(donationAmount) && donationAmount > 0) {
//       setRaised(raised + donationAmount);
//       alert("Thank you for your donation!");
//       setAmount("");
//     } else {
//       alert("Please enter a valid amount!");
//     }
//   };

//   const progressPercentage = Math.min((raised / goal) * 100, 100);

//   const handleSocialShare = (platform) => {
//     let url;
//     const donationMessage = `I just donated to an amazing cause! Join me in supporting this initiative.`;

//     switch (platform) {
//       case "facebook":
//         url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//           donationMessage
//         )}`;
//         break;
//       case "twitter":
//         url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
//           donationMessage
//         )}`;
//         break;
//       case "linkedin":
//         url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
//           donationMessage
//         )}`;
//         break;
//       default:
//         return;
//     }

//     window.open(url, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
//       <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
//           Support Our Initiatives
//         </h1>
//         <p className="text-gray-600 text-center mb-6">
//           Help us reach our goal of Rs.{goal.toLocaleString()}! Together, we can make
//           a difference.
//         </p>

//         <div className="w-full bg-gray-200 rounded-full h-6 mb-6">
//           <div
//             className="bg-green-500 h-6 rounded-full"
//             style={{ width: `${progressPercentage}%` }}
//           ></div>
//         </div>
//         <p className="text-center text-gray-600 mb-4">
//           Rs. {raised.toLocaleString()} raised of Rs. {goal.toLocaleString()}
//         </p>

//         <form
//           className="flex flex-col items-center space-y-4"
//           onSubmit={handleDonate}
//         >
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter donation amount"
//             className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <button
//             type="submit"
//             className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
//           >
//             Donate Now
//           </button>
//         </form>

//         <div className="mt-8">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Impact Stories</h2>
//           <p className="text-gray-600">
//             Your contributions have funded scholarships, improved infrastructure,
//             and supported student research. Together, we are shaping the future of
//             our institution!
//           </p>
//         </div>

//         <div className="mt-8  flex justify-center">
//           <h1 className=" text-black-500 hover:underline text-xl font-bold">
//             Share on Social Media
//           </h1>
//         </div>

       
//           <div className="text-center">
//                   <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
//                     <FontAwesomeIcon icon={faInstagram} />
//                     Instagram
//                   </a>
//                   <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
//                     <FontAwesomeIcon icon={faTwitter} />
//                     Twitter
//                   </a>
//                   <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
//                     <FontAwesomeIcon icon={faLinkedin} />
//                     Linkedin
//                   </a>
//                 </div>
        
//       </div>
//     </div>
//   );
// };

// export default DonationPage;

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const DonationPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [goal, setGoal] = useState(10000);
  const [raised, setRaised] = useState(4500);
  
  const [previousDonations, setPreviousDonations] = useState([
    { name: "Ram Prasad", amount: 1000, date: "2025-01-05" },
    { name: "Hari Mohon", amount: 2000, date: "2025-01-03" },
    { name: "Shamsher Bahadur", amount: 1500, date: "2025-01-02" },
  ]);

  const handleDonate = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
      return;
    }

    const donationAmount = parseFloat(amount);
    if (!isNaN(donationAmount) && donationAmount > 0) {
      setRaised(raised + donationAmount);
      setPreviousDonations([
        ...previousDonations,
        { name: user.displayName || "Anonymous", amount: donationAmount, date: new Date().toISOString().split("T")[0] },
      ]);
      alert("Thank you for your donation!");
      setAmount("");
    } else {
      alert("Please enter a valid amount!");
    }
  };

  const progressPercentage = Math.min((raised / goal) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-600 to-blue-400 flex flex-col items-center py-10">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Support Our Initiatives</h1>
        <p className="text-gray-600 text-center mb-6">
          Help us reach our goal of Rs.{goal.toLocaleString()}! Together, we can make a difference.
        </p>

        <div className="w-full bg-gray-200 rounded-full h-6 mb-6">
          <div className="bg-green-500 h-6 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p className="text-center text-gray-600 mb-4">
          Rs. {raised.toLocaleString()} raised of Rs. {goal.toLocaleString()}
        </p>

        <form className="flex flex-col items-center space-y-4" onSubmit={handleDonate}>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter donation amount"
            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Donate Now
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Previous Donations</h2>
          <ul className="divide-y divide-gray-200">
            {previousDonations.map((donation, index) => (
              <li key={index} className="py-4 flex justify-between">
                <span>{donation.name}</span>
                <span>Rs. {donation.amount.toLocaleString()}</span>
                <span>{donation.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center">
          <h1 className="text-black-500 hover:underline text-xl font-bold">Share on Social Media</h1>
        </div>

        <div className="text-center mt-4">
          <a
            href="https://www.instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          <a
            href="https://twitter.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;



