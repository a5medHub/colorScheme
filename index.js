const url = 'https://www.thecolorapi.com/scheme?hex=0047ABe'
/* eventListener get value of option selected */
document.addEventListener("change",(e)=>{
    if(e.target.value){
        return shemeValueSelected(e.target.value)
    }
})

/* parameter is set from target.value in the eventListener */
function shemeValueSelected(inputValue) {
    console.log(inputValue)
}
const param = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}
fetch(url, param)
    .then(res => res.json())
    .then(data => console.log(data.mode , data.colors))