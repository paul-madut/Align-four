import React from 'react'

function Login() {
  return (
    <div className='background flex justify-center h-screen w-screen bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/004/532/221/original/tic-tac-toe-seamless-background-on-dark-blue-illustration-vector.jpg")]'>
        <div className="login__container w-1/3 h-2/3 bg-white rounded-3xl shadow-2xl mt-24">
            <h1 className='text-blue-700 text-center text-4xl mt-6'>Login</h1>
            <form>
                <label >First name:</label>
                <input type="text" id="fname" name="fname" value="John"/>
                <label >Last name:</label>
                <input type="text" id="lname" name="lname" value="Doe"/>
                <input type="submit" value="Submit"/>
            </form> 
        </div>
    </div>
  )
}

export default Login