import React from "react";
import nitjalandhar from "./NIT-Jalandhar.jpg";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <>
      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Serial</th>
              <th scope="col">No Of Tokens</th>
              <th scope="col">Rs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="status">1</td>
              <td>4</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
        <div className="card">
          <div className="card-body bg-danger">You need not to pay any type of penalty until your token reaches more than three. After three tokens for each token you have to pay 100 rs.</div>
        </div>
        <div className="containerpayment my-5 d-flex ">
          <div class="card">
            <img src={nitjalandhar} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tokens Genrated</h5>
              <p class="card-text">you have 4 tokens</p>
              <a href="#" class="btn btn-danger">
                Pay Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
