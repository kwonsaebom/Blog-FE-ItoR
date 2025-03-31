import React from 'react';
import Button from './Button';
import styled from 'styled-components';

interface ModalProps {
  title: string;
  description: string;
  onClose: () => void;
  onConfirm: () => void;
  width?: string;
  height?: string;
}

const ModalTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.07px;
`;

const ModalDescription = styled.p`
  font-size: 12px;
  color: #909090;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

const ModalContent = styled.div`
  display: flex;
  padding: 0px 4px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  gap: 8px;
`;

const ModalContainer = styled.div<{ width?: string; height?: string | undefined }>`
  display: flex;
  width: ${({ width }) => width || '326px'};
  height: ${({ height }) => (height ? height : 'auto')};
  padding: 24px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 4px;
  background: var(--White, #fff);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
`;

// 오버레이 배경 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(182, 182, 182, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  width: 100%;
  gap: 12px;
`;

const Modal = ({ title, description, onClose, onConfirm, width, height }: ModalProps) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer width={width} height={height} onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
        </ModalContent>
        <ButtonGroup>
          <Button
            onClick={onClose}
            style={{
              flex: 1,
              borderRadius: '2px',
              backgroundColor: '#FFF',
              border: '1px solid #F5F5F5',
            }}
          >
            취소
          </Button>
          <Button
            onClick={onConfirm}
            style={{ flex: 1, backgroundColor: '#FF3F3F', color: '#FFFFFF' }}
          >
            삭제하기
          </Button>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
