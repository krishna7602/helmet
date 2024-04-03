
import React, { useState } from "react"
import Validation from "./SignUpValidation";
import { Link } from "react-router-dom"
import axios from 'axios'

function SignUp() {
  const [values, setValues] = useState({
    fname: '',
    lname: '',
    email:'',
    password:''
  });

  // const navigate = useNavigate();
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = Validation(values);
    setErrors(formErrors); // Update errors state
    console.log(formErrors);
    console.log("abcd");
    if (errors.fname === "" && errors.lname === "" && errors.email === "" && errors.password === "") {
      axios.post('http://localhost:3000/signup', values)
      .then(res => {
        <Link to ="/"/>
      })
      .catch(err => console.log(err))
    }
}

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='p-3 rounded w-25'>
          <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
  <label htmlFor="fname"><strong>First Name</strong></label>
  <input type="text" onChange={handleInput} name="fname" id="fname" placeholder='First Name' className='form-control rounded-0'/>
  {errors.fname && <span className='text-danger'>{errors.fname}</span>}
</div>
            
<div className='mb-3'>
  <label htmlFor="lname"><strong>Last Name</strong></label>
  <input type="text" onChange={handleInput} name="lname" id="lname" placeholder='Last Name' className='form-control rounded-0'/>
  {errors.lname && <span className='text-danger'>{errors.lname}</span>}
</div>

<div className='mb-3'>
  <label htmlFor="email"><strong>Email</strong></label>
  <input type="email" onChange={handleInput} name="email" id="email" placeholder='Enter Email' className='form-control rounded-0'/>
  {errors.email && <span className='text-danger'>{errors.email}</span>}
</div>

<div className='mb-3'>
  <label htmlFor="password"><strong>Password</strong></label>
  <input type="password" onChange={handleInput} name="password" id="password" placeholder='Enter Password' className='form-control rounded-0'/>
  {errors.password && <span className='text-danger'>{errors.password}</span>}
</div>


          <button className='btn btn-success w-100 rounded-0'>Sign up</button>
          <p>You are agree to our terms and policies</p>
          <Link to ="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log In</Link>
       </form>
     </div>
    </div>
  );
}
export default SignUp