import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { error } from 'console';
import './Login.css'
import ButtonExample from '../Alerts/Loading';




const Login =()=> {
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
    axios.post("https://fullstack-student-backend.onrender.com/api/auth/login",data,headers)

    .then((response:any)=>{
      console.log(response.data);
      // localStorage.setItem("userid",response.data._id)
      // localStorage.setItem("userid",response.data.firstName)
      const userId = localStorage.getItem("userId");

      if (userId) {
      // User is logged in, set the authentication state accordingly
      }


      localStorage.setItem("userId", response.data._id);
      localStorage.setItem("firstName", response.data.firstName);

      navigate("/Home");
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
        <h2 className='AC'>Login To Your Account</h2>
        <>
        <form action="#" method="POST" onSubmit={handleSubmit}>
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
           Login
          </button>
        </div>
         )}
         {SuccessMessage && <div style={{ background: "green", color: "white",borderRadius:"5px",marginLeft:"auto",marginRight:"auto" }}>{SuccessMessage}</div>}
         {errorMessage && <div style={{background:"red",width:"50%",height:"30px",borderRadius:"5px",marginLeft:"auto",marginRight:"auto"}}>unsuccessful</div>}

        </form>
        </>
        <p className='AF'>
            Don't Have An Account?{' '}
            <p className='AG' ><Link to="/Signup" style={{color:"white"}}>SignUp</Link></p>
          </p>    
    </div>

</div>
    // <div className='DE'>
    //   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //       <img
            
    //         alt="Your Company"
    //         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //         className="mx-auto h-10 w-auto" />
    //       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
    //         Login To Stay Updated
    //       </h2>
    //     </div>

    //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //       <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
    //         <div>
    //           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    //           EmailAddress
    //           </label>
    //           <div className="mt-2">
    //             <input
    //             value={email}
    //             onChange={(e)=>setemail(e.target.value)}
    //               id="email"
    //               name="email"
    //               type="email"
    //               required
    //               autoComplete="email"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
    //           </div>
    //         </div>

    //         <div>
    //           <div className="flex items-center justify-between">
    //             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
    //               Password
    //             </label>
    //             <div className="text-sm">
    //               <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
    //                 Forgot password?
    //               </a>
    //             </div>
    //           </div>
    //           <div className="mt-2">
    //             <input
    //             value={password}
    //             onChange={(e)=>setpassword(e.target.value)}
    //               id="Password"
    //               name="Password"
    //               type="password"
    //               required
    //               autoComplete="current-password"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
    //           </div>
    //         </div>

    //          {Loading?(
    //           <div><ButtonExample/></div>
    //          ):(
    //           <div>
    //           <button
    //             type="submit"
    //             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Login
    //           </button>
    //         </div>
    //          )}
    //          {errorMessage && <div style={{background:"red"}}>unsuccessful</div>}
    //       </form>

    //     </div>
    //   </div>
    // </div>
  );
}


export default Login