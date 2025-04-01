import React, { useState } from "react";
import styled from "styled-components";

import theme from "@styles/theme";

import Button from "@components/Button";
import Toast from "@components/Toast";
import Input from "@components/Input";
import Image from "@components/Image";
import Modal from "@components/Modal";

import exampleImage from "@assets/images/example.png";

export default function Example() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastColor, setToastColor] = useState(theme.colors.white);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = (message, color) => {
    setToastMessage(message);
    setToastColor(color);
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

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
          $radius="8px"
        />
        <button onClick={handleOpenModal}>모달 열기</button>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>Title</h2>
          <p>Content</p>
          <ButtonContainer>
            <Button
              onClick={handleCloseModal}
              $radius="2px"
              color={theme.colors.black}
              $border={theme.colors.gray96}
            >
              취소
            </Button>
            <Button
              onClick={handleCloseModal}
              $radius="2px"
              color={theme.colors.white}
              $background={theme.colors.negative}
            >
              삭제하기
            </Button>
          </ButtonContainer>
        </Modal>
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
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;
