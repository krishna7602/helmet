import React, { useRef, useState } from "react";
import useravatar from "./7309681.jpg";

export default function Personaldetails() {
    const [image, setImage] = useState(null);
    const hiddenFileInput = useRef(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      const imgname = event.target.files[0].name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxSize = Math.max(img.width, img.height);
          canvas.width = maxSize;
          canvas.height = maxSize;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(
            img,
            (maxSize - img.width) / 2,
            (maxSize - img.height) / 2
          );
          canvas.toBlob(
            (blob) => {
              const file = new File([blob], imgname, {
                type: "image/png",
                lastModified: Date.now(),
              });
  
              console.log(file);
              setImage(file);
            },
            "image/jpeg",
            0.8
          );
        };
      };
    };
  
    const handleUploadButtonClick = (file) => {
      var myHeaders = new Headers();
      const token = "adhgsdaksdhk938742937423";
      myHeaders.append("Authorization", `Bearer ${token}`);
  
      var formdata = new FormData();
      formdata.append("file", file);
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
  
      fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(JSON.parse(result));
          const profileurl = JSON.parse(result);
          setImage(profileurl.img_url);
        })
        .catch((error) => console.log("error", error));
    };
  
    const handleClick = (event) => {
      hiddenFileInput.current.click();
    };

  return (
    <>
      <div className="container d-flex">
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              value="Ramkrishna"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              value="Mondal"
              required
            />
            
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Branch
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              value="Biotech"
              required
            />
            
            <div className="valid-feedback">Looks good!</div>
            
            
          </div>
          <div className="col-md-4">
            <label for="validationCustomUsername" className="form-label">
              Roll No
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                value="22111040"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              value="jalandhar"
              required
            />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-3">
            <label for="validationCustom04" className="form-label">
              State
            </label>
            <select className="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>...</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="col-md-3">
            <label for="validationCustom05" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom05"
              required
            />
            <div className="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                Discrepancy (If any):
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
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
        </form>

        <div className="image-upload-container mx-5">
          <div className="box-decoration">
            <label htmlFor="image-upload-input" className="image-upload-label">
              {image ? image.name : "Choose an image"}
            </label>
            <div onClick={handleClick} style={{ cursor: "pointer" }}>
              {image ? (
                <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
              ) : (
                <img src={useravatar} alt="upload image" className="img-display-before" />
              )}

              <input
                id="image-upload-input"
                type="file"
                onChange={handleImageChange}
                ref={hiddenFileInput}
                style={{ display: "none" }}
              />
            </div>

            <button
              className="image-upload-button btn bg-success mx-5 mt-3"
              onClick={handleUploadButtonClick}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
