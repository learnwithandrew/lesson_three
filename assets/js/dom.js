// let recipeHeader = document.getElementById('header');
// recipeHeader.textContent = "My Book"

// let foodHeader = document.getElementsByClassName('food-header')
// foodHeader.textContent = "Matoke greens"

// let instruction = document.querySelector('li');
// instruction.textContent = "Cutting the bananas"
// instruction.style.color = "yellow"
// instruction.style.backgroundColor = 'red'

// let instructions = document.querySelectorAll('li');
// instructions.forEach(() => {
//     console.log(instructions)
// })

let statement = document.createElement('p');
statement.textContent = "yes i can"

let myButton = document.getElementById('my-button');
myButton.addEventListener('click', () => {
    alert('i have done dom manipulation')
})
