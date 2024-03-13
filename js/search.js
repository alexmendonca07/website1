btn = document.querySelector('.btn')
search = document.querySelector('.search')

btn.addEventListener('click', () => {
    if (search.classList == 'search active') {
        search.classList.remove('active')
    } else {
        search.classList.add('active')
    }
})
