let generate = (err,status,message,data)=>{
  let responseFormat = {
      error:err,
      status:status,
      message:message,
      data:data
      
  }
  return responseFormat;
}
module.exports ={
    generate:generate
}