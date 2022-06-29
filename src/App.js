
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/sign up/SignUp';
import Login from './components/login/Login';
import Movies from './components/movies/Movies';
import Movie from './components/Movie';
import Profile from './components/Profile';
import WatchLater from './components/watch later/WatchLater';
import Root from './Root';


function App() {
  return <BrowserRouter>
     <Root />
  </BrowserRouter>
}

export default App;
