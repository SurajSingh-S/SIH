//import api from './api';

const alumniService = {
    getAlumni: async () => {
      return await api.fetchAlumni();
    },
    // Add more alumni-related methods as needed
  };
  
  export default alumniService;
  
  