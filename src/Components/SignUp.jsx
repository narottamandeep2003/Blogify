import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
    return (
        <div className="LoginWindow">
            <form action="/" className='LoginForm'>
                <span className='LoginTitle'>Create your account</span>
                <span className='LogInWithGoogle'> <img src="./google.png" alt="" className='LoginImg' /> <span>log in with google</span> </span>
                <span className='or'>or</span>
                <div className="inputBox">
                    <label htmlFor="Email">Email <span><sup>*</sup></span></label>
                    <input type="text" className='email' id='Email' placeholder='Enter your email' />
                </div>
                <div className="inputBox">
                    <label htmlFor="Password">Password <span><sup>*</sup></span></label>
                    <input type="password" className='password' id="Password" placeholder='Enter your password' />
                </div>
                <div className="inputBox">
                    <label htmlFor="CPassword">Password <span><sup>*</sup></span></label>
                    <input type="password" className='password' id="CPassword" placeholder='Confirm password' />
                </div>
                <button className='LoginBtn'>Sign up</button>
                <p className='loginfooter'>Alreay have an account <Link to="/LogIn">log in</Link></p>
            </form>
        </div>
    )
}
