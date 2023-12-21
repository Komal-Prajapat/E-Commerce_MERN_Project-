import jwt from 'jsonwebtoken'
//protected Routes token base'
export const requireSignIn = async(req,res,next)=>{
try{
    const decode = jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
    next();
}   
catch(e){
    console.log(e);
}
}