import React from 'react';
import { useState } from 'react';



function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  async function registerUser(e:any){
    e.preventDefault();
    const response:any = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        name: name,
        userName: userName,
        email: email,
        password: password
      })
    })

    const data = await response.json();
    console.log(data)
}
    return (
        <div className='h-screen w-full items-center flex flex-col'>
            <div className="bg-white shadow-2xl border-2 border-black h-3/4 w-2/3 justify-center">
            <form onSubmit={registerUser} className="flex flex-col gap-4">
              <div className="form-control">
                <label className="label">
                  Name
                  <input value={name} className="input" type="text" onChange={(e) => setName(e.target.value)} required/>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  Username
                  <input value={userName} className="input" type="text" onChange={(e) => setUserName(e.target.value)} required/>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  Email
                  <input value = {email} className="input" type="email" onChange={(e) => setEmail(e.target.value)} required/>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  Password
                  <input className="input" value={password} type="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
                </label>
              </div>
      
              <button className="btn btn-primary btn-lg rounded" type="submit">Register</button>
            </form>
            </div>
        </div>
    );
}

export default Register;