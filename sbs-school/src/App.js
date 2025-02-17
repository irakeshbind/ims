import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'



const App=()=>{
  const myRouter = createBrowserRouter([
    {path:'login',Component:Login},
    {path:'signup',Component:Signup},
    {path:'dashboard',Component:Dashboard}
    
  ])
    return(
         <RouterProvider router={myRouter}/>
    )
}
export default App