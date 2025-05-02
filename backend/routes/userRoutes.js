import express from 'express'
import {Create,getAll,getuserById,updatauser,deleteuser} from "../controller/userController.js"

import { createAccount,login,logout } from '../controller/authController.js'

const route=express.Router()
route.post("/saveuser",Create)
route.get('/getalluser',getAll)
route.get('/getuser/:id',getuserById)
route.put('/update/user/:id',updatauser)
route.delete('/delete/user/:id',deleteuser)

//login,logout,register--->autrization
route.post("/createAccount",createAccount)
route.post("/login",login)
route.post("/logout",logout)

export default route