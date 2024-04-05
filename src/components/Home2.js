import React from "react";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import nitjlogo from "./nitjlogo.jpeg";
import Personaldetails from "./Personaldetails";
import Faq from "./Faq";


export default function Home() {
  return (
    <>
      <div className=" d-flex firstnav my-3 p-3">
        <nav className="nav">
          <img src={nitjlogo} alt="" className="nitjlogoHome" />
          <h5>
            Dr B R Ambedkar
            <h3>National Institute of Technology Jalandhar</h3>
          </h5>
        </nav>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-#07111A">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo} alt="" id="logo1" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <i className="ri-home-4-fill"></i> Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ri-menu-unfold-line"></i> Menu
                </a>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item bg-light" to="/faq">
                      Faq's
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item bg-light" to="/complaints">
                      Complaints portel
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item bg-light" to="/mycomplaints">
                      My Complaints
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <p className="text-light px-5">
                Welcome Roll.No , 22111040 Ramkrishna Mondal
              </p>
              <p className="text-light px-5">
                Chat here <i className="ri-chat-1-fill"></i>
              </p>
              <p className="text-light px-5">
                {" "}
                <i className="ri-tools-fill"> Change Password</i>
              </p>
              <button className="btn btn-outline-danger" type="submit">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      
      <table className="table">

        <thead>
          <tr>
            <th scope="col">Activity</th>
            <th scope="col">Personal Details Verification</th>
            <th scope="col">Driving License</th>
            <th scope="col">Payment</th>
            <th scope="col">Aadhar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="status">Status</th>
            <td>
              <Link to="/personaldetails">
                <button type="button" class="btn btn-success">
                  Completed
                </button>
              </Link>
            </td>
            <td>
              <Link to="/license">
              <button type="button" class="btn btn-danger">
                Pending
              </button>
              </Link>
            </td>
            <td>
              <Link to="/payment"><button type="button" class="btn btn-danger">
                Pending
              </button></Link>
            </td>
            <td>
              <Link to="/aadhar">
                <button type="button" class="btn btn-success">
                  Completed
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Personaldetails />
      <Faq />
      <footer>
        <div className="footer">
          <img src={logo} alt=""id="logo" className="nitjlogo" />
          <p>Copyright 2024 <i class="ri-copyright-line"></i></p>
          <p><i class="ri-facebook-fill"></i> <i class="ri-github-fill"></i> <i class="ri-instagram-fill"></i></p>
        </div>
      </footer>
    </>
  );
}
