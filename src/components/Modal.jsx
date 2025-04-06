import React from "react";
import styled from "styled-components";
import theme from "@styles/theme"; // 만약 테마를 사용하고 있다면

export default function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <StyledModalOverlay>
      <StyledModal>{children}</StyledModal>
    </StyledModalOverlay>
  );
}

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const StyledModal = styled.div`
  background: ${theme.colors.white};
  padding: 24px 16px 16px 16px;
  border-radius: 4px;
  width: ${({ width }) => width || "400px"};
  height: ${({ height }) => height || "auto"};
  position: relative;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
`;
