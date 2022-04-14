import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import './Login.scss';
import Signup from './Signup';

function Login({
  showLoginModal,
  openSignupModal,
  openLoginModal,
  closeModal,
}) {
  // id, pw 를 받아 state 로 사용
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };

  // id, pw input 값을 받아 state 로 받는 함수
  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
  };

  // 로그인 버튼 활성화 여부
  const isValidButton = isValidEmail(id) && pw.length !== 0;

  // email 형식 가능 여부
  function isValidEmail(str) {
    const regEmail =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    return regEmail.test(str);
  }

  if (showLoginModal === 'login') {
    return (
      <div>
        <div className="login-background" onClick={closeModal}>
          <section
            className="login-container"
            onClick={e => e.stopPropagation()}
          >
            {/* 로그인 왼쪽 부분 */}
            <div className="left-half">
              <div className="login-comment">
                <p className="login-title">로그인</p>
                <div className="guest-purchase-comment">
                  <p>
                    신속한 결제 진행을 위해 필요한 정보를 요청할 수 있습니다.
                  </p>
                  <p>
                    Can’t find your order? You might have purchased as a guest.
                    Click here and we’ll tell you how to find it.
                  </p>
                </div>
              </div>
              <div className="login-form">
                <input
                  className={`id ${
                    isValidEmail(id) || id.length === 0 ? '' : 'disabled'
                  }`}
                  type="text"
                  placeholder="이메일*"
                  // 입력할 때마다 state 를 변경
                  onChange={handleIdInput}
                />
                {!isValidEmail(id) && id.length !== 0 ? (
                  <p className="invalid-message">이메일 주소를 입력하세요.</p>
                ) : null}
                <input
                  className="pw"
                  type="password"
                  placeholder="비밀번호*"
                  // 입력할 때마다 state 를 변경
                  onChange={handlePwInput}
                />
                <p className="forgot-pw">
                  <span className="forgot-pw-content">
                    비밀번호를 잊으셨습니까?
                  </span>
                </p>
                <button
                  className="login-button"
                  disabled={!isValidButton}
                  onClick={handleLogin}
                >
                  로그인
                </button>
                <div className="social-login-wrapper">
                  <h4 className="or-line">
                    <span className="or-block">또는</span>
                  </h4>
                  <div className="social-login">
                    <img
                      alt="facebook-login"
                      src="./images/facebook_icon.png"
                    />
                    <img alt="naver-login" src="./images/naver_icon.png" />
                  </div>
                  <p className="privacy-policy">
                    개인 정보 정책에 따라 계정과 연동하는 것에 동의합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 로그인 오른쪽 부분 */}
            <div className="right-half">
              <div className="right-half-top">
                <h1>회원가입</h1>
                <IoCloseOutline
                  size="24"
                  cursor="pointer"
                  onClick={closeModal}
                />
              </div>
              <button className="go-to-signup" onClick={openSignupModal}>
                계정 만들기
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  } else if (showLoginModal === 'signup') {
    return <Signup openLoginModal={openLoginModal} closeModal={closeModal} />;
  } else {
    return null;
  }
}

export default Login;
