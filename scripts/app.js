//scripts/app.js-welcome
const menuToggle = document.querySelector('.toggle')
const box = document.querySelector('.box')

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active')
	box.classList.toggle('active')
})