import './App.css';
import { useState } from 'react';
import Button from '@/components/Button';
import Image from '@/components/Image';
import { ToastProvider, useToast } from '@/components/Toast';
import Modal from '@/components/Modal';
import TextInput from '@/components/TextInput';
import testImg from '@/assets/testImg.jpg';

const AppContent = () => {
  const { showToast } = useToast();

  const handleShowToast = (message: string, type: 'positive' | 'negative') => {
    showToast(message, type);
  };

  return (
    <>
      <Button
        style={{ borderRadius: '25px', padding: '8px 12px', margin: '0px 10px 10px 10px' }}
        onClick={() => handleShowToast('저장되었습니다!', 'positive')}
      >
        Toast 성공 테스트
      </Button>
      <Button
        style={{ borderRadius: '25px', padding: '8px 12px', margin: '10px' }}
        onClick={() => handleShowToast('내용을 입력해주세요', 'negative')}
      >
        Toast 에러 테스트
      </Button>
    </>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <ToastProvider>
        <div>
          <button
            style={{
              borderRadius: '25px',
              margin: '10px',
              padding: '8px 12px',
              background: 'var(--White, #FFF)',
              fontSize: '14px',
              border: '1px solid var(--Point, #00A1FF)',
            }}
            onClick={() => setIsModalOpen(true)}
          >
            모달 테스트
          </button>

          {isModalOpen && (
            <Modal
              title='해당 블로그를 삭제하시겠어요?'
              description='삭제된 블로그는 다시 확인할 수 없어요.'
              onClose={() => setIsModalOpen(false)}
              onConfirm={() => {
                alert('블로그가 삭제되었습니다.');
                setIsModalOpen(false);
              }}
            />
          )}
        </div>

        {/* Toast 컴포넌트 예시*/}
        <AppContent />

        <Button
          type='Create'
          style={{
            borderRadius: '25px',
            border: '1px solid var(--Point, #00A1FF)',
            background: 'var(--White, #FFF)',
            fontSize: '14px',
            padding: '8px 12px',
            margin: '10px',
          }}
          onClick={() => alert('Clicked!')}
        >
          깃로그 작성하기
        </Button>
        <div style={{ padding: '10px ' }}>
          <h3> 기본 입력창 </h3>
          <TextInput width='656px' placeholder='내용을 입력하세요' />
          <h3> 비활성화 입력창 </h3>
          <TextInput width='656px' placeholder='입력 불가' disabled />
        </div>
        <Image
          src={testImg}
          alt='test image'
          width='100%'
          maxWidth='400px'
          borderRadius='4px'
          objectFit='contain'
          thumbnail={false}
        />
        <Image
          src={testImg}
          alt='test thumbnail'
          width='92px'
          height='92px'
          borderRadius='2px'
          objectFit='cover'
          thumbnail
        />
      </ToastProvider>
    </>
  );
}

export default App;
