import React from "react"
import nitj1 from "./nitj1.jpeg"
import nitj2 from "./nitj2.jpg"
import nitj3 from "./nitj3.jpg"
import nitjlogo from "./nitjlogo.jpeg"

import { Link } from "react-router-dom"

export default function Landingpage() {

  return (
    <>
      <div className="container d-flex">
        <div className="welcome">
          <img src={nitjlogo} alt="" className="nitjlogo" />
          <h1 className="my-10">
            SafeCommute Compliance System
          </h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                placeholder="@nitj.ac.in"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="AdharNo"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            
            <Link to="/home"><button type="button" className="btn btn-primary">LogIn</button></Link>
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
