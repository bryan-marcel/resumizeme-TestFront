import React from 'react'

import '../assets/css/resume.css'
import { FaNewspaper } from "react-icons/fa6";
import { FaHistory, FaPlusCircle, FaSearch } from "react-icons/fa";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { FcFolder, FcLock } from "react-icons/fc";

function Components() {
    return (
        <div className='ComponentsDiv'>
            <div className='myTemplatesContainer' style={{ marginBottom: '25px' }}>
                <FaNewspaper className='templatesIcons' />
                <p>My templates</p>
            </div>
            {/* Search */}
            <div className='myTemplatesContainer'>
                <FaSearch className='templatesIcons' />
                <p>Search</p>
            </div>
            <div className='mySearchContainer'>
                <p>Software Engineer</p>
                <p>Computer hardware engineer</p>
                <p>Network Engineer</p>
                <p>Technical Support</p>
                <p>Network administrator</p>
                <p>Management</p>
                <p>Data analysis</p>
                <p>Computer technician</p>
            </div>
            <div className='myPastContainer'>
                <FaHistory className='templatesIcons' />
                <p>Past search 1</p>
            </div>
            <div className='myPastContainer'>
                <FaHistory className='templatesIcons' />
                <p>Past search 2</p>
            </div>
            <div className='myPastContainer'>
                <FaHistory className='templatesIcons' />
                <p>Computers and information...</p>
            </div>
            <div className='myPastContainer'>
                <FaHistory className='templatesIcons' />
                <p>Database Administrator</p>
            </div>
            <div className='myPastContainer'>
                <FaHistory className='templatesIcons' />
                <p>Computer security</p>
            </div>
            <div className='myPastContainer'>
                <FaHistory className='templatesIcons' />
                <p>Computer Systems Analyst</p>
            </div>
            {/* Boards */}
            <div className='myTemplatesContainer' style={{ marginTop: '25px', marginBottom: '10px' }}>
                <RiArchiveDrawerLine className='templatesIcons' />
                <p>My Boards</p>
                <FaPlusCircle className='templateIcons' style={{ marginLeft: '50%' }} />
            </div>
            <div className='myPastContainer'>
                <FcFolder className='templatesIcons' />
                <p>Board 1</p>
            </div>
            <div className='myPastContainer'>
                <FcFolder className='templatesIcons' />
                <p>Board 2</p>
            </div>
            <div className='myPastContainer'>
                <FcFolder className='templatesIcons' />
                <p>Board 3</p>
            </div>
            <div className='myPastContainer'>
                <FcLock className='templatesIcons' />
                <p>Board agent 1</p>
            </div>
            <div className='myPastContainer'>
                <FcLock className='templatesIcons' />
                <p>Board agent 1</p>
            </div>
            <div className='myPastContainer'>
                <FcLock className='templatesIcons' />
                <p>Board agent 1</p>
            </div>
        </div>
    )
}

export default Components
