import React from 'react'
import '../assets/css/resume.css'

import Logo from './Logo'
import Components from './Components'
import Premium from '../composants/Premium'
import PersonalInformation from '../composants/PersonalInformation'
import DeleteAccount from '../composants/DeleteAccount'
import { Link } from 'react-router-dom'
import Footer from '../composants/Footer'
import Parametres from '../composants/Parametres'

function HomePages() {
    return (
        <div className='HomeContainer'>
            <div className='HomeGauche'>
                <div className='LogoContainer'>
                    <Logo />
                </div>
                <div className='ComponentsContainer'>
                    <Components />
                </div>
                <div className='FooterLeft'>
                    <hr />
                    <Parametres />
                </div>
            </div>

            <div className='HomeDroite'>
                <div className='ComposantHomeDroite'>
                    <div className='PremiumContainer'>
                        <Premium />
                    </div>
                    <div className='PersonalInfoContainer'>
                        <PersonalInformation />
                    </div>
                    <div className='DeleteAccountContainer'>
                        <DeleteAccount />
                    </div>
                    <div className='SupportContainer'>
                        <p>
                            <Link to='#' style={{ color: '#1688FE', textDecoration: 'none' }}>
                                Get in touch with our support team
                            </Link>{' '}
                            if you have any question or want to leave some feedback. <br />
                            We'll be happy to hear from you.
                        </p>
                    </div>

                    <hr className='ligneDroite' />

                    <div className='FooterContainer'>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePages
