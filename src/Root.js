import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Movie from './components/Movie'
import Movies from './components/movies/Movies'
import Profile from './components/Profile'
import SignUp from './components/sign up/SignUp'
import WatchLater from './components/watch later/WatchLater'

function Root() {
    
  return (
    <div>
        <Routes>

<Route path='/' element={ <SignUp /> } />
<Route path='/login' element={ <Login /> }  />
<Route path='/movies' element={ <Movies /> }  />
<Route path='/movies/:id' element={ <Movie /> }  />
<Route path='/profile' element={ <Profile /> }  />
<Route path='/watchlater' element={ <WatchLater /> }  />
</Routes>
    </div>
  )
}

export default Root