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

window.onscroll = function()
{
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  {
    let scrool_btn = document.querySelector('#scrollBtn');
    scrool_btn.style.opacity = '1'; 
    
  }
  else{
    let scrool_btn = document.querySelector('#scrollBtn');
    scrool_btn.style.opacity = '0';
  }
}

scrollBtn.addEventListener('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0});
});