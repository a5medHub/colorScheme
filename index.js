

const colorSeed = document.getElementById("color-seed")
const colorPicker = document.getElementById("color-picker")


colorSeed.addEventListener("change", (e)=>{
    console.log("color selcted", e.target.value)
})


/* eventListener get value of option selected */
colorPicker.addEventListener("change", (e) => {
    console.log("color picker: ", e.target.value)
})
// document.addEventListener("change", (e) => {
//     if (e.target.value) {
//         shemeValueSelected(e.target.value);  // Call the function if there's a value
//     } else {
//         console.log("No value selected", e)  // Log the event if no value
//     }
// });

/* Function to handle the selected value */
function shemeValueSelected(inputValue) {
    console.log("Selected value:", inputValue)
}



/* Fetch data from the API */
function generatedColorAPI(){
    const url = "https://www.thecolorapi.com/scheme?" // Correct the hex value
    let hex = "hex=0047AB"
    let mode = "mode=monochrome"
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
generatedColorAPI()


//----------------------------Testing----------------------
// const url = 'https://www.thecolorapi.com/scheme?hex=0047ABe'
// /* eventListener get value of option selected */
// document.addEventListener("change",(e)=>{
//     if(e.target.value){
//          shemeValueSelected(e.target.value)
//     }else{
//      console.log(e)
// }
// })

// /* parameter is set from target.value in the eventListener */
// function shemeValueSelected(inputValue) {
//     console.log(inputValue)
// }
// const param = {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     }
// }
// fetch(url, param)
//     .then(res => res.json())
//     .then(data => console.log(data.mode , data.colors))