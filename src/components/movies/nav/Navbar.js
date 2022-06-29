import React from 'react'
import { searchHandler } from '../../../features/movies/moviesSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState,  } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {

    const [search, setSearch] = useState('')
    const {data,status, getmovies, addClass } = props
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    const count = useSelector(state => state.movies.watchLater.length)
    function logOut() {
        // localStorage.removeItem("newuser")
        navigate('/')
        }

  return (
    <div>
         <nav class="navbar navbar-dark bg-dark" style={{ height: '80px' }} >
        <div style={{ marginLeft: '42px' }}>
          {
            data.map((btn) => (
              <button type="button" class={addClass(btn)} style={{ marginLeft: '5px' }} onClick={() => {
                status(btn)
                getmovies(btn)
              }}> {btn} </button>             
            ))
          }
        </div>
        <input placeholder='search' style={{ borderRadius:'10px', border:'none' }} onChange={(e)=>{
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
      </nav>
    </div>
  )
}

export default Navbar