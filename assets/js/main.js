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
 * @description
 */