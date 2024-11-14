import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { error } from 'console';
import './Signup.css'
import ButtonExample from '../Alerts/Loading';






const SignUp =()=> {
  const [firstName,setfirstName]=useState("")
  const [lastName,setlastName]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const [SuccessMessage,setSuccessMessage]=useState("")
  const [errorMessage,seterrorMessage]=useState("")
  const [Loading,setLoading]=useState(false)

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);

  const navigate =useNavigate();
  const handleSubmit =(e: any)=>{
    e.preventDefault();
    setLoading(true)
    const data={
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    };
    const headers: any ={
      "content-Type":"application/json",
    };
    axios.post("https://fullstack-student-backend.onrender.com/api/auth",data,headers)

    .then((response:any)=>{
      console.log(response.data);
      localStorage.setItem("userid",response.data._id)
      localStorage.setItem("userid",response.data.firstName)
      navigate("/Login");
      setLoading(false)
      if (response.data){
        setSuccessMessage("Successful");
      }
      else{

      }
    })
    .catch((error:any)=>{
      setLoading(false);
      seterrorMessage('Invalid user credentials,unsuccessful')
    });
  };
  return (
    <div className='AA'>
        <div className='AB'>
            <h2 className='AC'>Reagister Or Login To Continue</h2>
            <>
            <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className='AD'>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                FirstName
              </label>
              <div className="mt-2">
                <input 
                value={firstName}
                onChange={(e)=>setfirstName(e.target.value)}
                  id="firstName"
                  name="firstname"
                  type="name"
                  required
                  autoComplete="name"
                  className="block w-custom rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className='AD'>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                lastName
              </label>
              <div className="mt-2">
                <input
                value={lastName}
                onChange={(e)=>setlastName(e.target.value)}
                  id="lastName"
                  name="lastName"
                  type="name"
                  required
                  autoComplete="name"
                  className="block w-custom rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className='AD'>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              EmailAddress
              </label>
              <div className="mt-2">
                <input
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-custom rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className='AD'>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
               </div>
              <div className="mt-2">
                <input
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                  id="Password"
                  name="Password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-custom rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            {Loading?(
              <div><ButtonExample/></div>
             ):(
              <div className='AD'>
              <button
                type="submit"
                className='AH'
              >
                Sign Up
              </button>
            </div>
             )}
             {SuccessMessage && <div style={{ background: "green", color: "white",borderRadius:"5px",marginLeft:"auto",marginRight:"auto" }}>{SuccessMessage}</div>}
             {errorMessage && <div style={{background:"red",width:"50%",height:"40px",borderRadius:"5px",paddingTop:"10px",marginLeft:"auto",marginRight:"auto"}}>unsuccessful</div>}

            </form>
            </>
            <p className='AF'>
            Already Have An Account?{' '}
            <p className='AG' ><Link to="/Login" style={{color:"white"}}>LogIn</Link></p>
          </p>    
        </div>

    </div>
  )
}


export default SignUp