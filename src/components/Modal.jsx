import PropTypes from 'prop-types';
import React from 'react';
import { Overlay, ModalWrapper, ModalContent, ModalClose } from './Modal.style';

const Modal = ({ action, children }) => {
  return (
    <>
      <Overlay></Overlay>
      <ModalWrapper>
        <ModalContent>
          <ModalClose>
            <span>Close</span>
          </ModalClose>
          <div>{children}</div>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};
Modal.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node,
};
export default Modal;
