import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'

import Home from './components/Home'
import Courses from './components/Courses'
import AddCourses from './components/AddCourses'
import Students from './components/Student'
import AddStudent from './components/AddStudent'
import CollectFee from './components/CollectFee'
import PaymentHistory from './components/PaymentHistory'


import './components/style.css'
import { ToastContainer } from 'react-toastify';


const App=()=>{
  const myRouter = createBrowserRouter([
    {path:'',Component:Login},
    {path:'login',Component:Login},
    {path:'signup',Component:Signup},
    {path:'dashboard',Component:Dashboard,children:[
      {path:'',Component:Home},
      {path:'courses',Component:Courses},
      {path:'add-course',Component:AddCourses},
      {path:'students',Component:Students},
      {path:'add-student',Component:AddStudent},
      {path:'collect-fee',Component:CollectFee},
      {path:'payment-history',Component:PaymentHistory},
    ]}
    
  ])
    return(
      <>
         <RouterProvider router={myRouter}/>
         <ToastContainer />
      </>
    )
}
export default App