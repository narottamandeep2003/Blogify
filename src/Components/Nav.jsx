import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    const [register, setregister] = useState(1)
    const handleClick = () => {
        setregister(0);
    }
    return (
        <nav>
            <h2 className='logo'><Link to='/'>Blogify</Link></h2>
            {
                (!register) ? (
                    <div className='NavRightsideNotRegister'>
                        <ul>
                            <li>
                                <Link to='/LogIn' style={{ color: 'black' }} >Log in</Link>
                            </li>
                            <li className='Signup'>
                                <Link onChange={handleClick} to='/SignUp' style={{ color: 'white' }} >Sign up</Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className='NavRightside'>
                        <ul>
                            <li className='notification'>
                                <Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fillRule="currentColor" className="bi bi-bell" viewBox="0 0 18 18">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                    </svg>
                                    <div id='notification'></div>
                                </Link>
                            </li>

                            <li className='WriteButton' >
                                <Link to="/Edit">
                                    <div className='Write'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                        <span>Write</span>
                                    </div>
                                </Link>
                            </li>
                            <li id="Profile">
                                <Link to="/Profile">
                                    <div className='Profile' ></div>
                                </Link>
                            </li>

                        </ul>

                    </div>
                )
            }
        </nav>
    )
}
