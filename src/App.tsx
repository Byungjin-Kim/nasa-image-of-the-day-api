import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Nasaphoto from './Components/Nasaphoto';

interface NASAData {
  // Define NASA API data type
  title: string;

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


  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Hello World!</h1>
        </header>
      </div>
      <div className='Nasa-photo-wrapper'>
        {/*Conditional rendering using the &&*/}
        {data && <h2>{data.title}</h2>}

      </div>

    </>

  );
}

export default App;
