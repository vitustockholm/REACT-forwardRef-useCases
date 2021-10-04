import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const ModalContent = styled.div`
  min-width: 600px;
  border: 5px solid #eee;
  padding: 15px;
  color: #fff;
  background-color: #333;
`;

export const ModalClose = styled.div`
  display: flex;

  justify-content: flex-end;
  span {
    text-decoration: none;
    color: #fff;

    font-size: 12px;

    &:hover {
      color: #ddd;
      cursor: pointer;
    }
  }
`;
