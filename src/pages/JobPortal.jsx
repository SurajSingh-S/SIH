// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const JobPortal = () => {
//   const [jobs, setJobs] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate

//   useEffect(() => {
    
//     const fetchJobs = () => {
//       const mockJobs = [
//         {
//           id: 1,
//           title: "Software Engineer",
//           company: "Tech Innovations Inc.",
//           location: "San Francisco, CA",
//         },
//         {
//           id: 2,
//           title: "Product Manager",
//           company: "Creative Solutions LLC",
//           location: "New York, NY",
//         },
//         {
//           id: 3,
//           title: "Data Analyst",
//           company: "Data Insights Corp.",
//           location: "Austin, TX",
//         },
//         {
//           id: 4,
//           title: "UX/UI Designer",
//           company: "Design Studio",
//           location: "Los Angeles, CA",
//         },
//         {
//           id: 5,
//           title: "Marketing Specialist",
//           company: "Global Marketing Group",
//           location: "Chicago, IL",
//         },
//       ];
//       setJobs(mockJobs);
//     };

//     fetchJobs();
//   }, []);

//   // Function to handle apply now button click
//   const handleApplyNow = () => {
//     navigate('/register'); // Redirect to the registration page
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-4xl font-bold mb-4">Job Portal</h1>
//       <div className="bg-white shadow rounded p-4">
//         <h2 className="text-xl font-bold mb-2">Featured Jobs</h2>
//         <ul>
//           {jobs.map((job) => (
//             <li key={job.id} className="border-b py-2">
//               <h3 className="font-bold">{job.title}</h3>
//               <p>{job.company}</p>
//               <p>{job.location}</p>
//               <button 
//                 onClick={handleApplyNow} // Call handleApplyNow on click
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//               >
//                 Apply Now
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default JobPortal;





import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchJobs = () => {
      const mockJobs = [
        {
          id: 1,
          title: "Software Engineer",
          company: "Tech Innovations Inc.",
          location: "San Francisco, CA",
        },
        {
          id: 2,
          title: "Product Manager",
          company: "Creative Solutions LLC",
          location: "New York, NY",
        },
        {
          id: 3,
          title: "Data Analyst",
          company: "Data Insights Corp.",
          location: "Austin, TX",
        },
        {
          id: 4,
          title: "UX/UI Designer",
          company: "Design Studio",
          location: "Los Angeles, CA",
        },
        {
          id: 5,
          title: "Marketing Specialist",
          company: "Global Marketing Group",
          location: "Chicago, IL",
        },
      ];
      setJobs(mockJobs);
    };

    fetchJobs();
  }, []);

  // Function to handle apply now button click
  const handleApplyNow = () => {
    navigate('/register'); // Redirect to the registration page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center p-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg rounded-xl p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white">
          Job Portal
        </h1>
        <p className="text-gray-100 mb-8 text-center">
          Explore exciting job opportunities and apply with ease.
        </p>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white">{job.title}</h3>
              <p className="text-gray-100 mt-2">{job.company}</p>
              <p className="text-gray-100 mt-1">{job.location}</p>
              <button
                onClick={handleApplyNow}
                className="mt-4 bg-white text-black hover:bg-blue-600 hover:text-white  font-bold px-6 py-2 rounded-md transition duration-300"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
