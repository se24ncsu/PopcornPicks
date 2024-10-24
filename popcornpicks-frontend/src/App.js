import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getData()   
  },[])
  async function getData() {
    const data = await fetch(
      "/meow"
    );
    const json = await data.json()
    setMovies(json)
  }
  return (
    <div className="App">
      <Navbar />
      <Header />
      <p>{movies.server}</p>
    </div>
  );
}

export default App;
