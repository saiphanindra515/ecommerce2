const clog =require('pino')()
const moment = require('moment')


let errormethod = (error,origin,level)=>{
  let time= moment();
  let catchError = {
      error:error,
      origin:origin,
      importance:level,
      time:time
  }
  clog.error(catchError);

}
let captureInfo = (message, origin, importance) => {
    let currentTime = moment()
  
    let infoMessage = {
      timestamp: currentTime,
      message: message,
      origin: origin,
      level: importance
    }
  
    clog.info(infoMessage)
    return infoMessage
  } // end infoCapture
  

module.exports={
    error:errormethod,
    info:captureInfo
}