/* header - menu*/
const btnMenu = document.querySelector('#btnMobile');

const toggleMenu = (event)=>{
    if(event.type === 'touchstart') event.preventDefault();
    var nav = document.querySelector('.navMobile')
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click',toggleMenu)
btnMenu.addEventListener('touchstart',toggleMenu)

btnMenu.addEventListener('click',toggleMenu)
btnMenu.addEventListener('touchstart',toggleMenu)

/* Menu Scroll Desktop */

const menuItems = document.querySelectorAll('#menuDesktop a[href^="#"]');

menuItems.forEach((item) =>{
    item.addEventListener('click', scrollToId);
})

function getScrollToId(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollPosition(to){
    window.scroll({
        top: to,
        behavior: 'smooth'
    })
}

function scrollToId(event){
    event.preventDefault();
    const to = getScrollToId(event.target) - 60;
    scrollPosition(to);
}

/* Menu Scroll Mobile */
const navMobile = document.querySelector('.navMobile');
const menuItemsMobile = document.querySelectorAll('#menuMobile a[href^="#"]');

menuItemsMobile.forEach(item =>{
    item.addEventListener('click', scrollToId);
})

function getScrollToId(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}


function scrollToId(event){
    event.preventDefault();
    navMobile.classList.toggle('active');
    const to = getScrollToId(event.target) - 60;
    scrollPosition(to);
}

function scrollPosition(to){
    window.scroll({
        top: to,
        behavior: 'smooth'
    })
}
