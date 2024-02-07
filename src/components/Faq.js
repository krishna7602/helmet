import React from "react";

export default function Faq() {
  return (
    <>
    <div className="container">
        <h5><strong>FAQ'S:</strong></h5>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is the safecommute?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body bg-light">
      The safecommute System is a technology-driven initiative aimed at promoting road safety by penalizing bikers who do not use helmets while riding.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How can I avoid fines?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body bg-light">
      To avoid fines, always wear a helmet while riding a motorcycle. Ensure that your helmet is securely fastened and meets the necessary safety standards.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How does the system work?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body bg-light">
      The system utilizes advanced cameras and sensors installed at strategic locations to detect bikers without helmets. Once a violation is detected, the system captures relevant information and issues a fine to the violator.
      </div>
    </div>
    </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Can I dispute a fine?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body bg-light">
      If you believe a fine has been issued incorrectly, you may follow the designated process for disputing fines as outlined by  authorities.
      </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What happens if I refuse to pay the fine?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body bg-light">
      The Helmet Non-Compliance System is designed to prioritize privacy. The collected data is typically used solely for enforcing road safety regulations and is handled in accordance with privacy laws.
      </div>
    </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
}
