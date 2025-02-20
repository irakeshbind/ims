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
                        <div >
                            <h2>ss Aademy</h2>
                            <button>Logo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard