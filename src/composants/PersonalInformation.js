import React, { useState } from 'react'
import '../assets/css/resume.css'
import { MdVerified } from "react-icons/md";

import profile from '../assets/img/OIP.jpeg'
import { Link } from 'react-router-dom';
function PersonalInformation() {

    const [phone, setPhone] = useState('');

    const handlePhoneChange = (event) => {
        const inputValue = event.target.value;

        // Vérifier si le numéro de téléphone commence par "+"
        const hasPlusSign = inputValue.startsWith('+');

        // Filtrer les caractères non numériques
        const numericValue = inputValue.replace(/\D/g, '');

        // Limiter la longueur maximale du numéro de téléphone (par exemple, à 15 caractères)
        const limitedNumericValue = numericValue.slice(0, 15);

        // Mettre à jour l'état avec le numéro de téléphone formaté
        setPhone(hasPlusSign ? `+${limitedNumericValue}` : limitedNumericValue);
    };

    return (
        <div>
            <h1 className='PersonalTitle'>Personal Information</h1>
            <div className='InformationContainer'>
                <div className='Form-Container'>
                    <div className='Form'>
                        <div className='Form-row'>
                            <div className='Form-input'>
                                <input type="text" placeholder=' ' />
                                <label>First Name</label>
                            </div>
                            <div className='Form-input'>
                                <input type="text" placeholder=' ' />
                                <label>Last Name</label>
                            </div>
                        </div>
                        <div className='Form-row'>
                            <div className='Form-input'>
                                <input type="text" placeholder=' ' />
                                <label>City</label>
                            </div>
                            <div className='Form-input'>
                                <input type="text" placeholder=' ' />
                                <label>Postal Code</label>
                            </div>
                        </div>
                        <div className='Form-input Address'>
                            <input type="text" placeholder=' ' />
                            <label>Address</label>
                        </div>
                        <div className='Form-row'>
                            <div className='Form-input Email'>
                                <div className='InputContainer'>
                                    <input type="text" placeholder=' ' />
                                    <MdVerified className='icon-verification' />
                                    <label>Email</label>
                                </div>
                            </div>
                            <div className='Form-input Phone'>
                                <div className='InputContainer'>
                                    <input
                                        type="tel"
                                        placeholder=' '
                                        pattern="[0-9]*"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                    />
                                    <label>Phone</label>
                                </div>
                            </div>
                        </div>
                        <div className='Form-row'>
                            <div className='Form-input'>
                                <input type="password" placeholder=' ' />
                                <label>Password</label>
                            </div>
                        </div>
                    </div>
                    <div className='Form-text'>
                        Use this email to log in your{' '}
                        <Link to='#' style={{ color: '#1688FE', textDecoration: 'none' }}>
                            resumedone.io
                        </Link>{' '}
                        account and receive notifications.
                    </div>
                    <button className='save-button'>Save</button>
                </div>
                <div className='profile-photo'>
                    <img src={profile} alt="" srcset="" />
                </div>
            </div>
            <div className='TheBestContent'>
                <input type="checkbox" name="check" id="check" />
                <p>
                    Show my profile to serious employers on{' '}
                    <Link to='#' style={{ color: '#1688FE', textDecoration: 'none' }}>
                        hirethebest.io
                    </Link>{' '}
                    for free
                </p>
            </div>
        </div>
    )
}

export default PersonalInformation
