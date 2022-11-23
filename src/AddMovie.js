import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';

export function AddMovie({ movieList, setMovieList }) {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const {onBlur,onChange,onSubmit,values,errors} = useFormik({
    initialValues:{
      name:"",
      poster:"",
      rating:"",
      summary:"",
      trailer:""
    }
  });
  
  const navigate = useNavigate();
  
// const handleAddMovie = () =>{
//       navigate("/movies-list")
//           const newMovie = {
//             name: name,
//             poster: poster,
//             rating: rating,
//             summary: summary,
//             trailer: trailer
//           };
//           // setMovieList([...movieList, newMovie]);

//           fetch("https://62b184d2c7e53744afbae3ce.mockapi.io/movies",{
//             method:"POST",
//             body : JSON.stringify(newMovie),
//             headers:{
//              "Content-Type": "application/json"
//             }
//           })
//           .then(data => data.json())
// }

  return (
    <div className='add-movie-container'>
      <Box
        component="form"
        handleSubmit={onSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '100ch' },
        }}
      >
        <TextField 
        name="name"
        label="Name" 
        variant="outlined"
        handleBlur={onBlur}
        handleChange={onChange}
        values={values.name}
       
         /><br />

        <TextField
        name="poster"
        label="Poster" 
        variant="outlined"
        handleBlur={onBlur}
        handleChange={onChange} 
        values={values.poster}
       
         /><br />

        <TextField 
        name="rating"
        label="Rating" 
        variant="outlined"
        handleBlur={onBlur}
        handleChange={onChange}
        values={values.rating} /><br />

        <TextField  
        name="summary"
        handleBlur={onBlur}
        handleChange={onChange}
        values={values.summary}
        label="Summary" 
        variant="outlined"

         /><br />

        <TextField 
        name="trailer"
        handleBlur={onBlur}
        handleChange={onChange}
        values={values.trailer} 
        label="Trailer" 
        variant="outlined"
         /><br />
        <Button variant="contained" type='submit'>
        Add Movie</Button>
      </Box>
    </div>
  );
}
