let inputEl=document.getElementById('input')
let countEl=document.getElementById('count')

let count=10
let uniqueId=setInterval(function(){
    count=count-1
    countEl.textContent=count
    if(count===0){
        countEl.textContent="BOOM"
        clearInterval(uniqueId)
    }
},1000)

inputEl.addEventListener('keydown',function(event){
    let inputValue=inputEl.value
    if (inputValue==="defuse" && event.key==="Enter" && count!==0){
        countEl.textContent="You Did It!"
        clearInterval(uniqueId)
    }
})