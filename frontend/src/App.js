import React, { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          setMessage(data.message);
        }else {
          setMessage('Failed to fetch message.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessage('Error connecting to backend.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React and Flask App</h1>
        <p>Backend is running on port 5000, and frontend on port 3000.</p>
        <p>Database management is available at port 8080 via phpMyAdmin.</p>
        
        <h2>frontend-Backend Communication</h2>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
