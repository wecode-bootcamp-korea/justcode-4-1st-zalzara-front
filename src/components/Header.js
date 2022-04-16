import './Header.scss';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { VscMenu } from 'react-icons/vsc';
import { useState } from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [showLoginModal, setShowLoginModal] = useState('closed');

  const navigate = useNavigate();

  // 로그인 완료 여부
  const [loginStatus, setLoginStatus] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal('login');
  };

  const openSignupModal = () => {
    setShowLoginModal('signup');
  };

  const closeModal = () => {
    setShowLoginModal('closed');
  };

  // const closeModal = event => {
  //   event.preventDefault();
  //   setShowLoginModal('closed');
  // };

  // 로그인 성공 시 로그인 상태를 true로
  const loginSuccess = () => {
    setLoginStatus(true);
  };

  return (
    <>
      <div className="Header">
        <div className="menu-logo-box">
          <VscMenu className="menu-bar" size="24" />
          <div className="logo" onClick={() => navigate('/')}>
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="nav">
            <ul>
              <li>신상품</li>
              <li className="special-price">SPECIAL PRICE</li>
              <br />
              <li>침실</li>
              <li>의류 & 슈즈</li>
              <li onClick={() => navigate('/categories')}>거실</li>
              <li>주방</li>
              <li>다이닝</li>
              <li>욕실</li>
              <li>디퓨저 & 캔들</li>
              <li>키즈</li>
              <li>드레스룸</li>
              <li>
                가드닝 <span className="new">신상</span>
              </li>
              <li>DAILY LIVING</li>
              <li>
                린넨 컬렉션 <span className="new">신상</span>
              </li>
              <li>펫 컬렉션</li>
              <br />
              <li>
                STORIES <span className="new">신상</span>
              </li>
              <li>레시피</li>
              <br />
              <li className="info">+ INFO</li>
            </ul>
          </div>
        </div>
        <div className="search-login-box">
          <button className="search-box">검색____________________</button>

          <div className="user-info-box">
            <div className="login-btn" onClick={openLoginModal}>
              <AiOutlineUser size="20" />
              <div>
                {loginStatus ? <span>내 정보</span> : <span>로그인</span>}
              </div>
            </div>
            <div className="cart-btn" onClick={() => navigate('/shop-cart')}>
              <AiOutlineShopping size="20" />
              <div>
                <span>장바구니</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Login
        showLoginModal={showLoginModal}
        openSignupModal={openSignupModal}
        openLoginModal={openLoginModal}
        closeModal={closeModal}
        loginStatus={loginStatus}
        loginSuccess={loginSuccess}
      />
    </>
  );
}

export default Header;
