import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import NasaImg from './Components/NasaImg';

interface NASAData {
  // Define NASA API data type
  title: string;
  date: string;
  explanation: string;
  url: string;
}

interface FigureProps {
  url: string;
  date: string;
}

const apiKey = process.env.REACT_APP_NASA_API_KEY;
const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`



function Figure({ url, date }: FigureProps) {
  return (
    <figure>
      <img src={url} alt='Nasa today' />
      <figcaption>Awesome img taken on {date}</figcaption>
    </figure>
  )
}

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
      <NasaImg
        title={data.title}
        explanation={data.explanation}

      />
      <Figure
        url={data.url}
        date={data.date}
      />
    </>

  );
}

export default App;
