import React from "react";
import nitjlogo from "./nitjlogo.jpeg";
import { Link } from "react-router-dom";
export default function Id() {
  return (
    <>
      <div className="container">
        <div className="container1"><img src={nitjlogo} alt="" /></div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Submit Your College Id
          </label>
          <input className="form-control" type="file" id="formFile" />
          <Link to="/home">
          <div class="d-grid gap-2">
            <button class="btn btn-outline-primary my-4" type="button">
              Submit
            </button>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}
