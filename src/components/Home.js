import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';

const TrangChu = () => {
  return (
    <>
      <Header />
      <div className="banner">
        <Carousel />
      </div>
      <main>
        <div className="container d-flex">

          <div className="content">
            <h2>Sản Phẩm Thịnh Hành (1.0)</h2>
            <div className="row">
              <div className="col-3 text-center">
                <img src="images/20240321_145532_361836__1200x1200.jpg" alt="" className="img-100" />
                <b>DIMOO</b>
                <p>Búp Bê Vải Vương Quốc Động Vật</p>
                <p className="text-do"><b>230.000đ</b></p>
              </div>
              <div className="col-3 text-center">
                <img src="images/20240315_163928_463213__1200x1200.jpg" alt="" className="img-100" />
                <b>DIMOO</b>
                <p>Mô Hình Thỏ Nghỉ Lễ</p>
                <p className="text-do"><b>253.000đ</b></p>
              </div>
              <div className="col-3 text-center">
                <img src="images/1(1)_2aD8GUyfVR_1200x1200.jpg" alt="" className="img-100" />
                <b>DIMOO</b>
                <p>MOLLY KHỔNG LỒ 100% Loạt 2-B</p>
                <p className="d-flex justify-between"><del>1.150.000đ</del><b className="text-do">805.000đ</b></p>
              </div>
              <div className="col-3 text-center">
                <img src="images/1_eK0BjHmIy6_1200x1200.jpg" alt="" className="img-100" />
                <b>MOLLY</b>
                <p>MOLLY KHỔNG LỒ 100% Loạt 2-C</p>
                <p className="d-flex justify-between"><del>1.150.000đ</del><b className="text-do">805.000đ</b></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TrangChu;