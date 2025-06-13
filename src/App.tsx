import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Recipe from './pages/Recipe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  { ost_1 }  from '../src/assets/audios'

function App() {
  const audioRef = useRef(new Audio(ost_1));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </Router>

    <div className="absolute bottom-2 left-2">
      <i className={`fa-regular fa-${!isPlayingMusic ? 'circle-play' : 'circle-pause'} fa-xl hover:cursor-pointer`}
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}>
      </i>
    </div>
    </>
  )
}

export default App
