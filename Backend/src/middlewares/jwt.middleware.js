import jwt from "jsonwebtoken";

const jwtAuth=(req,res,next)=>{
    try{

    
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({message:"No token provided,authorization denied"});
    }

    const payload=jwt.verify(token,"2b336f89ce20b47f");
    req.userId=payload.userId;
    next();
}catch(err){
    console.log(err);
    return res.status(401).json({message:"token is not valid"});
}
}

export default jwtAuth;