import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Profile() {


    const navigate = useNavigate()
    const user = localStorage.getItem("newuser")
    const userProfile = JSON.parse(user)
    console.log(userProfile)
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
        <h2> {userProfile.name} </h2>
        <p> E mail : {userProfile.email} </p>
        <button onClick={()=>{
            navigate('/movies')
        }}>Go Back</button>
    </div>
  )
}

export default Profile