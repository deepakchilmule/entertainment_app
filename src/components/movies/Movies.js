import { useState, useEffect, React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, addMovie, addToWatchLater } from '../../features/movies/moviesSlice';
import { useNavigate } from 'react-router-dom';
import request from '../../axios'
import './movies.css'
import Modal from './modal/Modal';
import Navbar from './nav/Navbar';


function Movies() {

  const base_url = "https://image.tmdb.org/t/p/original/";
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies.movies)
  const navigate = useNavigate() 
  const API_KEY = "97f5267e04399c52c0805b4b9a2401cc";
  const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
  const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
  const topRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`
  const buttons = ['Trending', 'Top Rated', 'Comedy', 'Romance']
  const [showModal , setShowModal] = useState(false)
  const [status, setStatus] = useState('Trending')
  const [modalData, setModalData] = useState({})
 

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

    async function getMovies(btn) {
    const res = btn == 'Top Rated' ? await request.get(topRated) : btn == 'Comedy' ? await request.get(comedy) : btn == 'Romance' ? await request.get(romance) : await request.get(trending)
    dispatch(addMovie(res.data.results))
    }

    function addClassName(btn) {
    const addClass = status == btn ? 'btn btn-danger' : 'btn btn-outline-danger';
    return addClass
    }

    function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
    }
console.log(movies)
  return (
    <div>
    <Navbar data={buttons} status ={setStatus} getmovies={getMovies} addClass = {addClassName} />

   {  showModal &&  <Modal data={modalData} closeModal={setShowModal}  /> }

      <div style={{ padding: '30px', display: 'flex', paddingLeft: '50px', flexWrap: 'wrap', }} data-testid='moviesdiv' >
        {
          movies.map((d) => (
            <div class="card" style={{ width: '18rem', marginLeft: '15px', marginBottom: '8px' }}>
              <img src={`${base_url}${d.poster_path}`} style={{ height: '200px', width: '285px', cursor: 'pointer' }} className='poster' alt="..." onClick={() => {
                navigate(`${d.id}`)
              }} />
              <div class="card-body">
                <h5 style={{ cursor: 'pointer' }} onClick={() => {
                  setShowModal(true)
                  setModalData(d)
                }}> {d.original_name || d.original_title} </h5>
              <p class="card-text"> {truncate(d.overview, 150)}  </p>
              </div>
              <button type="button" class="btn btn-outline-primary" data-testid='watchLater' style={{ marginTop: '-15px' }} onClick={() => {
                dispatch(addToWatchLater(d))
              }} >Add to Watch Later</button>
            </div>
          )
          )
        }
      </div>  
    </div>
  )
}

export default Movies





{/* <div>
    <div style={{ position:"relative" }}>
    <img src={`${base_url}${d.poster_path}`} style={{ height:'100px' , width:'100px' }} />
    <h3 style={{ position:'absolute', left:'50px' }}> {d.original_name || d.original_title } </h3>
    </div>
    
    <p> {d.overview} </p>
    </div> */}

//     <div key={d.id} style={{ marginRight: '10px' , border:'1px solid red' }} >
//     <div style={{ position: 'relative' }}>
//       <img src={`${base_url}${d.poster_path}`} style={{ height: '200px', width: '200px', cursor: 'pointer' }} onClick={() => {
//         handleClick(d)
//         // navigate(`${d.id}`)
//       }} />

//     </div>
//     <h2 style={{ cursor:'pointer' }} onClick={()=>{
//       navigate(`${d.id}`)
//     }}> {d.original_name || d.original_title} </h2>

// {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//     <p>
//     {truncate(d.overview, 250)} 
//       </p>
//   </div>


{/* <nav style={{ display:'flex', justifyContent:"space-around", paddingLeft:'40px', paddingRight:'40px' , paddingBottom:'20px', paddingTop:'20px' }}>
    <div>
    {
        buttons.map((btn) => (
          <button className={addClassName(btn)} onClick={() => {
            setStatus(btn)
            getMovies(btn)
            console.log(btn)
          }} > {btn} </button>
        ))
      }
      </div>
      <div>
        <input placeholder='search' onChange={(e)=>{
     searchHandler(e)
        }} />
      </div>
      <div style={{ cursor:'pointer' }} onClick={()=>{
        navigate('/profile')
      }}>
        profile <button onClick={()=>{
          logOut()
        }}> Log Out </button>
      </div>
    </nav> */}


// actual

{/* */ }
{/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Navbar</a>

//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">

//     {
//       buttons.map((btn) => (
//         <button className={addClassName(btn)} onClick={() => {
//           setStatus(btn)
//           getMovies(btn)
//           console.log(btn)
//         }} > {btn} </button>
//       ))
//     }

//     </ul>

//   </div>


// </nav>

{/* <button className={addClassName(btn)} onClick={() => {
            setStatus(btn)
            getMovies(btn)
            console.log(btn)
          }} > {btn} </button> */}

           {/* <nav class="navbar navbar-dark bg-dark" style={{ height: '80px' }} >
        <div style={{ marginLeft: '42px' }}>
          {
            buttons.map((btn) => (
              <button type="button" class={addClassName(btn)} style={{ marginLeft: '5px' }} onClick={() => {
                setStatus(btn)
                getMovies(btn)

              }}> {btn} </button>
              
            ))
          }
        </div>
        <input placeholder='search' onChange={(e)=>{
          setSearch(e.target.value)
          dispatch(searchHandler(search))                      
        }} />
        <div>
          <button type="button" class="btn btn-danger"  style={{ marginRight: '100px' }} onClick={() => {
            navigate('/watchlater')
          }}> Watch Later [{count}] </button>
          <button type="button" class="btn btn-outline-info" data-testid='logOutBtn' style={{ marginRight: '120px' }} onClick={() => {
            logOut()
          }}>Log Out</button>
        </div>
      </nav> */}