import { useLocation } from 'react-router-dom'

import Input from '@components/Input'
import Modal from '@components/Modal'

import useModal from '@hooks/useModal'

import LogoIcon from '@assets/icons/logo_circle.svg?react'
import PhotoIcon from '@assets/icons/icon_add_photo.svg?react'
import KakaoIcon from '@assets/icons/icon_kakao.svg?react'

export default function SignUpForm() {
  const { isOpen, open, close } = useModal()
  const pathname = useLocation().pathname.split('/')[2]

  const isKakao = pathname.includes('kakao')

  return (
    <>
      <header className='bg-gray96 h-[125px] flex items-center desktop:h-[148px]'>
        <div className='desktop:max-w-[688px] desktop:m-auto'>
          <h1 className='py-1.5 px-4 text-2xl font-medium min-w-[782px] m-auto'>회원가입</h1>
          <p className='py-1.5 px-4 text-gray-30 text-sm font-light'>
            가입을 위해 회원님의 정보를 입력해주세요.
          </p>
        </div>
      </header>
      <section className='py-3 px-4 flex flex-col text-sm font-light text-gray56 desktop:max-w-[688px] desktop:m-auto'>
        <div className='py-5 flex flex-col gap-4'>
          <span>프로필 사진</span>
          <LogoIcon className='w-[90px] h-[90px]' />
          <button className='w-fit px-2 py-1 border border-gray90 rounded-xs text-xs font-normal'>
            <PhotoIcon className='inline-block' />
            <span className='ml-1'>프로필 사진 추가</span>
          </button>
        </div>

        {isKakao && (
          <label className='flex flex-col gap-3 my-3'>
            소셜 로그인
            <div className='py-3 px-4 bg-gray90 border border-gray90 rounded-sm text-gray56 flex gap-2 items-center'>
              <KakaoIcon />
              <span>카카오 로그인</span>
            </div>
          </label>
        )}
        <Input type='email' label='이메일' isKakao={isKakao} />
        {!isKakao && <Input type='password' label='비밀번호' />}
        {!isKakao && <Input type='password' label='비밀번호 확인' />}
        <Input type='text' label='이름' isKakao={isKakao} />
        <Input type='text' label='생년월일' />
        <Input type='text' label='닉네임' />
        <Input type='text' label='한 줄 소개' />
        <button
          onClick={open}
          className='w-full py-2 my-5 border border-point rounded-[25px] text-point font-normal cursor-pointer'
        >
          회원가입 완료
        </button>

        {isOpen && (
          <Modal
            titleContent='회원가입이 완료되었습니다!'
            subTitleContent='이제 로그인하여 서비스를 이용해보세요.'
            primaryText='확인'
            isCancel={false}
            isLoginPage={false}
            onClose={close}
          />
        )}
      </section>
    </>
  )
}
