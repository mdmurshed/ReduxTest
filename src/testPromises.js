let p = new Promise((resolve, reject) =>{
    let a = 1+2
    if(a == 2){
        resolve("Success")
    }else {
        reject('Failed')
    }
})


p.then((message)=>{
    console.log("this is the then :" + message)
}).catch((message)=>{
    console.log("this is the catch : " + message)
})