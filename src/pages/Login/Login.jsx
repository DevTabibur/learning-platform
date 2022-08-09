import React from "react";
import './Login.css';
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <div className='h-screen flex bg-accent justify-center items-center'>
      <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <div className='card-body'>
          <h1 className='text-center text-2xl'>Login</h1>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='email'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='text'
              placeholder='password'
              className='input input-bordered'
            />
            <label className='label'>
              <a href='#' className='label-text-alt link link-hover'>
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Login</button>
          </div>
          <div className='divider mb-0 pb-0'>OR</div>
          <Link to="/register" className="mb-2 font-mono">Are you new here? Please register</Link>
          <button className='btn btn-glass hover:btn-accent'>
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;