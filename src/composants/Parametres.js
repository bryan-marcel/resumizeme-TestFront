import React from 'react'
import '../assets/css/resume.css'

import { IoIosSettings } from "react-icons/io";

import profile from '../assets/img/OIP.jpeg'
function Parametres() {
    return (
        <div>
            <div className='ParametresContainer'>
                <img src={profile} alt="" />
                <span>Carla</span>
                <IoIosSettings className='ParamsIcons' style={{ marginLeft: '48%' }} />
            </div>
        </div>
    )
}

export default Parametres
