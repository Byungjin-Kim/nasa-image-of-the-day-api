import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

// import Nasaphoto from './Components/Nasaphoto';

interface NASAData {
  // Define NASA API data type
  title: string;
  date: string;
  explanation: string;
  url: string;

}

const apiKey = process.env.REACT_APP_NASA_API_KEY;
const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`


function App() {
  const [data, setData] = useState<NASAData | null>(null);

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data);
          setData(res.data);
        })
        .catch(err => {
          console.log(err.message);
        })
    }
    fetchPhoto();
  }, [])

  if (!data) return <div>Fetching image of the day</div>;


  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Hello World!</h1>
        </header>
      </div>
      <div className='Nasa-photo-wrapper'>
        <h2>{data.title}</h2>
        <p>{data.date}</p>

        <img src={data.url} alt='Nasa today' />
        <p className="explanation">{data.explanation}</p>

      </div>

    </>

  );
}

export default App;
