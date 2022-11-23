import React, { useEffect, useState } from 'react';
import './App.css';
import { AddMovie } from './AddMovie';
import { MovieList } from './MovieList';
import { Routes, Route } from "react-router-dom";
import AddColor from './AddColor';
import { MovieDetails } from './MovieDetails';
import { NotFound } from './NotFound';
import Home from './Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Topbar } from './Topbar';
import Paper from '@mui/material/Paper';
import { EditMovie } from './EditMovie';

function App() {
  const [movieList, setMovieList] = useState([]);

 useEffect(() => {
  fetch("https://62b184d2c7e53744afbae3ce.mockapi.io/movies")
  .then(data => data.json())
  .then(mvs => setMovieList(mvs))
 },[])

  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});

  return (
    <ThemeProvider theme={darkTheme}>
    <Paper elevation={3} sx={{minHeight: "100vh", borderRadius:"0px"}}>
  <div className='App'>
        <Topbar setMode={setMode} mode={mode}/>
        <div className='route-container'>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add-movie" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/list" element={<MovieList  />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/edit/movies/:id" element={<EditMovie/>} />

        </Routes>
        </div>
  </div>
  </Paper>
  </ThemeProvider>
  
  )}
export default App;
