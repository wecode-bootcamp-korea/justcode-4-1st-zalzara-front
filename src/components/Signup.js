import React, { useCallback, useState } from 'react';
import './Signup.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { HiChevronLeft } from 'react-icons/hi';

function Signup({ openLoginModal, closeModal }) {
  // id, pw, ... 를 받아 state 로 사용
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    fetch('http://localhost:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
        username: username,
        policyAgreed: true,
        overseasPrivacy: true,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
  };

  const handleUsernameInput = e => {
    setUsername(e.target.value);
  };

  // 로그인 버튼 활성화 여부
  const isValidButton =
    username.length !== 0 && isValidEmail(id) && isValidPw(pw);

  // email 형식 가능 여부
  function isValidEmail(str) {
    const regEmail =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    return regEmail.test(str);
  }

  // pw 형식 가능 여부
  function isValidPw(str) {
    const regPw =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return regPw.test(str);
  }

  // 체크 박스
  const [checkedList, setCheckedLists] = useState([]);
  // 전체 체크 클릭 시 발생하는 함수
  const onCheckedAll = useCallback(checked => {
    if (checked) {
      const checkedListArray = [];

      dataLists.forEach(list => checkedListArray.push(list));

      setCheckedLists(checkedListArray);
    } else {
      setCheckedLists([]);
    }
  }, []);

  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter(el => el !== list));
      }
    },
    [checkedList]
  );

  return (
    <div>
      <div className="signup-background" onClick={closeModal}>
        <section className="signup-wrapper" onClick={e => e.stopPropagation()}>
          <div className="signup-container">
            <div className="signup-top">
              <div className="signup-title">
                <HiChevronLeft
                  className="back-to-login"
                  size="24"
                  onClick={openLoginModal}
                />
                <IoCloseOutline
                  className="x-mark"
                  size="24"
                  onClick={closeModal}
                />
                <div>자라홈 계정 만들기</div>
              </div>
              <div>
                <input type="radio" checked />
                <span>개인</span>
                &nbsp;&nbsp;
                <input type="radio" />
                <span>회사</span>
              </div>
            </div>
            <div className="signup-form">
              <input
                className="name"
                type="text"
                placeholder="이름*"
                // 입력할 때마다 state 를 변경
                onChange={handleUsernameInput}
              />
              <input
                className={`id ${
                  isValidEmail(id) || id.length === 0 ? '' : 'disabled'
                }`}
                type="text"
                placeholder="이메일*"
                // 입력할 때마다 state 를 변경
                onChange={handleIdInput}
              />
              <input
                className={`pw ${
                  isValidPw(pw) || pw.length === 0 ? '' : 'disabled'
                }`}
                type="password"
                placeholder="비밀번호*"
                // 입력할 때마다 state 를 변경
                onChange={handlePwInput}
              />
              <div className="consents">
                <div className="consents-checkbox">
                  <input
                    type="checkbox"
                    required
                    onChange={e => onCheckedAll(e.target.checked)}
                    checked={
                      checkedList.length === 0
                        ? false
                        : checkedList.length === dataLists.length
                        ? true
                        : false
                    }
                  />
                  <span>모두동의</span>
                </div>
                {dataLists.map(list => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="consents-checkbox">
                    <input
                      key={list.id}
                      type="checkbox"
                      required
                      onChange={e => onCheckedElement(e.target.checked, list)}
                      checked={checkedList.includes(list) ? true : false}
                    />
                    <span>{list.data}</span>
                  </div>
                ))}
              </div>
              <button
                className="make-account"
                disabled={!isValidButton}
                onClick={handleSignup}
              >
                계정 만들기
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const dataLists = [
  { id: 1, data: '* 개인정보의 수집 및 이용에 대한 동의. 자세히 보기.' },
  { id: 2, data: '* 개인정보의 국외 이전에 대한 동의. 자세히 보기.' },
  {
    id: 3,
    data: '뉴스레터 구독을 위한 개인정보의 수집 및 이용에 대한 동의.자세히 보기.',
  },
];

export default Signup;
