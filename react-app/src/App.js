import React, { useEffect, useState } from 'react';
import ProjectTable from './components/ProjectTable';
import './App.css';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(' https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="app">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProjectTable projects={projects} />
      )}
    </div>
  );
};

export default App;
