function menushow() {
    var menumobile = document.getElementById('.hidden-menu');
    if (menumobile.classList.contains('open')) {
        menumobile.classList.remove('open');
    } else {
        menumobile.classList.add('open')
    }
}