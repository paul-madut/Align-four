import React, { useState } from 'react'
function Login() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  async function loginUser(e:any){
    e.preventDefault();
    const response:any = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        userName: userName,
        password: password
      })
    })

    const data = await response.json();
    console.log(data)
}
  return (
    <div className='background flex justify-center h-screen w-screen bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/004/532/221/original/tic-tac-toe-seamless-background-on-dark-blue-illustration-vector.jpg")]'>
        <div className="login__container flex flex-col w-1/3 h-2/3 bg-white rounded-3xl shadow-2xl mt-24">
            <h1 className='text-blue-700 text-center text-4xl mt-6'>Login</h1>
            <div className="form-control">
              <form onSubmit={loginUser} className="flex flex-col gap-4">
              <label className="w-3/4 input-group input-group-vertical">
                <span>Username</span>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text"  className="input input-bordered" required />
              </label>

              <label className="w-3/4 input-group input-group-vertical">
                <span>Password</span>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered" />
              </label>
              <div className="buttons p-4 space-x-4">
              <button type='submit' className='btn btn-primary'>Login</button>
              <button className='btn btn-secondary'>Sign Up</button>
              </div>
              </form>
              </div>
        </div>
    </div>
  )
}

export default Login