import React from 'react';
import './Modal.scss';

const Modal = props => {
  // open:state가 true인지 false인지
  const { open, close } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <button className="close" onClick={close}>
            &times;
          </button>
          <main>{props.children}</main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
