import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const navigate = useNavigate()

  const notify = () => toast("please fill the valid inputs!");
  const loginFail = () => toast('Login Failed!!')

  function loginHandler() {

    if (email === '' || password === '' || !email.includes('@')) {
      notify()
      
      return
    } else {
      const getuser = localStorage.getItem("newuser")
      if (!getuser){
        notify()
      } else{
        const authUser = JSON.parse(getuser)
        if (email == authUser.email && password == authUser.password) {
          navigate('/movies')
          
        } else {
          loginFail()
          console.log('login failed')
        }
      }
      
     

      // if(email === authUser.email || password === authUser.password ){
      // setValid('user is successfully logged in')
      // }else{
      //   console.log('user is not authenticated!! ')
      // }


    }



  }


  return (
    <section class="vh-100">
  <ToastContainer />
  <div className="container-fluid h-custom">

    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>


          
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" data-testid='searchBar' onChange={(e) => {
        setEmail(e.target.value)
        }} />
            <label className="form-label" for="form3Example3" data-testid='label-email' >Email address</label>
          </div>

          
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password"  onChange={(e) => {
        setPassword(e.target.value)
      }}/>
            <label className="form-label" for="form3Example4" data-testid='label-password' >Password</label>
          </div>

          

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"  data-testid='loginBtn'
              style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} onClick={() => {
        loginHandler()
      }}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger" onClick={()=>{
                  navigate('/')
                }}>Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
  );
}


    // <div>

    //   <input placeholder='E mail' onChange={(e) => {
    //     setEmail(e.target.value)
    //   }} ></input>

      // <input type='password' placeholder='Password' onChange={(e) => {
      //   setPassword(e.target.value)
      // }} ></input>

      // <button onClick={() => {
      //   loginHandler()
      // }}>Login</button>

    //   {
    //     <h1> {valid} </h1>
    //   }


    // </div>
  


export default Login