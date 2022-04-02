import { Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import './Login.scss';
import { useState } from 'react';
import Signup from './Signup';

function Login({ showLoginModal, closeLoginModal, closeModal }) {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openSignupModal = () => {
    setShowSignupModal(true);
  };

  const closeSignupModal = event => {
    event.preventDefault();
    setShowSignupModal(false);
  };

  if (showLoginModal === true) {
    return <p>로그인창보여요</p>;
  } else {
    return <p>안보여요</p>;
  }

  // return (
  //   <div>
  //     {showLoginModal ? (
  //       <div className="login-background" onClick={closeModal}>
  //         <section
  //           className="login-container"
  //           onClick={e => e.stopPropagation()}
  //         >
  //           <div className="left-half">
  //             <div className="login-comment">
  //               <p className="login-title">로그인</p>
  //               <div className="guest-purchase-comment">
  //                 <p>
  //                   신속한 결제 진행을 위해 필요한 정보를 요청할 수 있습니다.
  //                 </p>
  //                 <p>
  //                   Can’t find your order? You might have purchased as a guest.
  //                   Click here and we’ll tell you how to find it.
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="login-form">
  //               <input className="id" type="text" placeholder="이메일*" />
  //               <input className="pw" type="password" placeholder="비밀번호*" />
  //               <Link to="/forgot-pw" className="forgot-pw">
  //                 비밀번호를 잊으셨습니까?
  //               </Link>
  //               <button className="login-button">로그인</button>
  //               <div className="social-login-wrapper">
  //                 <h4>
  //                   <span>또는</span>
  //                 </h4>
  //                 <div className="social-login">
  //                   <img
  //                     alt="facebook-login"
  //                     src="./images/facebook_icon.png"
  //                   />
  //                   <img alt="naver-login" src="./images/naver_icon.png" />
  //                 </div>
  //                 <p className="privacy-policy">
  //                   개인 정보 정책에 따라 계정과 연동하는 것에 동의합니다.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="right-half">
  //             <div className="right-half-top">
  //               <h1>회원가입</h1>
  //               <IoCloseOutline
  //                 size="24"
  //                 cursor="pointer"
  //                 onClick={closeModal}
  //               />
  //             </div>
  //             <button onClick={openSignupModal}>계정 만들기</button>
  //           </div>
  //         </section>
  //       </div>
  //     ) : null} */}
  //     <Signup
  //       showSignupModal={showSignupModal}
  //       closeSignupModal={closeSignupModal}
  //       closeModal={closeModal}
  //     />
  //   </div>
  // );
}

export default Login;
