import React from 'react';
import './Modal.scss';

const Modal = props => {
  const { open, close } = props;

  return (
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
