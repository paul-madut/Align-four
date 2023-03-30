
function Login() {
  return (
    <div className='background flex justify-center h-screen w-screen bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/004/532/221/original/tic-tac-toe-seamless-background-on-dark-blue-illustration-vector.jpg")]'>
        <div className="login__container flex flex-col w-1/3 h-2/3 bg-white rounded-3xl shadow-2xl mt-24">
            <h1 className='text-blue-700 text-center text-4xl mt-6'>Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <label className="w-3/4 input-group input-group-vertical">
                <span>Username</span>
                <input type="text"  className="input input-bordered" />
              </label>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="w-3/4 input-group input-group-vertical">
                <span>Password</span>
                <input type="text"  className="input input-bordered" />
              </label>
              <div className="buttons p-4 space-x-4">
              <button className='btn btn-primary'>Login</button>
              <button className='btn btn-secondary'>Sign Up</button>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Login