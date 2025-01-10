import React from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetails = () => {
  const { eventId } = useParams();

  // Sample event data (can be fetched from backend)
  const eventList = [
    { id: 1, name: 'Alumni Reunion', date: 'January 15, 2025', description: 'A gathering of alumni to reconnect and celebrate achievements.' },
    { id: 2, name: 'Career Fair', date: 'March 20, 2025', description: 'Explore career opportunities and network with professionals.' },
    { id: 3, name: '31st Party', date: 'April 7, 2025', description: 'Celebrate the end of the financial year with style!' },
    { id: 4, name: 'Turn Around', date: 'April 7, 2025', description: 'A motivational event to inspire change and growth.' },
    { id: 5, name: 'Alumni Meet', date: 'April 7, 2025', description: 'Reconnect with fellow alumni and reminisce about the past.' },
    { id: 6, name: 'Charity Gala', date: 'April 7, 2025', description: 'A gala dinner to raise funds for our charitable initiatives.' },
  ];

  const event = eventList.find((e) => e.id === parseInt(eventId));

  if (!event) {
    return <div className="text-center py-12 text-white">Event not found!</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-8">
      <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
      <p className="text-lg mb-2">Date: {event.date}</p>
      <p className="mb-8">{event.description}</p>
      <div className="p-6">
               <h2 className="text-xl font-bold mb-2">{event.name}</h2>
               <p className="text-white-600 mb-4">Date: {event.date}</p>
               <Link to="/register" className="bg-white text-black px-4 py-2 rounded-md inline-block transition-colors duration-300">
                  Register Yourself
               </Link>
               </div>
      <Link to="/events" className="text-white-400 hover:underline">
        Back to Events
      </Link>
    </div>

  );
};

export default EventDetails;
