// Variables
const menuIcon = document.querySelector('#menuIcon')
const sidebar = document.querySelector('#Sidebar')
const closeIcon = document.querySelector('#closeIcon')


// Events
menuIcon.addEventListener('click', (event) => {
    sidebar.classList.add('active-sidebar')
})

closeIcon.addEventListener('click', (event) => {
    sidebar.classList.remove('active-sidebar')

})

// Filter Search Engine For Leauges
document.querySelector('#searchInput').addEventListener('input',filterList)
function filterList()
{
    const searchInput = document.querySelector('#searchInput')
    const filter = searchInput.value.toLowerCase();
    
    const listItems = document.querySelectorAll('.list-group-item')

    listItems.forEach((item) => {
        let text = item.textContent

        if(text.toLowerCase().includes(filter.toLowerCase()))
        {
            item.style.display = '';
        }
        else{
            item.style.display = 'none';
        }
    })
    
}

