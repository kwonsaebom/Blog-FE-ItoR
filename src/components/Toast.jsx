import React, { useEffect } from "react";
import styled from "styled-components";

import theme from "@styles/theme";

export default function Toast({ message, color, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {}, 3000);

    const closeTimer = setTimeout(() => {
      onClose();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, [message, onClose]);

  return <ToastContainer color={color}>{message}</ToastContainer>;
}

const ToastContainer = styled.div`
  display: inline-block;
  color: ${({ color }) => color};
  border: 1px solid;
  border-color: ${({ color }) => color || theme.colors.gray50};
  padding: 8px 12px;
  border-radius: 25px;
  font-size: 14px;

  transition: ease-in-out, transform 0.5s ease-in-out;

  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
