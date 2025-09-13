
import './App.css'
import {User} from './getuser/getUser.jsx'

//import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { UpdateTheUser } from './updateuser/updateUser.jsx'//component 1st letter must be capital

import { AddnewUser } from './adduser/addUser.jsx'// noy need to use same as the fn name  as AddnewUse,but any name it first leeter must be capital

import { CardValidation } from './cardvalidate/Cardvalidation.jsx'

import { HomePage } from './auth/Home.jsx'
import { LoginPage } from './auth/login.jsx'
import { RegisterPage } from './auth/register.jsx'

import { useAuth } from './auth/authprovider.jsx'


import { PrivateRoute } from './auth/Private.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {

 /* const {user,token}=useAuth()
  console.log("user",user)
  console.log("token",token)

const route=createBrowserRouter([//must use square bracket   ([{},{},{}])
   
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/register",
      element:<RegisterPage/>
    },
    {
      path: "/users",//null path so,call User fn
      element:<User/>
    },
    {
      path:"update/:id",//when the update button is clicked it route to the /update/respecctive user id   at that time call UpdateTheUser fn
      element:<UpdateTheUser/>
    },
    {
      path:"adduser",
      element:<AddnewUser/>
    },
    {
      path:"validatecard",
      element:<CardValidation/>
    }
  ])
  return (
    <RouterProvider router={route}></RouterProvider>//useing the js inside html so {}
  )
    
   
  */

return(
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>} />
    <Route element={<PrivateRoute/>}>
      <Route path="/users" element={<User />} /> 
      <Route path="/update/:id" element={<UpdateTheUser />} /> 
      <Route path="/adduser" element={<AddnewUser />} /> 
      <Route path="/validatecard" element={<CardValidation />} /> 
    </Route>
  </Routes>
)

}

export default App
