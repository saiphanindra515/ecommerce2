let checkif = (result)=>{
    if(result==undefined||result==null||result==""){
        return true
    }else{
        return false
    }
}
//for a product  colors are defined in productdatabase.so user should able to access only defined colors
let checkcolor=(result,req)=>{
    for(let i=0;i<result.colors.length;i++){
        if(result.colors[i]==req.body.color){
            console.log(i);   
           console.log(result.colors[i]);
               return true;
               
           }
          }
          return false
}
module.exports = {
    checkif:checkif,
    checkcolor:checkcolor
}