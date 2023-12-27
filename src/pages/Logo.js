import React from 'react'
import '../assets/css/resume.css'

import logo from '../assets/logo/logo.png'

function Logo() {
    return (
        <div className='logoDiv'>
            <img src={logo} alt="Logo" srcset="" className='logoImg' />
            <h3>Resumizeme</h3>
        </div>
    )
}

export default Logo
