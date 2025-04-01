import React, { useState } from "react";
import styled from "styled-components";

import theme from "@styles/theme";

import Button from "@components/Button";
import Toast from "@components/Toast";
import Input from "@components/Input";
import Image from "@components/Image";

import exampleImage from "@assets/images/example.png";

export default function Example() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastColor, setToastColor] = useState(theme.colors.white);

  const handleButtonClick = (message, color) => {
    setToastMessage(message);
    setToastColor(color);
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <>
      <Container>
        <Button
          onClick={() =>
            handleButtonClick("내용을 입력해주세요", theme.colors.negative)
          }
          width="145px"
          height="40px"
          fontSize="14px"
          color={theme.colors.point}
        >
          깃로그 시작하기
        </Button>

        <Button
          onClick={() =>
            handleButtonClick("저장되었습니다!", theme.colors.positive)
          }
          width="145px"
          height="40px"
          fontSize="14px"
          color={theme.colors.gray56}
        >
          깃로그 시작하기
        </Button>

        <Button
          onClick={() =>
            handleButtonClick("저장되었습니다!", theme.colors.positive)
          }
          width="145px"
          height="40px"
          fontSize="14px"
          color={theme.colors.white}
          $background={theme.colors.black}
        >
          깃로그 시작하기
        </Button>
        <Input placeholder="내용을 입력하세요" />
        <Image
          src={exampleImage}
          alt="샘플 이미지"
          width="150px"
          height="150px"
          borderRadius="8px"
        />
      </Container>
      {showToast && (
        <Toast
          message={toastMessage}
          color={toastColor}
          onClose={handleCloseToast}
        />
      )}
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
