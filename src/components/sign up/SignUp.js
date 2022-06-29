import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { clearWatchLater } from '../../features/movies/moviesSlice'
import { useDispatch } from 'react-redux'


function SignUp() {

const[name, setName] = useState('')

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [data, setData] = useState([])
const dispatch = useDispatch()
const [newuser, setNewuser] = useState(false)
    const [ inputValues, setInputValues] = useState({
        name : '',
        email : '',
        password: '',
    })

    const navigate = useNavigate()

function inputChangeHandler(){
  
if ( name == '' || email == ''|| password == '' || !email.includes('@') ){
    alert('please fill the inputs')
    return
} else{
    setInputValues({
        name,
        email,
        password
    })
    
    localStorage.setItem("newuser", JSON.stringify({
        name,
        email,
        password
    }))
dispatch(clearWatchLater())
navigate('/movies')

}

    
}


  return (
    <section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" data-testid='signup-text'>Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" onChange={(e)=>{
                        setName(e.target.value)
                      }} />
                      <label className="form-label" for="form3Example1c" data-testid='label-name' >Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" onChange={(e)=>{
                        setEmail(e.target.value)
                      }} />
                      <label className="form-label" for="form3Example3c" data-testid='label-email' >Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" onChange={(e)=>{
                        setPassword(e.target.value)
                      }} />
                      <label className="form-label" for="form3Example4c" data-testid='label-password' >Password</label>
                    </div>
                  </div>

                  
                  

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" data-testid='register' onClick={()=>{
                      inputChangeHandler()
                    }}>Register</button>
                  </div>
                  <p> Already have an account <span> <NavLink to='/login'> Sign in </NavLink> </span> </p> 
                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default SignUp

// if(name == ''){
    //     alert('please fill the inputs')
        
    // } else if( email == '' ){
    //     alert('please fill the email')
    // } else if( !email.includes('@') ){
    //     alert('please enter the valid email')
    // } else{
        
    //      localStorage.setItem('userdata', JSON.stringify([...data, inputValues]))
    // }
    // console.log(inputValues)

    //sign up code inside return 

    //     <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
    


// <input type='text' placeholder='Name' onChange={(e)=>{
//     setName(e.target.value)
// }}></input>

// <input placeholder='E mail' onChange={(e)=>{
//     setEmail(e.target.value)
// }} ></input>

// <input type='password' placeholder='Password' onChange={(e)=>{
//   setPassword(e.target.value)
// }} ></input>
// <button onClick={()=>{
//     inputChangeHandler()
// }}> Register </button>
// {
//     newuser && <div><h2> New User Created </h2> <p><span> <NavLink to='/login'> Sign in </NavLink> </span> with new account</p>
//      </div>
// }


//    <p> Already have an account <span> <NavLink to='/login'> Sign in </NavLink> </span> </p> 


//     </div>