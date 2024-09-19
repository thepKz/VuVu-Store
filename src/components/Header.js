import React, { useEffect, useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menuOpen]);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="index.html">
            <img src="images/vuvu.png" alt="" width="75px" />
          </a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <nav className={`menu ${menuOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="#a" onClick={toggleMenu}>Mới & Nổi bật</a></li>
            <li><a href="#a" onClick={toggleMenu}>Bộ sưu tập</a></li>
            <li><a href="#aa" onClick={toggleMenu}>Mega</a></li>
            <li><a href="#a" onClick={toggleMenu}>Về chúng tôi</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;