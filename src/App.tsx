import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Nasaphoto from './Components/Nasaphoto';

interface NASAData {
  // Define NASA API data type
}

function App() {
  const [data, setData] = useState<NASAData | null>(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;
    axios.get<NASAData>(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
    </div>
  );
}

export default App;
