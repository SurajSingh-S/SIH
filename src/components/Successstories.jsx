import React from 'react';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      name: 'John Doe',
      story: 'I found my dream job through the alumni network. The support and guidance I received were invaluable.',
      image: 'https://cdn.prod.website-files.com/5fbb9b89508062592a9731b1/6448c1ce35d6ffe59e4d6f46_GettyImages-1399565382.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      story: 'Attending the alumni events helped me expand my professional network and open new doors.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtElN9NGJktUDKrA0mtzP1r25ZkQxjulp7iY73BaZUpF0vTdGRgYrBLpCJMlw2Rwt6S40&usqp=CAU',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      story: 'The alumni association provided me with the resources and mentorship I needed to start my own business.',
      image: 'https://frankybros.com/wp-content/uploads/2022/12/corporate-shirts-logo-embroidery-for-employees-uniform-manufacturers-in-india.webp',
    },
    {
      id: 4,
      name: 'Emily Davis',
      story: 'Through the alumni mentorship program, I gained insights that helped me excel in my career.',
      image: 'https://cdn.woollen-wear.in/cache/data/uniforms/corporate-uniform/corporate-uniform-girls-1400x1782.jpg',
    },
    {
      id: 5,
      name: 'Sarah Lee',
      story: 'The connections I made at alumni events were crucial in landing my current position.',
      image: 'https://easy-feedback.de/wp-content/uploads/2022/10/Employee-Journey-What-it-is-and-how-to-improve-it.jpg',
    },
  ];

  return (
    <div className=" mx-auto py-12 bg-gradient-to-r from-green-600 to-blue-400">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {successStories.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img src={story.image} alt={story.name} className="w-full h-50 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{story.name}</h2>
              <p className="text-gray-600">{story.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;