import './Header.scss';
import {
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineShopping,
} from 'react-icons/ai';
import { useState } from 'react';
import Login from './Login';

function Header() {
  const [showLoginModal, setShowLoginModal] = useState('closed');

  const openLoginModal = () => {
    setShowLoginModal('login');
  };

  const openSignupModal = () => {
    setShowLoginModal('signup');
  };

  const closeModal = event => {
    event.preventDefault();
    setShowLoginModal('closed');
  };

  return (
    <>
      <div className="Header">
        <div className="homeName">
          <AiOutlineMenu className="menuBar" />
          Z&nbsp;A&nbsp;R&nbsp;A &nbsp;&nbsp;H&nbsp;O&nbsp;M&nbsp;E
        </div>
        <button className="searchBox">
          검색 <div className="line" />
        </button>
        <div className="userInfo">
          <div className="login-btn" onClick={openLoginModal}>
            <AiOutlineUser size="20" />
            로그인&nbsp;&nbsp;
          </div>
          <div className="cart">
            <AiOutlineShopping size="20" />
            장바구니&nbsp;(0)
          </div>
        </div>
      </div>
      <Login
        showLoginModal={showLoginModal}
        openSignupModal={openSignupModal}
        openLoginModal={openLoginModal}
        closeModal={closeModal}
      />
    </>
  );
}

export default Header;
