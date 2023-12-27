import React from 'react'
import '../assets/css/resume.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer-links'>
            <Link to="#">Terms & Conditions</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">FAQ</Link>
            <Link to="#">Contact Us</Link>
        </div>
    )
}

export default Footer
