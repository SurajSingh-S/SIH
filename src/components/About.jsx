import React from 'react';

function About() {
  return (
    <div className="p-6 bg-gradient-to-r from-green-600 to-blue-400 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to the Alumni Association platform for the Government Engineering College. Our mission is to foster lifelong connections between graduates and their alma mater, facilitating networking, mentorship, and philanthropic support. 
        </p>
        </div>
        <br />
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-4">
          Our platform offers a variety of features including a job portal, donation portal, networking hub, and much more to help alumni stay connected and engaged with the institution. We are dedicated to building a strong and supportive alumni community.
        </p>
        </div>

        <br />
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-700">
          Thank you for being part of our community. Together, we can achieve great things and continue to make a positive impact.
        </p>
      </div>
    </div>
  );
}

export default About;
