

let ErrorHandler = (err,res,req,next)=>{
    console.log('Error occured at Global level');
    console.log(err);
    res.send(err);
}

let RouteNotFound = (req,res,next)=>{
    console.log('Route Not Found in application');
     res.status(404).send('Route not found');
}



module.exports = {
    globalErrorHandler:ErrorHandler,
    globalRouteNotFound:RouteNotFound
}