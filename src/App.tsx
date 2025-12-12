import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Recipe from './pages/Recipe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  { ost_1 }  from '../src/assets/audios'
import Loading from './components/Loading'
import useLoading from './hooks/useLoading'

function App() {
  const audioRef = useRef(new Audio(ost_1));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const { loading } = useLoading();

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
    {loading.show && <Loading />}
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </Router>

    <div className="fixed bottom-2 left-2">
      <i className={`fa-regular fa-${!isPlayingMusic ? 'circle-play' : 'circle-pause'} fa-xl hover:cursor-pointer hover:scale-110 active:scale-75`}
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}>
      </i>
    </div>
    </>
  )
}

export default App
