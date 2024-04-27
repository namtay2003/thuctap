var form = document.getElementById('register');
var registerUsername = document.querySelector('.register__username');
var registerPassword = document.querySelector('.register__password');



form.onsubmit = function(e) {
    event.preventDefault();
    // alert(registerUsername.value);
    var username = registerUsername.value;
    var password = registerPassword.value;
    var user = {
        username: username,
        password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert('Đăng ký thành công !!!');
    window.location = '../login.html';
}