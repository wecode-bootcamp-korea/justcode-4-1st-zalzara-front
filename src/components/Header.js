import './Header.scss';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { VscMenu } from 'react-icons/vsc';
import { useState } from 'react';
import Login from './Login';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Header() {
  const [showLoginModal, setShowLoginModal] = useState('closed');
  // const navigate = useNavigate();

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
        <div className="menu-logo-box">
          <VscMenu className="menu-bar" size="24" />
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
        </div>

        <button className="search-box">검색____________________</button>

        <div className="user-info-box">
          <div className="login-btn" onClick={openLoginModal}>
            <AiOutlineUser size="20" />
            <div>
              <span>로그인</span>
            </div>
          </div>
          <div className="cart-btn">
            <AiOutlineShopping size="20" />
            <div>
              <span>장바구니</span>
            </div>
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
