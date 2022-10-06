// Variables
const menuIcon = document.querySelector('#menuIcon')
const sidebar = document.querySelector('#Sidebar')
const closeIcon = document.querySelector('#closeIcon')


// Events
menuIcon.addEventListener('click', () => {
    sidebar.classList.add('active-sidebar')
})

closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('active-sidebar')

})

