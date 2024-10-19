const colorSeed = document.getElementById("color-seed")
const colorPicker = document.getElementById("color-picker")
const setColorBtn = document.getElementById("set-color-btn")

const colorData = []
const getAllMode = []
const getAllColors = []

colorSeed.addEventListener("change", (e)=>{
    let hexWithHash = e.target.value
    let removedHash =  e.target.value.replace(/^#/, '')
    colorData[0] = removedHash
    colorData[2] = hexWithHash
})

/* eventListener get value of option selected */
colorPicker.addEventListener("change", (e) => {
    colorData[1] = e.target.value
})

setColorBtn.addEventListener("click", (colorSeed, colorPicker)=>{
    if(colorData!=null){
        colorSeed = colorData[0]
        colorPicker = colorData[1]
        generatedColorAPI(colorSeed, colorPicker)

    }
})



/* Fetch data from the API */
function generatedColorAPI(getHex, getMode){
    const url = "https://www.thecolorapi.com/scheme?" // Correct the hex value
    let hex = "hex=" + getHex
    let mode = "mode=" + getMode
    let endpoint = hex+"&"+mode
    /* Fetch parameters */
    const param = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    fetch(url+endpoint, param)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not OK')  // Check for errors
        }
        return res.json()  // Parse JSON response
    })
    .then(data => {
        getAllMode.push(data.mode)
        getAllColors.push(data.colors)
        renderColors()
    })
    .catch(error => console.error('There was an issue with the fetch request:', error))  // Handle errors
}


function renderColors() {
    console.log("Colors:", getAllColors[0])  // Log the colors
    getAllColors.forEach(color =>{
        console.log(color)
        color.forEach(hexColors => {
            console.log(hexColors.hex.value)
        })
    },[0])
    

}
//----------------------------Testing----------------------
