// Variables
const menuIcons = document.querySelectorAll('#menuIcon')
const sidebar = document.querySelector('#Sidebar')
const closeIcon = document.querySelector('#closeIcon')
let scrollBtn = document.querySelector('#scrollBtn')
const calendarIcon = document.querySelector('.calendar-img')
const tabButtons = document.querySelectorAll('.tabs')
const tabsContentDivs = document.querySelectorAll('.current-content')




for (const tabs of tabButtons) {
  tabs.addEventListener('click',(event) => {
      let activeTab = document.querySelector('.active-tab-menu')

      activeTab.classList.remove('active-tab-menu')
      event.target.classList.add('active-tab-menu')    

      let index = event.target.getAttribute('id')
    console.log(typeof (index));
      for (let div of tabsContentDivs) {
        if(div.getAttribute('id') === index)
          {
            div.classList.remove('d-none')
          }
          else{
            div.classList.add ('d-none')
          }
         
      }

  })
}


for (const menuIcon of menuIcons ) {
    menuIcon.addEventListener('click', (event) => {
        sidebar.classList.add('active-sidebar')
    })
    
    closeIcon.addEventListener('click', (event) => {
        sidebar.classList.remove('active-sidebar')
    
    })
    
}



// Events

calendarIcon.addEventListener('click',() => {
  const calendar = document.querySelector('.calendar');
  calendar.classList.toggle('calendar-active')


})


