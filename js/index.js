window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger')
    const menuContainer = document.querySelector('.menu-container')
    
    hamburger.addEventListener('click', () => {
        if(hamburger.className.includes('bars')){
          // Hamburger
          hamburger.classList.remove('bars')
          hamburger.classList.add('close')
            // MenuContainer
          menuContainer.classList.remove('hide')
          menuContainer.classList.add('show')
          // Disable scrolling
          document.body.style.overflow = 'hidden';  

        }else{
          // Hamburger
            hamburger.classList.add('bars')
            hamburger.classList.remove('close')
            // MenuContainer
            menuContainer.classList.add('hide')
            menuContainer.classList.remove('show')

          // Disable scrolling
         document.body.style.overflow = 'auto';
  
        }
    })

  window.addEventListener('resize', () => {
    if(window.innerWidth > 400){
        if(menuContainer.className.includes('show')){
         hamburger.classList.remove('close')
         hamburger.classList.add('bars')
        // MenuContainer
        menuContainer.classList.add('hide')
        menuContainer.classList.remove('show')
        // Disable scrolling
        document.body.style.overflow = 'auto';
        }
    }
  })



})
