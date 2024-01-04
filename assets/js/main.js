/**
 * @name: showMenu
 * @author: Oscar Giraldo
 * @description: This function shows or hides the 
 * menu when clicking on the menu icon.
 * @argument: toggleId, navId
*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/**
 * @name: removeMenu
 * @author: Oscar giraldo
 * @description: This function removes the menu 
 * upon clicking on any icon to navigate to that section.
*/
const navLink = document.querySelectorAll('.navLink')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each navLink, remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(element => element.addEventListener('click', linkAction))