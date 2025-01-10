import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
          <ul className="list-disc ml-5">
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Recent Success Stories</h2>
          <ul>
            <li>
              <Link to="/success-stories" className="text-blue-500 hover:underline">
                View Success Stories
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Donation Opportunities</h2>
          <p>Support various initiatives and projects.</p>
          <Link to="/donation" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded inline-block mt-2">
            Donate Now
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Job Opportunities</h2>
          <p>Explore career opportunities.</p>
          <Link to="/jobs" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded inline-block mt-2">
            View Job Portal
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Alumni Directory</h2>
          <p>Connect with fellow alumni.</p>
          <Link to="/alumni" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded inline-block mt-2">
            View Alumni Directory
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Profile Management</h2>
          <p>Update your contact information and preferences.</p>
          <Link to="/profile" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded inline-block mt-2">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;