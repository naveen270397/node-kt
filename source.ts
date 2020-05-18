let prom=new Promise((resolve,reject)=>{
   setTimeout(function(){
      let isresolved=true;
      if (isresolved) resolve ("promise resolved");// function inside then is called form here 
   },3000)
})
let newprom= prom.then(function(){
   //new Promise in next line should return a promise to the call made form resolve  but it actually is returning a new promise to newprom
   return new Promise((resolve)=>{ resolve ("form inside then ");})

})
newprom.then(function(fromnewprom) {console.log(fromnewprom)});