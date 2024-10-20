const colorSeed = document.getElementById("color-seed")
const colorPicker = document.getElementById("color-picker")
const setColorBtn = document.getElementById("set-color-btn")

let colorData = []
let getAllMode = []
let getAllColors = []
let hexValues = []


colorSeed.addEventListener("change", (e) => {
    let hexWithHash = e.target.value
    let removedHash = e.target.value.replace(/^#/, '')
    colorData[0] = removedHash
    colorData[2] = hexWithHash
})

/* eventListener get value of option selected */
colorPicker.addEventListener("change", (e) => {
    colorData[1] = e.target.value
})

setColorBtn.addEventListener("click", ()=>{
    let colorSeed = colorData[0] // '000000';
    let colorPicker = colorData[1] // 'monochrome';
    generatedColorAPI(colorSeed, colorPicker)
    console.log(colorData)
})

/* Fetch data from the API */
generatedColorAPI()
function generatedColorAPI(getHex='000000', getMode='monochrome') {
    const url = "https://www.thecolorapi.com/scheme?" // Correct the hex value
    let hex = "hex=" + getHex
    let mode = "mode=" + getMode
    let endpoint = hex + "&" + mode
    /* Fetch parameters */
    const param = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    fetch(url + endpoint, param)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not OK') // Check for errors
            }
            return res.json() // Parse JSON response
        })
        .then(data => {
            getAllMode.push(data.mode)
            getAllColors.push(data.colors)
            renderColors()
        })
        .catch(error => console.error('There was an issue with the fetch request:', error)) // Handle errors
}

function renderColors() {
    getAllColors.forEach(color => {
        console.log(color)
        color.forEach(hexColors => {
            hexValues.push(hexColors.hex.value)
            console.log(hexValues)
        })
    }, [0])
    colorsToUI()
}

function colorsToUI() {
    document.getElementById('s2-1').style.backgroundColor = hexValues[0]
    document.getElementById('s2-2').style.backgroundColor = hexValues[1]
    document.getElementById('s2-3').style.backgroundColor = hexValues[2]
    document.getElementById('s2-4').style.backgroundColor = hexValues[3]
    document.getElementById('s2-5').style.backgroundColor = hexValues[4]

    document.getElementById('s3-1').innerText = hexValues[0]
    document.getElementById('s3-2').innerText = hexValues[1]
    document.getElementById('s3-3').innerText = hexValues[2]
    document.getElementById('s3-4').innerText = hexValues[3]
    document.getElementById('s3-5').innerText = hexValues[4]

    deleteValues()

}
function deleteValues() {
    colorData = []
    getAllMode = []
    getAllColors = []
    hexValues = []
}