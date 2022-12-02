import React from 'react'
import { Link } from 'react-router-dom';
import "./AppPage.css"

const AppPage = () => {
    return ( 
        <div>
            <div className='apppage'>
                <Link className='about' to='/aboutus'>About</Link>
                <p className='logo'>Shopping App</p>
                <Link className='login' to="/loginpage">Login</Link>
            </div>
        <div className='image'></div>
        </div>
     );
}
 
export default AppPage;