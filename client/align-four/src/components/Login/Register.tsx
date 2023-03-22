import React from 'react';

function Register() {
    return (
        <div className='h-screen w-full items-center flex flex-col'>
            <div className="bg-white shadow-2xl border-2 border-black h-3/4 w-2/3 justify-center">
            <form className="flex flex-col gap-4">
              <div className="form-control">
                <label className="label">
                  Name
                  <input className="input" type="text" name="name" required/>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  Email
                  <input className="input" type="email" name="email" required/>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  Password
                  <input className="input" type="password" name="password" required/>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  Confirm Password
                  <input className="input" type="password" name="confirmPassword" required/>
                </label>
              </div>
              <button className="btn btn-primary btn-lg rounded" type="submit">Register</button>
            </form>
            </div>
        </div>
    );
}

export default Register;