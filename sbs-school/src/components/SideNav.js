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
            <Link className='menu-link' ><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
            <Link className='menu-link' ><i class="fa fa-book" aria-hidden="true"></i>All Courses</Link>
                <Link className='menu-link'><i class="fa fa-plus" aria-hidden="true"></i>Add Courses</Link>
                <Link className='menu-link' ><i class="fa fa-users" aria-hidden="true"></i>All Students</Link>
                <Link className='menu-link' ><i class="fa fa-plus" aria-hidden="true"></i>Add Students</Link>
                
                <Link className='menu-link' ><i class="fa fa-credit-card" aria-hidden="true"></i>Collect Fee</Link>
                <Link className='menu-link' ><i class="fa fa-list" aria-hidden="true"></i>Payment History</Link>

            </div>
            <div className='contact-us'>
                <p><i class="fa fa-address-book" aria-hidden="true"></i>Contact Developer</p>
                <p><i class="fa fa-phone" aria-hidden="true"></i>9326827804</p>
            </div>
        </div>

    )
}
export default SideNav