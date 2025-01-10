
import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const eventList = [
    { id: 1, name: 'Alumni Reunion', date: 'January 15, 2025', image: 'https://www.modyuniversity.ac.in/wp-content/uploads/2024/07/01.jpg', description: 'A gathering of alumni to reconnect and celebrate achievements.' },
    { id: 2, name: 'Career Fair', date: 'March 20, 2025', image: 'https://cadc.auburn.edu/wp-content/uploads/2024/04/BSCI-CareerFair-Spring2024-TMD-4.jpg', description: 'Explore career opportunities and network with professionals.' },
    { id: 3, name: '31st Party', date: 'April 7, 2025', image: 'https://blog.justgiving.com/wp-content/uploads/2020/09/Charity-gala.png', description: 'Celebrate the end of the financial year with style!' },
    { id: 4, name: 'Turn Around', date: 'April 7, 2025', image: 'https://innis.utoronto.ca/wp-content/uploads/Alumni-Events-1-680@2x.jpg', description: 'A motivational event to inspire change and growth.' },
    { id: 5, name: 'Alumni Meet', date: 'April 7, 2025', image: 'https://www.vtc.edu/wp-content/uploads/2016/10/gallery_images_AlumniDay4-scaled.jpg', description: 'Reconnect with fellow alumni and reminisce about the past.' },
    { id: 6, name: 'Charity Gala', date: 'April 7, 2025', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6o8aXWIIjsBmkGuhA38co4ULC8XQ5sakpA&s.jpg', description: 'A gala dinner to raise funds for our charitable initiatives.' },
  ];

  return (
    <div className="w-full h-full bg-black py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventList.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{event.name}</h2>
              <p className="text-gray-600 mb-4">Date: {event.date}</p>
              <Link
                to={`/events/${event.id}`}
                className="bg-black text-white px-4 py-2 rounded-md inline-block transition-colors duration-300 hover:bg-gray-800"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;












// import React from 'react';
// import { Link } from 'react-router-dom';

// const Events = () => {
//   const eventList = [
//     { id: 1, name: 'Alumni Reunion', date: 'January 15, 2025', image: 'https://www.modyuniversity.ac.in/wp-content/uploads/2024/07/01.jpg' },
//     { id: 2, name: 'Career Fair', date: 'March 20, 2025', image: 'https://cadc.auburn.edu/wp-content/uploads/2024/04/BSCI-CareerFair-Spring2024-TMD-4.jpg' },
//     { id: 3, name: '31st Party', date: 'April 7, 2025', image: 'https://blog.justgiving.com/wp-content/uploads/2020/09/Charity-gala.png' },
//     { id: 4, name: 'Turn Around', date: 'April 7, 2025', image: 'https://blog.justgiving.com/wp-content/uploads/2020/09/Charity-gala.png' },
//     { id: 5, name: 'Charity Gala', date: 'April 7, 2025', image: 'https://blog.justgiving.com/wp-content/uploads/2020/09/Charity-gala.png' },
//     { id: 6, name: 'Charity Gala', date: 'April 7, 2025', image: 'https://blog.justgiving.com/wp-content/uploads/2020/09/Charity-gala.png' },
//   ];

//   return (
//     <div className="w-full h-full bg-black py-12 overflow-hidden">
//       <h1 className="text-4xl font-bold mb-8 text-center text-white">Upcoming Events</h1>
//       <div className="flex space-x-4 animate-scroll">
//         {eventList.map((event, index) => (
//           <div
//             key={event.id}
//             className="min-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//           >
//             <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h2 className="text-xl font-bold mb-2">{event.name}</h2>
//               <p className="text-gray-600 mb-4">Date: {event.date}</p>
//               <Link to="/register" className="bg-black text-white px-4 py-2 rounded-md inline-block transition-colors duration-300">
//                 Register
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Events;

