// src/components/Events.jsx
import React from 'react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Annual Alumni Meet",
      date: "2024-12-15",
      location: "College Auditorium",
      description: "Join us for the annual gathering of all alumni. Reconnect with old friends and make new ones!",
    },
    {
      id: 2,
      title: "Alumni Webinar on Industry Trends",
      date: "2024-11-10",
      location: "Online",
      description: "A webinar hosted by prominent alumni discussing the latest trends in various industries.",
    },
  ];

  return (
    <div className="bg-white p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id} className="mb-6 border-b pb-4">
            <h3 className="text-xl font-semibold text-gray-700">{event.title}</h3>
            <p className="text-gray-600">{event.date} - {event.location}</p>
            <p className="text-gray-600">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
