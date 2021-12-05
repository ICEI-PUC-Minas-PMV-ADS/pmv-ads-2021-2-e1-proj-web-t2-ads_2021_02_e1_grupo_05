var openMenuUser = document.querySelector('.myAccount');
var menuUser = document.querySelector('#menuUser')

openMenuUser.addEventListener('click',()=>{
    menuUser.classList.toggle('activeMenuUser');
})
