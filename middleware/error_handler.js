const {CustomAPIError}=require('../errors/customs-erros')

const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof CustomAPIError)
      return res.status(err.StatusCode).json({msg:err.message})
    console.log(err);
    return res.status(500).json({msg:"Something Went wrong ,Please Try Again"})
}

module.exports=errorHandlerMiddleware