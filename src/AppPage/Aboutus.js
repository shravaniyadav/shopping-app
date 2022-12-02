import React from 'react'
import { Link } from 'react-router-dom';
import "./Aboutus.css"

const Aboutus = () => {
    return ( 
        <div className='aboutus'>
            <p>Course: 5680-Intro to web studies</p>
            <p>Final Project</p>
            <p>Name: Shravani Chimala</p>
            <p>Student ID#: 12589019</p>
            <p>Email: scpyb@mst.edu</p>
            <Link className='link' to='/'>Go back to main page</Link>
        </div>
     );
}
 
export default Aboutus;