import express  from "express";
import { loginController , registerController} from "../controllers/authController.js";
//router object
const route = express.Router()

//routing
//REGISTER || Method post
route.post('/register', registerController) 

//LOGIN || POST
 
route.post('/login',loginController)
export default route 