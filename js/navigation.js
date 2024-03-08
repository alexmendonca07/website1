nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > 275) {
        nav.classList.add('active')
    } else {
        nav.classlist.remove('active')
    }
}
