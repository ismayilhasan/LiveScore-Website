// Variables
const menuIcons = document.querySelectorAll('#menuIcon')
const sidebar = document.querySelector('#Sidebar')
const closeIcon = document.querySelector('#closeIcon')
let scrollBtn = document.querySelector('#scrollBtn')
const calendarIcon = document.querySelector('.calendar-img')
const tabButtons = document.querySelectorAll('.tabs')
const tabsContentDivs = document.querySelectorAll('.current-content')
const matches = document.querySelectorAll('#match')
const currentMatchContent = document.getElementById('currentMatchContent')
const closeIconCurrentMatchContent = document.getElementById('closeIconCurrentMatchContent')
const rankingsTabs = document.querySelectorAll('.tabs-rankings')
const rankingTables = document.querySelectorAll('.table-content')
const viewTypeBtns = document.querySelectorAll(".view-type");
const ViewTabs = document.querySelectorAll('.view-type')
const playerViews = document.querySelectorAll('.player-views')


// Functions
function clearAllFilledTab() {
  viewTypeBtns.forEach(viewTypeBtn => {
      viewTypeBtn.querySelector(".icon").src = "/assets/photos/type.svg";
  })
}

function changeTab(event) {
  clearAllFilledTab();

  const parent = event.target.parentElement;
  const icon = parent.querySelector(".icon");
 

  icon.src = icon.src.includes("type.svg")
      ? icon.src = "/assets/photos/fillet-type.svg"
      : "/assets/photos/type.svg";

      let index = event.target.parentElement.getAttribute('data-id')
    
    for (const views of playerViews) {
      if(views.getAttribute('data-id') === index)
      {
        views.classList.remove('d-none')
      }
      else{
        views.classList.add('d-none')
      }
    }
}


// Events

viewTypeBtns.forEach(viewTypeBtn => viewTypeBtn.addEventListener("click", changeTab));

for (const tabs of tabButtons) {
  tabs.addEventListener('click',(event) => {
      let activeTab = document.querySelector('.active-tab-menu')
      activeTab.classList.remove('active-tab-menu')
      event.target.classList.add('active-tab-menu')    

      let index = event.target.getAttribute('id')
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

for (const ranking of rankingsTabs) {
  ranking.addEventListener('click',(event) => {
  
    let index = event.target.parentElement.parentElement.getAttribute('id')
    
    
    for (let table of rankingTables) {
      if(table.getAttribute('id') === index)
      {
        table.classList.remove('d-none')
      }
      else{
        table.classList.add('d-none')
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

for (const match of matches) {

  match.addEventListener('click', () => {
    currentMatchContent.classList.add('displaying-match')
  })
}

if(document.getElementById('closeIconCurrentMatchContent'))
{
  closeIconCurrentMatchContent .addEventListener('click',() => {
    currentMatchContent.classList.remove('displaying-match')
  })
}



calendarIcon.addEventListener('click',() => {
  const calendar = document.querySelector('.calendar');
  calendar.classList.toggle('calendar-active')


})





