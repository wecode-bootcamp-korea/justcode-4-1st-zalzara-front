import './Header.scss';
import {
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineShopping,
} from 'react-icons/ai';
import { useState } from 'react';
import Login from './Login';

const Header = props => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = event => {
    event.preventDefault();
    setShowModal(false);
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
          <button className="login-btn" onClick={openModal}>
            {/* <button className="login-btn"> */}
            <AiOutlineUser />
            로그인
          </button>
          <button className="cart">
            <AiOutlineShopping />0
          </button>
        </div>
      </div>
      <Login showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default Header;
