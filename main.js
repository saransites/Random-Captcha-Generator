const btn=document.querySelector(".btn")
const input=document.getElementById("box")
const result=document.querySelector(".generate")
const output=document.querySelector(".submit")
btn.addEventListener("click",randomNum)


let letters='ABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789abcdefghijklmnopqrstuvwxyz'
function randomNum(){
    let empty=""
    let item=0
    while(item<6){
        var random=Math.floor(Math.random()*letters.length)        
        empty+=letters[random]
        result.innerText=empty
        item++
    }
}
output.addEventListener("click",()=>{
    if(result.innerText==input.value){
       alert("You are Correct")
    }else{
        alert("You are Wrong")
    }
})