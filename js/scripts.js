
document.querySelector('#company').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Best B&B this side of the world!"

let userName = prompt("What is your name?")

// let message = "Hello " + userName + ", welcome to the best B&B ever!"

let message = `Hello ${userName}, welcome to the best B&B ever!`

document.querySelector('#greeting').innerText = message