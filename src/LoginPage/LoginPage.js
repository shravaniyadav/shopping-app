import React from 'react'
import "./LoginPage.css"
import { Link } from 'react-router-dom';

const LoginPage = () => {

    return ( 
        <div className='page'>
            <div className='right'>
                <div className='heading'>Sign into your account</div>
                <div className='Email'>
                    <input className='email' type="text" placeholder='enter your email' value="shravani.yadav@webstudies.com"></input>
                </div>
                <div className='Password'>
                    <input className='password' type="password" placeholder="enter your password" value="1234678896"></input>
                </div>
                <Link className='button' to="/homepage">Login</Link>
                <Link className='goback' to="/">Go back to main page</Link>
            </div>
        </div>
     );
}
 
export default LoginPage;