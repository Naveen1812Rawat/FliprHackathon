import React, { useState } from 'react'
import '../App.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate();    
  const [userRegistration, setuserRegistration] = useState({
        username: "",
        password: "",
    });

    const handleInput = (e)=>{
      const name = e.target.name;
      var value = e.target.value;
      setuserRegistration({...userRegistration, [name] : value});
      console.log(name, value);
    }

    const handleSubmit = async (e) =>{
      e.preventDefault();
      const {username, password } = userRegistration;
        await fetch("http://flipr-hackathon1.onrender.com/index", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      })
        .then(function (response) {         
          return response.json(); // call the json method on the response to get JSON
        })
        .then(function (d) {
            console.log(d);
            if(d === 'Successfully logged in'){
              navigate('/justchecking');
            }
            else{
              window.alert(d);
            }
          } 
        );
    };    

  return (
    <section className="background-radial-gradient" style={{height: "100vh"}}>
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{zIindex: "10"}}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
              The best time is <br />
              <span style={{color: "hsl(218, 81%, 75%)"}}>Now or Never</span>
            </h1>
            <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
              Want to know stock market trends and hikes?
            </p>
            <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
              Then it is the place. So, tie up your lace and follow the pace, to grow from bottom of the base to top of the space.
            </p>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form action='submit'>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">username</label>
                    <input type="text" autoComplete='off' id="form3Example3" className="form-control" onChange={handleInput} name="username" value={userRegistration.username}/>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" autoComplete='off' id="form3Example4" className="form-control" onChange={handleInput} name="password" value={userRegistration.password}/>
                  </div>
                  <p>Don't have an account?
                    <NavLink to='/register' className="auth-btn">Register</NavLink>
                  </p>
                  <button type="submit" className="btn btn-primary btn-block mb-4" style={{width: "100%"}} onClick={handleSubmit}>
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  }

export default Auth
