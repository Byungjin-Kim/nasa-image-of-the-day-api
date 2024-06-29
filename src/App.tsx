import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import NasaImg from './Components/NasaImg';
import Figure from './Components/Figure';

// Define NASA API data type
interface NASAData {
  title: string;
  date: string;
  explanation: string;
  url: string;
}

const apiKey = process.env.REACT_APP_NASA_API_KEY;
const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

function App() {
  const [data, setData] = useState<NASAData | null>(null);

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          setData(res.data);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
    fetchPhoto();
  }, []);

  if (!data) return <div>Fetching image of the day</div>;

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>NASA</h1>
          <h3>Astronomy Picture of the Day</h3>
        </header>
      </div>
      <div className="content-wrapper">
        <div className="image-container">
          <Figure
            url={data.url}
            date={data.date}
          />
        </div>
        <NasaImg
          title={data.title}
          explanation={data.explanation}
        />
      </div>
    </>
  );
}

export default App;
