import React from 'react'

const Dashboard = () => {
    return (
        <div className='dashboard-main-container'>
            <div className='dashboard-container'>
                <div className='nav-container'>

                </div>
                <div className='main-container'>
                    <div className='top-bar'>
                        <div className='logo-container'>
                            <img className='profile-logo' src={require('./assets/img2.png')} />
                        </div>
                        <div className='profile-container'>
                            <h2 className='profile-name'>SS Academy</h2>
                            <button className='logout-btn'>Logo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard