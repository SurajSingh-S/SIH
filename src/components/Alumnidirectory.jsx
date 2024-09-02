// src/components/AlumniDirectory.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Adjust the import if necessary
import { collection, getDocs } from 'firebase/firestore';

const Alumnidirectory = () => {
  const [alumni, setAlumni] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAlumni = async () => {
      const alumniCollection = collection(db, 'alumni');
      const alumniSnapshot = await getDocs(alumniCollection);
      const alumniList = alumniSnapshot.docs.map(doc => doc.data());
      setAlumni(alumniList);
    };

    fetchAlumni();
  }, []);

  const filteredAlumni = alumni.filter((alum) => 
    alum.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    alum.graduationYear.toString().includes(searchTerm) ||
    alum.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Alumni Directory</h1>
        
        <input
          type="text"
          className="w-full p-3 mb-6 text-lg rounded-md shadow-md"
          placeholder="Search by name, graduation year, or industry"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alum, index) => (
              <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold mb-2">{alum.name}</h2>
                <p className="text-gray-700">Graduation Year: {alum.graduationYear}</p>
                <p className="text-gray-700">Industry: {alum.industry}</p>
                <p className="text-gray-700">Location: {alum.location}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No alumni found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alumnidirectory;
