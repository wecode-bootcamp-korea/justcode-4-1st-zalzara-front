import React from 'react';
import './Header.scss';
import {
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineShopping,
} from 'react-icons/ai';

function Header() {
  return (
    <div className="Header">
      <div className="homeName">
        <AiOutlineMenu className="menuBar" />
        Z&nbsp;A&nbsp;R&nbsp;A &nbsp;&nbsp;H&nbsp;O&nbsp;M&nbsp;E
      </div>
      <button className="searchBox">
        검색 <div className="line" />
      </button>
      <div className="userInfo">
        <button className="user">
          <AiOutlineUser />
          로그인
        </button>
        <button className="cart">
          <AiOutlineShopping />0
        </button>
      </div>
    </div>
  );
}

export default Header;
