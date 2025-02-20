import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link,Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isloading, setLoading] = useState(false)

    const Navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault()
        setLoading(true)
        axios.post('http://localhost:3000/user/Login',{
            email:email,
            password,password
        })
            .then(res => {
                setLoading(false)
                Navigate('/dashboard')
                console.log(res)
            })
            .catch(err => {
                setLoading(false)
                Navigate('/login')
                toast.error('something is wrong')
                console.log(err)
            })
    }


    return (
        <div className='signup-wrapper'>
            <div className='signup-box'>
                <div className='signup-left'>
                    <img alt='logo' src={require('./assets/img2.png')} />
                    <h2 className='signup-heading'>Institute Managenent App</h2>
                    <p className='signup-para'>Manage Your All data in Easy way...</p>
                </div>
                <div className='signup-right'>

                    <hr />

                    <form onSubmit={submitHandler} className='signup-form'>
                        <hq1>Login With Your Account</hq1>
                        <input onChange={e => { setEmail(e.target.value) }} type='email' placeholder='Email' />
                        <input onChange={e => { setPassword(e.target.value) }} type='password' placeholder='Password' />
                        <button type="submit">{isloading && <i class="fa-solid fa-spinner fa-spin-pulse"></i>}submit</button>
                        <Link className='link' to='/signup'>Create Your Account</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login