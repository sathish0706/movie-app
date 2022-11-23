import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect } from 'react';


export function EditMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  let { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
   fetch(`https://62b184d2c7e53744afbae3ce.mockapi.io/movies/${id}`)
   .then(data => data.json())
   .then(mv => setMovie(mv))
  },[])


  const navigate = useNavigate();
  
const handleAddMovie = () =>{
  console.log("Aaaa")
      navigate("/movies-list")
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
          };
          // setMovieList([...movieList, newMovie]);

          fetch("https://62b184d2c7e53744afbae3ce.mockapi.io/movies",{
            method:"POST",
            body : JSON.stringify(newMovie),
            headers:{
             "Content-Type": "application/json"
            }
          })
          .then(data => data.json())
}
  return (
    <div className='add-movie-container'>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100ch' },
        }}
      >
        <TextField id="outlined-basic" label="Name" variant="outlined"
          onChange={(e) => setName(e.target.value)} value={movie.name}/><br />
        <TextField id="filled-basic" label="poster" variant="outlined"
          onChange={(e) => setPoster(e.target.value)} value={movie.poster}/><br />
        <TextField id="standard-basic" label="Rating" variant="outlined"
          onChange={(e) => setRating(e.target.value)} value={movie.rating}/><br />
        <TextField id="standard-basic" label="Summary" variant="outlined"
          onChange={(e) => setSummary(e.target.value)} value={movie.summary}/><br />
        <TextField id="standard-basic" label="Trailer" variant="outlined"
          onChange={(e) => setTrailer(e.target.value)} value={movie.trailer}/><br />
        <Button variant="contained" color='success' onClick={()=>handleAddMovie()}>
        Save Movie</Button>
      </Box>
    </div>
  );
}
