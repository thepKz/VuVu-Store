import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="images/vuvu.png" alt="Tiệm VuVu Logo" width="300px" />
          <p>Tiệm VuVu</p>
          <p>Cửa hàng đồ chơi và quà tặng độc đáo</p>
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h4>Sản phẩm</h4>
            <ul>
              <li><a href="#">Mới & Nổi bật</a></li>
              <li><a href="#">Bộ sưu tập</a></li>
              <li><a href="#">Mega</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Về chúng tôi</h4>
            <ul>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Liên hệ</a></li>
              <li><a href="#">Chính sách</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">

        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-square"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <p className="copyright">© 2024 Tiệm VuVu. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;