import React, { useState, useEffect } from 'react';
import alumniService from '../services/alumniService';

const AlumniDirectory = () => {
  const [alumni, setAlumni] = useState([]);
  const [searchParams, setSearchParams] = useState({
    name: '',
    graduationYear: '',
    industry: '',
  });

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const data = await alumniService.getAlumni();
        setAlumni(data);
      } catch (error) {
        console.error('Error fetching alumni:', error);
      }
    };

    fetchAlumni();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search params:', searchParams);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Alumni Directory</h1>
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-2">Search Alumni</h2>
        <form onSubmit={handleSearch} className="mb-4">
          <div className="mb-2">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={searchParams.name}
              onChange={(e) => setSearchParams({ ...searchParams, name: e.target.value })}
              className="border rounded px-3 py-2 w-full"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="graduation-year" className="font-bold">
              Graduation Year
            </label>
            <input
              type="number"
              id="graduation-year"
              value={searchParams.graduationYear}
              onChange={(e) => setSearchParams({ ...searchParams, graduationYear: e.target.value })}
              className="border rounded px-3 py-2 w-full"
              placeholder="Enter graduation year"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="industry" className="font-bold">
              Industry
            </label>
            <input
              type="text"
              id="industry"
              value={searchParams.industry}
              onChange={(e) => setSearchParams({ ...searchParams, industry: e.target.value })}
              className="border rounded px-3 py-2 w-full"
              placeholder="Enter industry"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Search
          </button>
        </form>
        <h2 className="text-xl font-bold mb-2">Alumni Profiles</h2>
        <ul>
          {alumni.map((profile) => (
            <li key={profile.id} className="border-b py-2">
              <h3 className="font-bold">{profile.name}</h3>
              <p>{profile.title}</p>
              <p>Graduated in {profile.graduationYear}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
                Connect
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlumniDirectory;