import React, { useState } from 'react'
import nitj1 from "./nitj1.jpeg"
import nitj2 from "./nitj2.jpg"
import nitj3 from "./nitj3.jpg"
import nitjlogo from "./nitjlogo.jpeg"
import { Link, useHistory } from "react-router-dom"
import Validation from './LoginValidation'
import axios from 'axios'
export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({})

  const navigate = useHistory() ;
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const formErrors = Validation(values);
    setErrors(formErrors); 
    if (errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/signup',values)
      .then(res => {
        if (res.data === "success")
          navigate.push('/home');
        else
          alert("No record exists, please sign up")
      })
      .catch(err => console.log(err))
    }
  }
  return (
    <>
      <div className="container d-flex">
        <div className="welcome">
          <img src={nitjlogo} alt="" className="nitjlogo" />
          <h1 className="my-10">
            SafeCommute Compliance System
          </h1>
          <form action="" onSubmit={handleLogin}>
            <div className='mb-3'>
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                onSubmit={handleInput}
                name='email'
                type="text"
                placeholder="@nitj.ac.in"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
              onSubmit={handleInput}
                name='password'
                type="password"
                placeholder="AdharNo"
                className="form-control"
                id="exampleInputPassword1"
              />
              {errors.password && <span className='text-danger'>{errors.password}</span>}

            </div>
            <button type="submit" className="btn btn-primary">LogIn</button> 

            <Link to="/signup"><button type="button" className="btn btn-outline-success mx-4">Sign Up</button></Link>
          </form>
        </div>
        
        <div id="carouselExampleCaptions" className="carousel slide slider">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={nitj3} className="d-block w-100 img1" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>SAFE DRIVE SAVE LIVE !!!</h5>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={nitj2}className="d-block w-100 img1"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>ALWAYS WEAR HELMET !!!</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={nitj1} className="d-block w-100 img1"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>DRIVE SLOW !!!</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </>
  );
}
