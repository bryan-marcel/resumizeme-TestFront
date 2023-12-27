import React from 'react'
import '../assets/css/resume.css'
function DeleteAccount() {
    return (
        <div className="DeleteAccountCard">
            {/* Card to delete account */}
            <div className="DeleteAccountContent">
                <text className="DeleteAccountTitle">Delete Account</text>
                {/* Warning message for account deletion */}
                <p className="DeleteAccountParagraph">If you delete your account you'll be permanently removing it from our systems - you can't undo it.</p>
                {/* Button to delete account */}
                <h4 className='DeleteAccountButton'>Yes, Delete my account</h4>
            </div>
        </div>
    )
}

export default DeleteAccount
