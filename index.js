const colorSeed = document.getElementById("color-seed")
const colorPicker = document.getElementById("color-picker")
const setColorBtn = document.getElementById("set-color-btn")

const colorData = []

colorSeed.addEventListener("change", (e)=>{
    // console.log("color selected", e.target.value)
    // console.log("color selected", e.target.value)
    let hexWithHash = e.target.value
    let removedHash =  e.target.value.replace(/^#/, '')
    colorData[0] = removedHash
    colorData[2] = hexWithHash
})

/* eventListener get value of option selected */
colorPicker.addEventListener("change", (e) => {
    // console.log("color picker: ", e.target.value)
    colorData[1] = e.target.value
})

setColorBtn.addEventListener("click", (colorSeed, colorPicker)=>{
    colorSeed = colorData[0]
    colorPicker = colorData[1]
    // console.log(colorData)
    generatedColorAPI(colorSeed, colorPicker)

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
        console.log("Mode:", data.mode)  // Log the mode
        console.log("Colors:", data.colors)  // Log the colors
    })
    .catch(error => console.error('There was an issue with the fetch request:', error))  // Handle errors
}



//----------------------------Testing----------------------
