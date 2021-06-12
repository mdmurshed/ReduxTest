const userLeft = false
const userWatchingCatMeme = true

function watchTutorialCallBack(callback,errorCallback){
    if(userLeft){
        errorCallback({
            name:'User Left',
            message:':('
        })
    }else if(userWatchingCatMeme){
        errorCallback({
            name:'User Watching Cat Meme',
            message:'WebDevSimplified < Cat'
        })
    }else{
        callback("Thumbs up the Subcribe")
    }
}
watchTutorialCallBack((message)=>{
    console.log("Success : " + message)
},(error)=>{
    console.log("Error : " + error.name + " " + error.message)
})

function watchTutorialCallBackPromis(){
    return new Promise((resolve,reject)=>{
    if(userLeft){
        reject({
            name:'User Left',
            message:':('
        })
    }else if(userWatchingCatMeme){
        reject({
            name:'User Watching Cat Meme',
            message:'WebDevSimplified < Cat'
        })
    }else{
        resolve("Thumbs up the Subcribe")
    }
})
}
watchTutorialCallBackPromis().then((message)=>{
    console.log("Success : " + message)
}).catch((error)=>{
    console.log("Error : " + error.name + " " + error.message)
})
