const inputEl = document.getElementById('words')
const buttonEl = document.getElementById('button')
const nameEl = document.getElementById('name')
console.log (inputEl)
console.log (buttonEl)
console.log (nameEl)

buttonEl.addEventListener('click', () => {
//we need to get the value of the input and store in a const
//we need to inject the value of the input into the text content of the nameEl
const userWords =inputEl.value
console.log (userWords)
nameEl.textContent = userWords
})
