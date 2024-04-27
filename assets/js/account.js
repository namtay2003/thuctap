// hidden password
var show = document.querySelector('.show');
var hidden = document.querySelector('.hidden');


show.onclick = function() {
    show.classList.add ('none');
    hidden.classList.remove('none')
    document.querySelector('.login__password,.register__password').setAttribute('type', 'text');
}

hidden.onclick = function() {
    hidden.classList.add ('none');
    show.classList.remove('none')
    document.querySelector('.login__password,.register__password').setAttribute('type', 'password');
}