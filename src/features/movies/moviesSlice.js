import { createAsyncThunk ,createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'



const API_KEY = "97f5267e04399c52c0805b4b9a2401cc";
const initialState = {
    movies : [],
    watchLater : []
  };

  export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const res = await axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`);
    return res.data;
  });

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
     addMovie : (state, action)=>{
      state.movies = action.payload
     },
     addToWatchLater(state,action){
      state.watchLater.push(action.payload)
     },
     removeFromWatchLater(state, action){
       state.watchLater =  state.watchLater.filter((d)=>(
          d.id != action.payload
        ))
     },
     clearWatchLater(state, action){
      state.watchLater = []
     },
     searchHandler(state, action){
       const newArr = state.movies.filter((d)=>(
        d.original_name||d.original_title.toLowerCase().includes(action.payload.toLowerCase())
       ))
       state.movies = newArr
     }
   
    },
    extraReducers(buider) {
        buider
          .addCase(fetchMovies.pending, (state, action) => {
            console.log("pending");
          })
           
          .addCase(fetchMovies.fulfilled, (state,action)=>{
             state.movies = action.payload.results
             console.log(action.payload)

          })
          .addCase(fetchMovies.rejected, () => {
            console.log("rejected");
          });
      },

  });

  export default moviesSlice.reducer
  export const { addMovie, addToWatchLater, removeFromWatchLater, clearWatchLater, searchHandler } = moviesSlice.actions;
  