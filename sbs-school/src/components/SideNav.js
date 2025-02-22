import React from 'react';
import { Link } from 'react-router-dom';
const SideNav = () => {
    return (
        <div className='nav-container'>
            <div className='brand-container'>
                <img className='profile-logo' src={require('./assets/img2.png')} />
                <div>
                    <h5 className='brand-name'>SS Management App</h5>
                    <p className='brand-para'>Manage your App in easy way...</p>
                </div>
            </div>
            <div className='menu-container'>
                <Link className='menu-link'>Add Students</Link>
                <Link className='menu-link' >Home</Link>
                <Link className='menu-link' >All Students</Link>
                <Link className='menu-link' >Payment Historys</Link>
                <Link className='menu-link' >AllCourse</Link>
            </div>
        </div>

    )
}
export default SideNav