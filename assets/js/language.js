
var lang = document.querySelector('.header__main-language');
var langDropdown = document.querySelector('.language__dropdown');
var langDefault = document.querySelector('.language__default');
var notificationsChangeLang = document.querySelector('.header__main-notifications');
var cartChangeLang = document.querySelector('.header__main-cart');
var accountChangeLang = document.querySelector('.header__main-account');



// ẩn hiện language dropdown khi click
lang.onclick = function() {
    langDropdown.classList.toggle('none');
}

// thay đổi ngôn ngữ
var langVN = document.querySelector('.language__vn');

langVN.onclick = function() {
    langDefault.innerHTML = `<img src="./assets/img/base/header/language/vietnam-26834_1280.webp" alt=""></img>`;
    notificationsChangeLang.innerHTML = `
        <div class="header__main-notifications">
            <i class="bi bi-bell"></i>
            <p>Thông Báo</p>

            <div class="notifications__dropdown">
                <div class="notifications__dropdown-header">
                    <i class="bi bi-bell"></i>
                    <span>Thông báo</span>
                </div>

                <div class="notifications__dropdown-center">
                    <img src="./assets/img/base/header/notifications/istockphoto-936681148-612x612.jpg" alt="">
                    <span>Vui lòng đăng nhập để xem thông báo</span>
                </div>

                <div class="login">
                    <a href=""><p>Đăng nhập</p></a>
                </div>

                <div class="register">
                    <a href=""><p>Đăng ký</p></a>
                </div>
            </div>
        </div>
    `;
    cartChangeLang.innerHTML = `
        <i class="bi bi-cart"></i>
        <p>Giỏ Hàng</p>
    `;

    accountChangeLang.innerHTML = `
        <i class="bi bi-person"></i>
        <p>Tài khoản</p>

        <div class="account__dropdown">
            <div class="login">
                <a href=""><p>Đăng nhập</p></a>
            </div>

            <div class="register">
                <a href=""><p>Đăng ký</p></a>
            </div>

            <div class="login-fb">
                <a href="">
                    <i class="bi bi-facebook"></i>
                    <span>Đăng nhập bằng facebook</span>
                </a>
            </div>
        </div>
    `;
}


var langEN = document.querySelector('.language__en');

langEN.onclick = function() {
    langDefault.innerHTML = `<img src="./assets/img/base/header/language/co-anh.png" alt="">`;
    notificationsChangeLang.innerHTML = `
        <div class="header__main-notifications">
            <i class="bi bi-bell"></i>
            <p>Notifications</p>

            <div class="notifications__dropdown">
                <div class="notifications__dropdown-header">
                    <i class="bi bi-bell"></i>
                    <span>Notifications</span>
                </div>

                <div class="notifications__dropdown-center">
                    <img src="./assets/img/base/header/notifications/istockphoto-936681148-612x612.jpg" alt="">
                    <span>Please login for <br>view notification</span>
                </div>

                <div class="login">
                    <a href=""><p>Login</p></a>
                </div>

                <div class="register">
                    <a href=""><p>Sign Up</p></a>
                </div>
            </div>
        </div>
    `;
    cartChangeLang.innerHTML = `
        <i class="bi bi-cart"></i>
        <p>My Cart</p>
    `;

    accountChangeLang.innerHTML = `
        <i class="bi bi-person"></i>
        <p>Account</p>

        <div class="account__dropdown">
            <div class="login">
                <a href=""><p>Login</p></a>
            </div>

            <div class="register">
                <a href=""><p>Sign Up</p></a>
            </div>

            <div class="login-fb">
                <a href="">
                    <i class="bi bi-facebook"></i>
                    <span>Login with facebook</span>
                </a>
            </div>
        </div>
    `;
}



