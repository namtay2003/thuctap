
// chuyển đến trang account
var account = document.querySelector('.header__main-account');
var cart = document.querySelector('.header__main-cart');

var login = document.querySelector('.form__header .login');
var register = document.querySelector('.form__header .register');


cart.onclick =function() {
    window.location = '../cart.html';
}



account.onclick = function() {
    window.location = '../login.html';
}

login.onclick = function() {
    window.location = '../login.html';
}


register.onclick = function() {
    window.location = '../register.html';
}