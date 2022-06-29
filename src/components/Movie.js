import { useState, useEffect, React } from 'react'
import axios from '../axios'
import { useParams, useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { Button } from 'react-bootstrap';


function Movie() {

            const [movie, setMovie] = useState([])
            const base_url = "https://image.tmdb.org/t/p/original/";
            const [trailerUrl, setTrailerUrl] = useState('')
            const API_KEY = "97f5267e04399c52c0805b4b9a2401cc";
            const navigate = useNavigate()
            const { id } = useParams()
            const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
        const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
        const topRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`
        const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
   

    useEffect(() => {

        async function fetchMovie() {
            const res1 = await axios.get(trending)
            const res2 = await axios.get(topRated)
            const res3 = await axios.get(comedy)
            const res4 = await axios.get(romance)
            const allMovies = res1.data.results.concat(res2.data.results, res3.data.results, res4.data.results)
            const singleMovie = allMovies.filter((d) => (
                d.id == id
            ))        
            setMovie(singleMovie)
          
        }

        fetchMovie()

    }, [])
   
    function trailerText() {
        const text = trailerUrl ? 'End Trailer' : 'Watch Trailer'
        return text
    }
    function handleClick(movie) {
        if (trailerUrl) {
            setTrailerUrl(null)
        } else {
            movieTrailer(movie.original_name || movie.original_title)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {
                movie.map((item) => (
                    <div style={{ padding: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            <img src={`${base_url}${item.backdrop_path}`} style={{ height: '350px', width: '470px', objectFit: 'contain' }} />
                            <div>
                                <button type="button" class="btn btn-danger" style={{ height: '50px', width: '200px', marginTop: '120px' }} onClick={() => {
                                    handleClick(item)
                                }} > {trailerText()} </button>

                                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                    <h6>IMDB : {item.vote_average} </h6>
                                    <h6> Realease Date : {item.release_date || item.first_air_date} </h6>
                                </div>
                            </div>
                        </div>
                        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                        <h4 style={{ marginTop: '20px' }}> {item.original_name || item.original_title} </h4>

                        <div style={{ width: '800px' }}>
                            <p> {item.overview} </p>
                            <Button onClick={() => {
                                navigate('/movies')
                            }} variant="dark">Go back</Button>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default Movie

// <button  onClick={() => {
//     navigate('/movies')
// }} > go back </button>