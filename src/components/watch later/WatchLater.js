import React from 'react'
import { useSelector } from 'react-redux'
import { removeFromWatchLater } from '../../features/movies/moviesSlice';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


function WatchLater() {

    const data = useSelector(state => state.movies.watchLater)
    const base_url = "https://image.tmdb.org/t/p/original/";
    const dispatch = useDispatch()
    const navigate = useNavigate()
console.log(data)

function truncate(str, n){
    return str.length > n ? str.substr(0,n-1) + '...' : str; 
   }


    return (
        <div>
       
        <div style={{ padding: '20px',  display:'flex' }}>
            { 
             data.length ?   data.map((movie) => (
                <Card style={{ width: '18rem', marginLeft:'10px' }}>
  <Card.Img variant="top" src={`${base_url}${movie.backdrop_path}`} />
  <Card.Body>
    <Card.Title> {movie.original_name || movie.original_title} </Card.Title>
    <Card.Text>
    {truncate(movie.overview, 150)}
    </Card.Text>
    <Button variant="dark" onClick={() => {
            dispatch(removeFromWatchLater(movie.id))
        }} >Remove from Watch Later</Button>
    <Button variant="danger" style={{ marginTop:'8px' }}  onClick={() => {
            navigate('/movies')
        }} >Go back</Button>
  </Card.Body>
</Card>
                )) : <div> 
                <p>Your Watch Later is empty!</p>
                <button  onClick={() => {
                                    navigate('/movies')
                                }} > go back </button>
                 </div>
            }
            </div>
        </div>
    )
}

export default WatchLater

{/* <div style={{ display: 'flex' , height:'260px' }}>
<div>
    <img src={`${base_url}${movie.backdrop_path}`} style={{  height: '250px', width: '350px' , cursor: 'pointer' }} />
</div>
<div style={{ width: '800px', padding: '20px' }}>
    <h5> {movie.original_name || movie.original_title} </h5>
    <p> {movie.overview} </p>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '310px', }}>
        <button type="button" class="btn btn-dark" onClick={() => {
            dispatch(removeFromWatchLater(movie.id))
        }} >Remove from Watch Later</button>
        <button type="button" class="btn btn-secondary" style={{}} onClick={() => {
            navigate('/movies')
        }}  >Go back</button>
    </div>
</div>
</div> */}