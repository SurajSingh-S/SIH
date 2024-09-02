import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('https://your-image-url.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full p-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Alumni Association</h1>
          <p className="text-xl mb-8">Connect, Engage, and Thrive with your Alma Mater</p>
          <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-300">
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">Our Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Networking</h3>
              <p className="text-gray-300">Connect with fellow alumni, mentors, and professionals to expand your network and career opportunities.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Job Portal</h3>
              <p className="text-gray-300">Explore job opportunities, post job openings, and connect with potential employers within the alumni network.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Donation Portal</h3>
              <p className="text-gray-300">Support various initiatives and projects of the college by contributing through our secure donation platform.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Alumni Directory</h3>
              <p className="text-gray-300">Search and connect with alumni based on various criteria such as graduation year, field of study, and location.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Events and Reunions</h3>
              <p className="text-gray-300">Stay updated on upcoming events, reunions, and workshops organized by the Alumni Association.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
              <p className="text-gray-300">Read about the achievements and contributions of fellow alumni and be inspired by their success stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Us Today</h2>
          <p className="text-lg mb-8">Be a part of a vibrant community and make a difference. Register now to start your journey with us!</p>
          <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-300">
            Register
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
