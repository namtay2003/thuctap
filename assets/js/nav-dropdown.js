var navItemHover = document.querySelectorAll('.nav__dropdown-left-item');
for(var i = 0; i < navItemHover.length; i++){
    navItemHover[i].onmouseover = function(e) {
        // console.log(this);


        var idHover = this.getAttribute('id');
        console.log(idHover);
        var navRigth = document.querySelector('.nav__dropdown-right')

        // console.log(rankRight)
        switch(idHover) {
            case 'nav-left-item-1':
                navRigth.innerHTML = `
                    <div class="nav__dropdown-right-head">
                        <i class="bi bi-book" style="font-size: 24px;color: rgb(223, 163, 53);"></i>
                        Sách Trong Nước
                    </div>

                    <div class="nav__dropdown-right-content">
                        <div class="row">
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>VĂN HỌC</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Tiểu Thuyết</a>
                                    </li>
                                    <li>
                                        <a href="">Truyện Ngắn - Tản Văn</a>
                                    </li>
                                    <li>
                                        <a href="">Light Novel</a>
                                    </li>
                                    <li>
                                        <a href="">Ngôn Tình</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>
                                    KINH TẾ
                                </h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Nhân Vật - Bài Học Kinh Doanh</a>
                                    </li>
                                    <li>
                                        <a href="">Quản Trị - Lãnh Đạo</a>
                                    </li>
                                    <li>
                                        <a href="">Marketing - Bán Hàng</a>
                                    </li>
                                    <li>
                                        <a href="">Phân Tích Kinh Tế</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>
                                    TÂM LÝ - KĨ NĂNG SỐNG
                                </h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Kỹ Năng Sống</a>
                                    </li>
                                    <li>
                                        <a href="">Rèn Luyện Nhân Cách</a>
                                    </li>
                                    <li>
                                        <a href="">Tâm Lý</a>
                                    </li>
                                    <li>
                                        <a href="">Sách Cho Tuổi Mới Lớn</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>
                                    NUÔI DẠY CON
                                </h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Cẩm Nang Làm Cha Mẹ</a>
                                    </li>
                                    <li>
                                        <a href="">Phương Pháp Giáo Dục Trẻ Các Nước</a>
                                    </li>
                                    <li>
                                        <a href="">Phát Triển Trí Tuệ Cho Trẻ</a>
                                    </li>
                                    <li>
                                        <a href="">Phát Triển Kỹ Năng Cho Trẻ</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>
                                    SÁCH THIẾU NHI
                                </h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Manga - Comic</a>
                                    </li>
                                    <li>
                                        <a href="">Kiến Thức Bách Khoa</a>
                                    </li>
                                    <li>
                                        <a href="">Sách Tranh Kỹ Năng Sống Cho Trẻ</a>
                                    </li>
                                    <li>
                                        <a href="">Vừa Học - Vừa Học Vừa Chơi Với Trẻ</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>
                                    TIỂU SỬ - HỒI KÝ
                                </h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Câu Chuyện Cuộc Đời</a>
                                    </li>
                                    <li>
                                        <a href="">Chính Trị</a>
                                    </li>
                                    <li>
                                        <a href="">Kinh Tế</a>
                                    </li>
                                    <li>
                                        <a href="">Nghệ Thuật - Giải Trí</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>
                                    GIÁO KHOA - THAM KHẢO
                                </h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Sách Giáo Khoa</a>
                                    </li>
                                    <li>
                                        <a href="">Sách Tham Khảo</a>
                                    </li>
                                    <li>
                                        <a href="">Luyện Thi THPT Quốc Gia</a>
                                    </li>
                                    <li>
                                        <a href="">Mẫu Giáo</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>
                                    SÁCH HỌC NGOẠI NGỮ
                                </h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Tiếng Anh</a>
                                    </li>
                                    <li>
                                        <a href="">Tiếng Nhật</a>
                                    </li>
                                    <li>
                                        <a href="">Tiếng Hoa</a>
                                    </li>
                                    <li>
                                        <a href="">Tiếng Hàn</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'nav-left-item-2':
                navRigth.innerHTML = `
                <div class="nav__dropdown-right-head">
                    <i class="bi bi-book" style="font-size: 24px;color: rgb(223, 163, 53);"></i>
                    FOREIGN BOOKS
                </div>

                <div class="nav__dropdown-right-content">
                    <div class="row">
                        <div class="col l-3 nav__dropdown-right-content-list">
                            <h4>FICTION</h4>

                            <ul class="nav__dropdown-right-content-item">
                                <li>
                                    <a href="">Contemporary Fiction</a>
                                </li>
                                <li>
                                    <a href="">Romance</a>
                                </li>
                                <li>
                                    <a href="">Fantasy</a>
                                </li>
                                <li>
                                    <a href="">Classics</a>
                                </li>                                                    
                            </ul>

                            <span class="expand">
                                Xem tất cả
                            </span>
                        </div>
                        <div class="col l-3 nav__dropdown-right-content-list">
                            <h4>BUSINESS & MANAGEMENT</h4>

                            <ul class="nav__dropdown-right-content-item">
                                <li>
                                    <a href="">Business & Management</a>
                                </li>
                                <li>
                                    <a href="">Economics</a>
                                </li>
                                <li>
                                    <a href="">Finance & Accounting</a>
                                </li>                                                  
                            </ul>

                            <span class="expand">
                                Xem tất cả
                            </span>
                        </div>
                        <div class="col l-3 nav__dropdown-right-content-list">
                            <h4>PERSONAL DEVELOPMENT</h4>

                            <ul class="nav__dropdown-right-content-item">
                                <li>
                                    <a href="">Popular Psychology</a>
                                </li>
                                <li>
                                    <a href="">Advice On Careers & Achieving Success</a>
                                </li>
                                <li>
                                    <a href="">Personal Finance</a>
                                </li>
                            </ul>

                            <span class="expand">
                                Xem tất cả
                            </span>
                        </div>
                        <div class="col l-3 nav__dropdown-right-content-list">
                            <h4>CHILDREN'S BOOKS</h4>

                            <ul class="nav__dropdown-right-content-item">
                                <li>
                                    <a href="">Picture & Activity Books</a>
                                </li>
                                <li>
                                    <a href="">Fiction (For Kids & Teen)</a>
                                </li>
                                <li>
                                    <a href="">Education</a>
                                </li>
                                <li>
                                    <a href="">Non-Fiction</a>
                                </li>                                                    
                            </ul>

                            <span class="expand">
                                Xem tất cả
                            </span>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="l-3 nav__dropdown-right-content-list">
                            <h4>DICTIONARIES & LANGUAGES</h4>

                            <ul class="nav__dropdown-right-content-item">
                                <li>
                                    <a href="">ELT: Learning Material & Coursework</a>
                                </li>
                                <li>
                                    <a href="">ELT: English For Specific Purposes</a>
                                </li>
                                <li>
                                    <a href="">Dictionaries</a>
                                </li>
                            </ul>

                            <span class="expand">
                                Xem tất cả
                            </span>
                        </div>
                        <div class="col l-3 nav__dropdown-right-content-list">
                            <h4>OTHER LANGUAGES</h4>

                            <ul class="nav__dropdown-right-content-item">
                                <li>
                                    <a href="">Japanese Books</a>
                                </li>
                                <li>
                                    <a href="">German Books</a>
                                </li>
                                <li>
                                    <a href="">French Books</a>
                                </li>
                            </ul>

                        </div>
                        <div class="col l-3 nav__dropdown-right-content-list">
                            <h4>OTHER CATEGORIES</h4>

                            <ul class="nav__dropdown-right-content-item">
                                <li>
                                    <a href="">Biography</a>
                                </li>
                                <li>
                                    <a href="">Society & Social Sciences</a>
                                </li>
                                <li>
                                    <a href="">Science & Geography</a>
                                </li>
                                <li>
                                    <a href="">Food & Drink</a>
                                </li>                                                    
                            </ul>

                            <span class="expand">
                                Xem tất cả
                            </span>
                        </div>
                        <div class="col l-3 nav__dropdown-right-content-list">
                        </div>

                    </div>
                </div>
                `;
                break;
            case 'nav-left-item-3':
                 navRigth.innerHTML = `
                    <div class="nav__dropdown-right-head">
                        <i class="bi bi-book" style="font-size: 24px;color: rgb(223, 163, 53);"></i>
                        VPP - Dụng Cụ Học Sinh
                    </div>

                    <div class="nav__dropdown-right-content">
                        <div class="row">
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>BÚT - VIẾT</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Bút Bi - Ruột Bút Bi</a>
                                    </li>
                                    <li>
                                        <a href="">Bút Gel - Bút Nước</a>
                                    </li>
                                    <li>
                                        <a href="">Bút Mực - Bút Máy</a>
                                    </li>
                                    <li>
                                        <a href="">Bút Dạ Quang</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Bút Chì - Ruột Bút Chì</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>DỤNG CỤ HỌC SINH</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Gôm - Tẩy</a>
                                    </li>
                                    <li>
                                        <a href="">Gọt Bút Chì</a>
                                    </li>
                                    <li>
                                        <a href="">Thước</a>
                                    </li>
                                    <li>
                                        <a href="">Bóp Viết - Hộp Bút</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Bộ Dụng Cụ Học Tập</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>DỤNG CỤ VĂN PHÒNG</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Bìa - File Hồ Sơ</a>
                                    </li>
                                    <li>
                                        <a href="">Kẹp Giấy - Kẹp Bướm</a>
                                    </li>
                                    <li>
                                        <a href="">Đồ Bấm Kim - Kim Bấm - Gỡ Kim</a>
                                    </li>
                                    <li>
                                        <a href="">Cắm Bút - Bảng Tên</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>DỤNG CỤ VẼ</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Bút Vẽ</a>
                                    </li>
                                    <li>
                                        <a href="">Màu Vẽ</a>
                                    </li>
                                    <li>
                                        <a href="">Khay - Cọ Vẽ</a>
                                    </li>
                                    <li>
                                        <a href="">Tập Vẽ - Giấy Vẽ</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>SẢN PHẨM VỀ GIẤY</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Tập - Vở</a>
                                    </li>
                                    <li>
                                        <a href="">Sổ Tay Các Loại</a>
                                    </li>
                                    <li>
                                        <a href="">Giấy Photo</a>
                                    </li>
                                    <li>
                                        <a href="">Giấy Note</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>SẢN PHẨM KHÁC</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Dao Rọc Giấy - Lưỡi Dao Rọc Giấy - Kéo</a>
                                    </li>
                                    <li>
                                        <a href="">Băng Keo - Cắt Băng Keo</a>
                                    </li>
                                    <li>
                                        <a href="">Bút Xóa Nước - Xóa Kéo</a>
                                    </li>
                                    <li>
                                        <a href="">Hồ Dán</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>SẢN PHẨM ĐIỆN TỬ</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Máy Tính Điện Tử</a>
                                    </li>
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                     
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'nav-left-item-4':
                 navRigth.innerHTML = `
                    <div class="nav__dropdown-right-head">
                        <i class="bi bi-book" style="font-size: 24px;color: rgb(223, 163, 53);"></i>
                        Đồ Chơi
                    </div>

                    <div class="nav__dropdown-right-content">
                        <div class="row">
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>ĐỒ CHƠI NỔI BẬT</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Xếp Hình - Lắp Ghép</a>
                                    </li>
                                    <li>
                                        <a href="">Đồ Chơi Giáo Dục</a>
                                    </li>
                                    <li>
                                        <a href="">Đồ Chơi Điều Khiển</a>
                                    </li>
                                    <li>
                                        <a href="">Board Game</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>PHƯƠNG TIỆN CÁC LOẠI</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Ô Tô</a>
                                    </li>
                                    <li>
                                        <a href="">Máy Bay</a>
                                    </li>
                                    <li>
                                        <a href="">Tàu Hỏa</a>
                                    </li>
                                    <li>
                                        <a href="">Tàu Thủy</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Phương Tiện Khác</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>MÔ HÌNH CÁC LOẠI</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Mô Hình Giấy</a>
                                    </li>
                                    <li>
                                        <a href="">Mô Hình Gỗ</a>
                                    </li>
                                    <li>
                                        <a href="">Mô Hình Nhân Vật</a>
                                    </li>
                                    <li>
                                        <a href="">Mô Hình Động Vật</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>ĐỒ CHƠI THEO PHIM</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">My Little Pony</a>
                                    </li>
                                    <li>
                                        <a href="">Paw Patrol</a>
                                    </li>
                                    <li>
                                        <a href="">Super Wings</a>
                                    </li>
                                    <li>
                                        <a href="">Chiến Thần Vô Cực - NADO</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>ĐỒ CHƠI KHÁC</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Bột Nặn - Cát Nặn</a>
                                    </li>
                                    <li>
                                        <a href="">Búp Bê</a>
                                    </li>
                                    <li>
                                        <a href="">Thú Bông</a>
                                    </li>
                                    <li>
                                        <a href="">Hướng Nghiệp Nhập Vai</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-4 nav__dropdown-right-content-list">
                                
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'nav-left-item-5':
                 navRigth.innerHTML = `
                    <div class="nav__dropdown-right-head">
                        <i class="bi bi-book" style="font-size: 24px;color: rgb(223, 163, 53);"></i>
                        Làm Đẹp - Sức Khỏe
                    </div>

                    <div class="nav__dropdown-right-content">
                        <div class="row">
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>LÀM ĐẸP - SỨC KHỎE</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Khẩu Trang Các Loại</a>
                                    </li>
                                    <li>
                                        <a href="">Nước Rửa Tay - Xà Phòng</a>
                                    </li>
                                    <li>
                                        <a href="">Băng Keo Cá Nhân</a>
                                    </li>
                                    <li>
                                        <a href="">Khăn Giấy - Giấy Ướt</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Chăm Sóc Cá Nhân Khác</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Sản Phẩm Làm Đẹp</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'nav-left-item-6':
                 navRigth.innerHTML = `
                    <div class="nav__dropdown-right-head">
                        <i class="bi bi-book" style="font-size: 24px;color: rgb(223, 163, 53);"></i>
                        Hành Trang Đến Trường
                    </div>

                    <div class="nav__dropdown-right-content">
                        <div class="row">
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>SÁCH GIÁO KHOA</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Lớp 1</a>
                                    </li>
                                    <li>
                                        <a href="">Lớp 2</a>
                                    </li>
                                    <li>
                                        <a href="">Lớp 3</a>
                                    </li>
                                    <li>
                                        <a href="">Lớp 4</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 5</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 6</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 7</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 8</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 9</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 10</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 11</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 12</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>SÁCH THAM KHẢO</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Mẫu Giáo</a>
                                    </li>                                                   
                                    <li>
                                        <a href="">Lớp 1</a>
                                    </li>
                                    <li>
                                        <a href="">Lớp 2</a>
                                    </li>
                                    <li>
                                        <a href="">Lớp 3</a>
                                    </li>
                                    <li>
                                        <a href="">Lớp 4</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 5</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 6</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 7</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 8</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 9</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 10</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lớp 11</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>LUYỆN THI THPTQG - LỚP 12</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Luyện Thi Môn Toán</a>
                                    </li>
                                    <li>
                                        <a href="">Luyện Thi Môn Ngữ Văn</a>
                                    </li>
                                    <li>
                                        <a href="">Luyện Thi Môn Tiếng Anh</a>
                                    </li>
                                    <li>
                                        <a href="">Luyện Thi Môn Vật Lý</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Luyện Thi Môn Hóa Học</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Luyện Thi Môn Sinh Học</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Luyện Thi Môn Địa Lý</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Luyện Thi Môn Lịch Sử</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-3 nav__dropdown-right-content-list">
                                <h4>ĐỒ NGHỀ ĐẾN TRƯỜNG</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Cặp , Ba Lô</a>
                                    </li>
                                    <li>
                                        <a href="">Máy Tính</a>
                                    </li>
                                    <li>
                                        <a href="">Bút Các Loại</a>
                                    </li>
                                    <li>
                                        <a href="">Bóp Viết - Hộp Bút</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Tập Vở</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Bao Tập - Bao Sách</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Mực</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Gôm - Tẩy</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Gọt Bút Chì</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Compa</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Bảng Viết - Bông Lau Bảng</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Phấn - Hộp Đựng Phấn</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'nav-left-item-7':
                 navRigth.innerHTML = `
                    <div class="nav__dropdown-right-head">
                        <i class="bi bi-book" style="font-size: 24px;color: rgb(223, 163, 53);"></i>
                        VPP - DCHS Theo Thương Hiệu
                    </div>

                    <div class="nav__dropdown-right-content">
                        <div class="row">
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Thiên Long</a>
                                    </li>
                                    <li>
                                        <a href="">Thương Hiệu Hàn Quốc - Morning Glory</a>
                                    </li>
                                    <li>
                                        <a href="">Thương Hiệu Hàn Quốc - Kyobo</a>
                                    </li>
                                    <li>
                                        <a href="">Thương Hiệu Nhật - Kinokuniya</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Thương Hiệu Nhật - Artline</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Thương Hiệu Nhật - Marvy</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Thương Hiệu Tây Ban Nha - Milan</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Thương Hiệu Tây Ban Nha - Apli</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Thương Hiệu Anh Quốc - Helix</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Thương Hiệu Đức - Faber-Castell</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Thương Hiệu Đức - Stabilo</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Thương Hiệu Pháp - Maped</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Thương Hiệu Indonesia - Bantex</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'nav-left-item-8':
                 navRigth.innerHTML = `
                    <div class="nav__dropdown-right-head">
                        <i class="bi bi-book" style="font-size: 24px;color: rgb(223, 163, 53);"></i>
                        Đồ Chơi Theo Thương Hiệu
                    </div>

                    <div class="nav__dropdown-right-content">
                        <div class="row">
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Lego</a>
                                    </li>
                                    <li>
                                        <a href="">tiNiToy</a>
                                    </li>
                                    <li>
                                        <a href="">Lắp Ráp DUKA</a>
                                    </li>
                                    <li>
                                        <a href="">Lắp Ráp Sluban</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Lắp Ráp LaQ</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Mô Hình Gỗ DIY - Robotime</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Đồ Chơi VBCare</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Hot Wheels</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Play-Doh</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Barbie</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'nav-left-item-9':
                 navRigth.innerHTML = `
                    <div class="nav__dropdown-right-head">
                        <i class="bi bi-book" style="font-size: 24px;color: rgb(223, 163, 53);"></i>
                        Bách Hóa Online - Lưu Niệm
                    </div>

                    <div class="nav__dropdown-right-content">
                        <div class="row">
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>ĐỒ DÙNG CÁ NHÂN</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Túi - Ví Thời Trang</a>
                                    </li>
                                    <li>
                                        <a href="">Đồng Hồ</a>
                                    </li>
                                    <li>
                                        <a href="">Phụ Kiện Du Lịch</a>
                                    </li>
                                    <li>
                                        <a href="">Phụ Kiện Tóc</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>ĐỒ ĐIỆN GIA DỤNG</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Đèn Bàn</a>
                                    </li>
                                    <li>
                                        <a href="">Đèn Ngủ</a>
                                    </li>
                                    <li>
                                        <a href="">Đèn Pin</a>
                                    </li>
                                    <li>
                                        <a href="">Pin & Dụng Cụ Sạc Pin</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>NHÀ CỬA - ĐỜI SỐNG</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Ly, Cốc, Bình Nước</a>
                                    </li>
                                    <li>
                                        <a href="">Hộp Đựng Đồ Cá Nhân</a>
                                    </li>
                                    <li>
                                        <a href="">Trang Trí Nhà Cửa</a>
                                    </li>
                                    <li>
                                        <a href="">Sửa Chữa Nhà Cửa</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>LƯU NIỆM</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Móc Khóa</a>
                                    </li>
                                    <li>
                                        <a href="">Gương - Lược</a>
                                    </li>
                                    <li>
                                        <a href="">Khung Hình</a>
                                    </li>
                                    <li>
                                        <a href="">Tượng</a>
                                    </li>                                                    
                                    <li>
                                        <a href="">Quà Tặng Trang Trí Khác</a>
                                    </li>                                                    
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-4 nav__dropdown-right-content-list">
                                <h4>SẢN PHẨM KHÁC</h4>

                                <ul class="nav__dropdown-right-content-item">
                                    <li>
                                        <a href="">Thực Phẩm</a>
                                    </li>
                                    <li>
                                        <a href="">Thiết Bị Số - Phụ Kiện Số</a>
                                    </li>
                                    <li>
                                        <a href="">Quạt Các Loại</a>
                                    </li>
                                </ul>

                                <span class="expand">
                                    Xem tất cả
                                </span>
                            </div>
                            <div class="col l-4 nav__dropdown-right-content-list">
                                
                            </div>
                        </div>
                    </div>
                `;
                break;
        }
    }

}