var rankItemHover = document.querySelectorAll('.ranking__item');
for(var i = 0; i < rankItemHover.length; i++){
    rankItemHover[i].onmouseover = function(e) {
        // console.log(this);


        var idHover = this.getAttribute('id');
        // console.log(idHover);
        var rankRight = document.querySelector('.ranking__list-right')

        // console.log(rankRight)
        switch(idHover) {
            case 'rank__1':
                rankRight.innerHTML = `
                    <div class="row rank__detail">
                        <div class="l-4">
                            <img src="./assets/img/trangchu/site content/ranking/item/b_a-tr_c-ph_p-y-3.jpg" alt="" class="rank__detail-img">
                        </div>

                        <div class="col l-8">
                            <div class="rank__detail-info">
                                <div class="rank__detail-name">
                                    Ghi Chép Pháp Y - Những Thi Thể Không Hoàn Chỉnh
                                </div>

                                <div class="rank__detail-author">
                                    Tác giả: Lưu Bát Bách
                                </div>

                                <div class="rank__detail-nxb">
                                    Nhà xuất bản: Thanh Niên
                                </div>

                                <div class="rank__detail-price">
                                    <div class="price-new">
                                        94.900 đ
                                    </div>

                                    <div class="price-old">
                                        <p>130.000 đ</p>
                                        <span>-27%</span>
                                    </div>
                                </div>

                                <div class="rank__detail-description">
                                    <h4>Ghi Chép Pháp Y - Những Thi Thể Không Hoàn Chỉnh</h4>
                                    <p>
                                        “Ghi chép pháp y - Những thi thể không hoàn chỉnh” là phần thứ 3, 
                                        tiếp nối series đình đám “Ghi chép pháp y” được tác giả Pháp y Tần Minh và 
                                        Phó giám đốc Hiệp hội pháp y Trung Quốc - Châu Diệc Vũ đặc biệt giới thiệu. Cuốn sách bao gồm 7 vụ án có thật, 
                                        được viết bởi bác sĩ pháp y Lưu Bát Bách với 18 năm kinh nghiệm giải phẫu cho hơn 800 thi thể.
                                    </p>

                                    <p>
                                        Nếu phần 1 đi sâu vào việc phá án bằng nghiệp vụ chuyên môn, 
                                        phần 2 là sự đồng cảm với những xác chết không thể lên tiếng thì ở phần 3, 
                                        tác giả sẽ tập trung miêu tả những hiện...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'rank__2':
                rankRight.innerHTML = `
                    <div class="row rank__detail">
                        <div class="l-4">
                            <img src="./assets/img/trangchu/site content/ranking/item/b_a-tr_c---ph_p-y-600.jpg" alt="" class="rank__detail-img">
                        </div>

                        <div class="col l-8">
                            <div class="rank__detail-info">
                                <div class="rank__detail-name">
                                Ghi Chép Pháp Y - Những Cái Chết Bí Ẩn
                                </div>

                                <div class="rank__detail-author">
                                Tác giả: Lưu Hiểu Huy
                                </div>

                                <div class="rank__detail-nxb">
                                Nhà xuất bản: Thanh Niên
                                </div>

                                <div class="rank__detail-price">
                                    <div class="price-new">
                                        109.500 đ
                                    </div>

                                    <div class="price-old">
                                        <p>150.000 đ</p>
                                        <span>-27%</span>
                                    </div>
                                </div>

                                <div class="rank__detail-description">
                                    <h4>GHI CHÉP PHÁP Y - NHỮNG CÁI CHẾT BÍ ẨN</h4>
                                    <b><i>Làm cách nào để một “xác chết lên tiếng”? - công việc của bác sĩ pháp y. </i></b>
                                    <p>
                                        “Ghi chép pháp y - Những cái chết bí ẩn” là cuốn sách nằm 
                                        trong hệ liệt với “Pháp y Tần Minh” - bộ tiểu thuyết nổi đình 
                                        đám của xứ Trung đã được chuyển thể thành series phim. Cuốn sách 
                                        tổng hợp những vụ án có thật, được viết bởi bác sĩ pháp y Lưu Hiểu Huy - 
                                        người có 15 năm kinh nghiệm và từng mổ xẻ hơn 800 tử thi.
                                    </p>

                                    <p>
                                        Trải qua 15 câu chuyện kinh hoàng, cuốn sách sẽ đưa bạn ...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'rank__3':
                rankRight.innerHTML = `
                    <div class="row rank__detail">
                        <div class="l-4">
                            <img src="./assets/img/trangchu/site content/ranking/item/b_a-tr_c-gcpy-2-1.jpg" alt="" class="rank__detail-img">
                        </div>

                        <div class="col l-8">
                            <div class="rank__detail-info">
                                <div class="rank__detail-name">
                                Ghi Chép Pháp Y - Tập 2 - Khi Tử Thi Biết Nói
                                </div>

                                <div class="rank__detail-author">
                                    Tác giả: Liêu Tiểu Đao
                                </div>

                                <div class="rank__detail-nxb">
                                Nhà xuất bản: Thanh Niên
                                </div>

                                <div class="rank__detail-price">
                                    <div class="price-new">
                                        91.250 đ
                                    </div>

                                    <div class="price-old">
                                        <p>125.000 đ</p>
                                        <span>-27%</span>
                                    </div>
                                </div>

                                <div class="rank__detail-description">
                                    <h4>Ghi Chép Pháp Y - Tập 2 - Khi Tử Thi Biết Nói</h4>
                                    <b><i>GHI CHÉP PHÁP Y 2 - KHI TỬ THI BIẾT NÓI</i></b>
                                    <p>
                                        Nếu kẻ thủ ác dùng cái chết để khiến một người im lặng, 
                                        thì bác sĩ pháp y sẽ giúp nạn nhân “mở miệng” thông qua 
                                        những mật mã để lại trên thi thể.
                                    </p>

                                    <p>
                                        “Ghi chép pháp y 2 - Khi tử thi biết nói” được tác giả của 
                                        bộ tiểu thuyết đình đám “Pháp y Tần Minh” và Phó giám đốc 
                                        Hiệp hội pháp y Trung Quốc - Châu Diệc Vũ giới thiệu, là một 
                                        trong những cuốn sách về pháp y và tội phạm đáng đọc nhất. 
                                        Cuốn sách tổng hợp 8 vụ án có thật, được viết bởi b&aa...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'rank__4':
                rankRight.innerHTML = `
                    <div class="row rank__detail">
                        <div class="l-4">
                            <img src="./assets/img/trangchu/site content/ranking/item/055cd615-0716-4f98-9ca7-33aef03b4fad.jpg" alt="" class="rank__detail-img">
                        </div>

                        <div class="col l-8">
                            <div class="rank__detail-info">
                                <div class="rank__detail-name">
                                    Combo Sách Ghi Chép Pháp Y (Bộ 3 Cuốn)
                                </div>

                                <div class="rank__detail-author">
                                    Tác giả: Lưu Hiểu Huy, Liêu Tiểu Đao, Lưu Bát Bách
                                </div>

                                <div class="rank__detail-nxb">
                                    Nhà xuất bản: Thanh Niên
                                </div>

                                <div class="rank__detail-price">
                                    <div class="price-new">
                                        280.868 đ
                                    </div>

                                    <div class="price-old">
                                        <p>405.000 đ</p>
                                        <span>-30%</span>
                                    </div>
                                </div>

                                <div class="rank__detail-description">
                                    <h4>Combo Sách Ghi Chép Pháp Y (Bộ 3 Cuốn)</h4>
                                    <b>1. Ghi Chép Pháp Y - Những Cái Chết Bí Ẩn</b><br>
                                    <b><i>Làm cách nào để một “xác chết lên tiếng”? - đó là công việc của bác sĩ pháp y. </i></b>
                                    <p>
                                    “Ghi chép pháp y - Những cái chết bí ẩn” là cuốn sách nằm trong hệ 
                                    liệt với “Pháp y Tần Minh” - bộ tiểu thuyết nổi đình đám của xứ Trung 
                                    đã được chuyển thể thành series phim. Cuốn sách tổng hợp những vụ án 
                                    có thật, được viết bởi bác sĩ pháp y Lưu Hiểu Huy - người có 15 năm 
                                    kinh nghiệm và từng mổ xẻ hơn 800 tử thi. 
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'rank__5':
                rankRight.innerHTML = `
                    <div class="row rank__detail">
                        <div class="l-4">
                            <img src="./assets/img/trangchu/site content/ranking/item/8935325011559.jpg" alt="" class="rank__detail-img">
                        </div>

                        <div class="col l-8">
                            <div class="rank__detail-info">
                                <div class="rank__detail-name">
                                    Đám Trẻ Ở Đại Dương Đen
                                </div>

                                <div class="rank__detail-author">
                                    Tác giả: Châu Sa Đáy Mắt
                                </div>

                                <div class="rank__detail-nxb">
                                    Nhà xuất bản: Thế Giới
                                </div>

                                <div class="rank__detail-price">
                                    <div class="price-new">
                                        72,270 đ
                                    </div>

                                    <div class="price-old">
                                        <p>99,000 đ</p>
                                        <span>-27%</span>
                                    </div>
                                </div>

                                <div class="rank__detail-description">
                                    <h4>Đám Trẻ Ở Đại Dương Đen</h4>
                                    <p>
                                        “nỗi buồn không rõ hình thù<br>
                                        ta cho nó dáng, ta thu vào lòng<br>
                                        ta ôm mà chẳng đề phòng<br>
                                        một ngày nó lớn chất chồng tâm can”<br>
                                        “kẻ sống muốn đời cạn<br>
                                        người chết muốn hồi sinh<br>
                                        trần gian bi hài nhỉ?<br>
                                        ta còn muốn bỏ mình?”<br>
                                    </p>

                                    <p>
                                        Đám trẻ ở đại dương đen là lời độc thoại và đối thoại của những đứa trẻ 
                                        ở đại dương đen, nơi từng lớp sóng của nỗi buồn và tuyệt vọng không ngừng 
                                        cuộn trào, lúc âm ỉ, khi dữ d...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
        }



    }

}


// console.log(rankItemHover);