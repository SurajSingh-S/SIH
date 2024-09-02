import React, { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the message to your backend or service
    console.log({ name, email, message });
    setIsSubmitted(true);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        {isSubmitted ? (
          <p className="text-green-600">Thank you for your message. We will get back to you soon!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="p-3 border border-gray-300 rounded-md mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="p-3 border border-gray-300 rounded-md mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message" className="text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              className="p-3 border border-gray-300 rounded-md mb-4"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-300">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
