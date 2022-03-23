import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import { registerInitiate } from '../redux/actions';
import {AiOutlineDown} from 'react-icons/ai';
import "./Register.css";

const Register=()=>{

  const [state, setState] = useState({
    displayName: '',
    email:'',
    password:'',
    passwordConfirm: '' ,
   });

const {currentUser} = useSelector((state) => state.user);

const history = useHistory();

useEffect(()=>{
  if(currentUser){
    history.push('/');
  }
},[currentUser, history]);


   const dispatch = useDispatch();

  const{email, password, displayName, passwordConfirm} = state;

  const handleSubmit =(e) =>{
    e.preventDefault();
    if(password !== passwordConfirm){
      return alert("Passwords don't match");
    }
    dispatch (registerInitiate(email, password, displayName));
    setState({email:"", displayName: "", password: "", passwordConfirm: ""})
    alert ("You have successfully registered");
    };
  const handleChange =(e) =>{
    let {name, value} = e.target;
    setState({...state, [name]: value});
  };
  return (
    <div>
        <div id= "register-form">
          <form className="form-signup" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
            Create Account
              </h1>

<div className="form-control">
  <div className="form-data">
  <select style={{width:"80%"}}>
<i className="fas fa-sign-in-alt"></i>
<option value = "Select-Country">--Select Country--</option>
  <option value = "India">India</option>
  <option value = "USA">USA</option>
  <option value = "UK">UK</option>
  <option value = "Canada">Canada</option>
  <option value = "America">America</option>
    <option value = "Denmark">Denmark</option>
      <option value = "France">France</option>
        <option value = "Germany">Germany</option>
          <option value = "Italy">Italy</option>
            
</select>
  </div>
</div>
<p className='Pass-data'>You will be unable to change your country/region after your account is created</p>


              <input
              type="text"
              id="displayName"
              className="form-control"
              placeholder="Full Name"
              name="displayName"
              onChange={handleChange}
              value={displayName}
              required
              />

              <input
              type="email"
              id="userEmail"
              className="form-control"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              value={email}
              required
              />

            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
              required
              />

              <input
              type="password"
              id="passwordConfirm"
              className="form-control"
              placeholder="Confirm Password"
              name="passwordConfirm"
              onChange={handleChange}
              value={passwordConfirm}
              required
              />
              <br/>
              <p className='Pass-data'>Password must contain 6-16 characters atleast two of the following digits letters or symbols</p>
            
              <button className="block" type="submit">
                Create account
              </button>
            <Link to="/login">
             <i className="fas fa-angle-left"></i> Back
              </Link>
          </form>
          <br/>
        </div>
    </div>
  )
}

export default Register;