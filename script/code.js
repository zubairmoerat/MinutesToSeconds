//First we have to declare the button and output element and put it in a variable.
let calculate = document.querySelector('[data-calculate]')
let result = document.querySelector('[data-result]')

//Now we create a function that converts the input value of minutes to seconds.
function minutesToSeconds(){
    let minutes = document.querySelector('[data-input]').value
    let seconds = minutes * 60
    result.textContent = `${seconds.toFixed(2)} seconds`
}

//Final step is to add an eventlistener to our button with the callback function
calculate.addEventListener('click',minutesToSeconds)