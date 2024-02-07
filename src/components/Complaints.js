import React from "react";

export default function Complaints() {
  return (
    <>
      <div className="container">
        <h5>Register a New Complaint</h5>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          <div className="col-md-3 my-3">
            <label for="validationCustom04" className="form-label">
              Select Complaint Type
            </label>
            <select className="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option className="bg-light">1</option>
              <option className="bg-light">2</option>
              <option className="bg-light">3</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
            <div class="mb-3 my-3">
              <label for="formFile" class="form-label">
                Upload Screenshot
              </label>
              <input class="form-control" type="file" id="formFile" required />
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                Discrepancy (If any):
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  cols="10"
                ></textarea>
              </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-info" type="submit">
              verify & save
            </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
