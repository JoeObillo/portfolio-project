//show menu//
const navMenu = document.getElementById('nav-menu'),
    navActions = document.getElementById('nav-actions')
    navClose = document.getElementById('nav-close')

if (navActions) {
    navActions.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}