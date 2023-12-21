import express  from "express";
import { loginController,
      registerController,
     testController
    
    } from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const route = express.Router()

//routing
//REGISTER || Method post
route.post('/register', registerController) 

//Test Routes
route.get('/test', testController) 

//LOGIN || POST
 
route.post('/login',requireSignIn,loginController)
export default route 