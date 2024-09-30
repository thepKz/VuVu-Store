import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';

import lubu1 from '../images/lubu1.jpg';
import lubu2 from '../images/lubu2.jpg';
import lubu3 from '../images/lubu3.jpg';
import lubu4 from '../images/lubu4.jpg';
import lubu5 from '../images/lubu5.jpg';
import lubu6 from '../images/lubu6.jpg';
import lubu7 from '../images/lubu7.jpg';
import lubu8 from '../images/lubu8.jpg';

const Home = () => {
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
                <img src= {lubu1} alt="DIMOO Búp Bê Vải" className="img-100" />
                <b>DIMOO</b>
                <p>Búp Bê Vải Vương Quốc Động Vật</p>
                <p className="text-do"><b>230.000đ</b></p>
              </div>
              <div className="col-3 text-center">
                <img src= {lubu2} alt="DIMOO Mô Hình Thỏ" className="img-100" />
                <b>DIMOO</b>
                <p>Mô Hình Thỏ Nghỉ Lễ</p>
                <p className="text-do"><b>253.000đ</b></p>
              </div>
              <div className="col-3 text-center">
                <img src= {lubu3} alt="MOLLY KHỔNG LỒ 100% Loạt 2-B" className="img-100" />
                <b>DIMOO</b>
                <p>MOLLY KHỔNG LỒ 100% Loạt 2-B</p>
                <p className="d-flex justify-between">
                  <del>1.150.000đ</del>
                  <b className="text-do">805.000đ</b>
                </p>
              </div>
              <div className="col-3 text-center">
                <img src= {lubu4} alt="MOLLY KHỔNG LỒ 100% Loạt 2-C" className="img-100" />
                <b>MOLLY</b>
                <p>MOLLY KHỔNG LỒ 100% Loạt 2-C</p>
                <p className="d-flex justify-between">
                  <del>1.150.000đ</del>
                  <b className="text-do">805.000đ</b>
                </p>
              </div>
              <div className="col-3 text-center">
                <img src= {lubu5} alt="LABUBU KHỔNG LỒ 100% Loạt 2-C" className="img-100" />
                <b>LABUBU</b>
                <p>LABUBU KHỔNG LỒ 100% Loạt 2-C</p>
                <p className="d-flex justify-between">
                  <del>1.150.000đ</del>
                  <b className="text-do">805.000đ</b>
                </p>
              </div>
              <div className="col-3 text-center">
                <img src={lubu6} alt="LABUBU KHỔNG LỒ 100% Loạt 2-D" className="img-100" />
                <b>LABUBU</b>
                <p>LABUBU KHỔNG LỒ 100% Loạt 2-D</p>
                <p className="d-flex justify-between">
                  <del>1.150.000đ</del>
                  <b className="text-do">805.000đ</b>
                </p>
              </div>
              <div className="col-3 text-center">
                <img src={lubu7} alt="LABUBU KHỔNG LỒ 100% Loạt 2-E" className="img-100" />
                <b>LABUBU</b>
                <p>LABUBU KHỔNG LỒ 100% Loạt 2-E</p>
                <p className="d-flex justify-between">
                  <del>1.150.000đ</del>
                  <b className="text-do">805.000đ</b>
                </p>
              </div>
              <div className="col-3 text-center">
                <img src={lubu8} alt="LABUBU KHỔNG LỒ 100% Loạt 2-F" className="img-100" />
                <b>LABUBU</b>
                <p>LABUBU KHỔNG LỒ 100% Loạt 2-F</p>
                <p className="d-flex justify-between">
                  <del>1.150.000đ</del>
                  <b className="text-do">805.000đ</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;