import React, { useState } from 'react'
import axios from 'axios';
const Signup = () => {
  const [fullName,setFullName]= useState('');
  const [email,setEmail]= useState('');
  const [phone,setPhone]= useState('');
  const [password,setPassword]= useState('');
  const [image,setImage] = useState(null)
  const [imageUrl,setImageUrl] = useState('');
  const [isloading,setLoading] = useState(false)

  const submitHandler =(event)=>{ 
      event.preventDefault()
      setLoading(true)
    // console.log(fullName,email,phone,password,image)
    const formData = new FormData();
    formData.append('fullName',fullName);
    formData.append('email',email);
    formData.append('phone',phone);
    formData.append('password',password);
    formData.append('image',image);
    axios.post('http://localhost:3000/user/Signup',formData)
    .then(res=>{
      setLoading(false)
      console.log(res)
    })
    .catch(err=>{
      setLoading(false)
      console.log(err)
    })
  }

  const fileHandler =(e)=>{
    setImage(e.target.files[0])
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className='signup-wrapper'>
      <div className='signup-box'>
        <div className='signup-left'>
          <img alt='logo' src={require('./assets/img2.png')} />
          <h2 className='signup-heading'>Institute Managenent App</h2>
          <p className='signup-para'>Manage Your All data inAoount Easy wAy...</p>
        </div>
        <div className='signup-right'>
             
             <hr/>
             
             <form onSubmit={submitHandler} className='signup-form'>
             <hq1>Create Your Account</hq1>
             <input onChange={e=>{setFullName(e.target.value)}} type='text' placeholder='Institute FullName'/>
             <input onChange={e=>{setEmail(e.target.value)}} type='email' placeholder='Email'/>
             <input onChange={e=>{setPhone(e.target.value)}} type='text' placeholder='Phone'/>
             <input onChange={e=>{setPassword(e.target.value)}} type='password' placeholder='Password'/>
             <input onChange={fileHandler} type='file'/>
             {imageUrl && <img alt='logo' src={imageUrl}/>}
             <button type="submit">{isloading && <i class="fa-solid fa-spinner fa-spin-pulse"></i>}submit</button>
             </form>
        </div>
      </div>
    </div>
  )
}
export default Signup