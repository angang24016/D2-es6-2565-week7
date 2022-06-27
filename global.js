//global objact
//console.log(global)
//setInterval
let i = 0
console.log(i)
setInterval(
    function () {
        i++
      console.log(i)
    }, 1000
)

//2.setTimeout
setTimeout(function() {
    console.log("hi")
    clearInterval(inStop)
}, 3000)
//setInterval
const intstop = setInterval(()=>{
    console.log("How are you")
},1000)