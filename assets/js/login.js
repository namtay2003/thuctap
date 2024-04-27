var form = document.getElementById('login');
var loginUsername = document.querySelector('.login__username');
var loginPassword = document.querySelector('.login__password');
var btnLogin = document.querySelector('button.login');


// console.log(btnLogin);

btnLogin.onclick = function(e) {
    event.preventDefault();
    var username = loginUsername.value;
    var password = loginPassword.value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user)
    if(username == '' || password == '') {
        alert('Vui lòng nhập đấy đủ thông tin!!!');
    }
    else if(loginUsername.value == 'admin' && loginPassword.value == '123') {
        window.location = '../admin.html';
    }
    else if(username == data.username && password == data.password) {
        window.location = '../user.html';
        // alert('Chúc mừng bạn đang nhập thành công !!!')
    }
    else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng');
    }
    
}