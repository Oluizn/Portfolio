function menushow() {
    let menumobile = document.querySelector('.hidden-menu')
    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open')
    } else {
        menumobile.classList.add('open')
    }
}