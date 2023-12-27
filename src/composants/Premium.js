import React from 'react'
import '../assets/css/resume.css'
import { FaBriefcase } from 'react-icons/fa6'
function Premium() {
    return (
        <div className="PremiumCard">
            <div className="PremiumIcon-Container">
                <FaBriefcase className="PremiumIcon" />
            </div>
            <div className="PremiumContent">
                <h2 className="PremiumTitle">Premium Account</h2>
                <p className="PremiumParagraph">You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.</p>
            </div>
        </div>

    )
}

export default Premium
