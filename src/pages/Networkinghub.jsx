// import React, { useState, useEffect } from "react";
// import { FaUsers, FaSearch, FaShareAlt, FaCalendarAlt } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import EventDetails from "./EventDetails";

// const Networkinghub = () => {
//   const [expanded, setExpanded] = useState(null);
//   const [showShareOptions, setShowShareOptions] = useState(false);
//   const [events, setEvents] = useState([
//     { id: 1, name: "Alumni Meetup 2025", date: "March 15, 2025", rsvped: false, category: "meetup" },
//     { id: 2, name: "Career Growth Webinar", date: "April 10, 2025", rsvped: false, category: "webinar" },
//     { id: 3, name: "Networking Night", date: "May 20, 2025", rsvped: false, category: "conference" },
//   ]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [filter, setFilter] = useState("all");

//   const handleToggle = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   const handleShareClick = () => {
//     setShowShareOptions(!showShareOptions);
//   };

//   const handleCopyLink = (link) => {
//     navigator.clipboard
//       .writeText(link)
//       .then(() => alert("Link copied to clipboard!"))
//       .catch(() => alert("Failed to copy the link!"));
//   };

  

//   const handleEventClick = (event) => {
//     setSelectedEvent(event);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   const filteredEvents = events.filter((event) =>
//     filter === "all" ? true : event.category === filter
//   );

//   // Close modal with Esc key
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         setShowShareOptions(false);
//         closeModal();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   const features = [
//     {
//       id: 1,
//       title: "Join Groups",
//       description:
//         "Join groups based on your interests, industry, or location. Connect with like-minded alumni and engage in discussions, events, and collaborative projects.",
//       icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
//     },
//     {
//       id: 2,
//       title: "Find Connections",
//       description:
//         "Use our advanced search tools to find and connect with alumni who share your professional interests or have experience in fields you want to explore.",
//       icon: <FaSearch className="text-blue-500 text-4xl mb-4" />,
//     },
//     {
//       id: 3,
//       title: "Share Opportunities",
//       description:
//         "Post job openings, share business opportunities, or seek collaborators for your next big project. The Networking Hub is a resource for you to grow your career.",
//       icon: <FaShareAlt className="text-blue-500 text-4xl mb-4" />,
//     },
//     {
//       id: 4,
//       title: "Attend Events",
//       description:
//         "Stay informed about upcoming alumni events, webinars, and conferences. Expand your network by attending events that interest you.",
//       icon: <FaCalendarAlt className="text-blue-500 text-4xl mb-4" />,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center p-6">
//       <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl w-full">
//         <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
//           Networking Hub
//         </h2>
//         <p className="text-gray-700 mb-6 text-center">
//           Welcome to the Networking Hub! Connect with alumni, expand your network, and discover new opportunities to grow professionally.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={feature.id}
//               className={`bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 ${
//                 expanded === index ? "bg-blue-100" : ""
//               }`}
//             >
//               <div
//                 className="cursor-pointer flex flex-col items-center text-center"
//                 onClick={() => {
//                   handleToggle(index);
//                   if (feature.title === "Share Opportunities") {
//                     handleShareClick();
//                   }
//                 }}
//               >
//                 {feature.icon}
//                 <h3 className="text-xl font-bold text-blue-700 mb-2">
//                   {feature.title}
//                 </h3>
//                 {expanded === index && feature.title === "Attend Events" && (
//                   <div>
                    
//                     {filteredEvents.map((event) => (
//                       <div
//                         key={event.id}
//                         className="flex justify-between items-center p-4 bg-white rounded-md shadow mb-4"
//                         onClick={() => handleEventClick(event)}
//                       >
//                         <div>
//                           <h4 className="font-bold text-blue-700">{event.name}</h4>
//                           <p className="text-gray-600">{event.date}</p>
//                         </div>
                        
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 {expanded === index && feature.description && (
//                   <p className="text-gray-600 mt-4">{feature.description}</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {showShareOptions && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//             role="dialog"
//             aria-modal="true"
//             onClick={() => setShowShareOptions(false)}
//           >
//             <div
//               className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-96 relative"
//               role="document"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//                 onClick={() => setShowShareOptions(false)}
//                 aria-label="Close"
//               >
//                 &times;
//               </button>
//               <h3 className="text-lg font-bold mb-4 text-blue-700">Share This Opportunity</h3>
//               <div className="flex flex-col space-y-4">
//                 <button
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//                   onClick={() => handleCopyLink("https://yourwebsite.com/share")}
//                 >
//                   Copy Link
//                 </button>
//                 <a
//                   href="https://www.instagram.com/your_username"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center text-blue-500 hover:text-blue-700"
//                 >
//                   <FontAwesomeIcon icon={faInstagram} className="mr-2" />
//                   Instagram
//                 </a>
//                 <a
//                   href="https://twitter.com/your_username"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center text-blue-500 hover:text-blue-700"
//                 >
//                   <FontAwesomeIcon icon={faTwitter} className="mr-2" />
//                   Twitter
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/your_username"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center text-blue-500 hover:text-blue-700"
//                 >
//                   <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}

//         {selectedEvent && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//             role="dialog"
//             aria-modal="true"
//           >
//             <div
//               className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-96 relative"
//               role="document"
//             >
//               <button
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//                 onClick={closeModal}
//                 aria-label="Close"
//               >
//                 &times;
//               </button>
//               <h3 className="text-lg font-bold mb-2 text-blue-700">{selectedEvent.name}</h3>
//               <p className="text-gray-600 mb-4">{selectedEvent.date}</p>
//               <p className="text-gray-700">Agenda and details about the event go here...</p>
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//                 onClick={closeModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Networkinghub;

import React from 'react'

const Networkinghub = () => {
  return (
    <div>
      <h1 className='text-6xl'>welcome to networking hub</h1>
    </div>
  )
}

export default Networkinghub

