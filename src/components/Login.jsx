import BlackLogoIcon from '@assets/icons/logo_black.svg?react'
import WhiteLogoIcon from '@assets/icons/logo_white.svg?react'
import KakaoIcon from '@assets/icons/icon_kakao.svg?react'

import Input from '@components/Input'

import { useLocation } from 'react-router-dom'

export default function Login() {
  const path = useLocation().pathname.split('/')[1]
  const isLoginPage = !path.includes('signup')

  const loginBox = (
    <>
      <Input type='email' label='이메일' isLoginPage={true} />
      <Input type='password' label='비밀번호' isLoginPage={true} />
    </>
  )
  return (
    <section
      className={`py-20 px-12 desktop:max-w-[782px] desktop:py-20 desktop:m-auto desktop:flex desktop:gap-[90px] ${
        isLoginPage ? 'bg-black' : ''
      }`}
    >
      <aside className='flex flex-col justify-center'>
        {isLoginPage ? (
          <WhiteLogoIcon className='w-[283px] h-[76px] my-10' />
        ) : (
          <BlackLogoIcon className='w-[283px] h-[76px] my-10' />
        )}
        <p className='px-3 py-4 text-gray56 text-sm font-extralight text-center'>
          You can make anything by writing
        </p>
      </aside>
      <div className='flex flex-col gap-2 desktop:my-10'>
        {isLoginPage ? loginBox : undefined}
        <button className='w-[294px] h-[45px] rounded-md bg-point text-white text-sm cursor-pointer desktop:w-[312px]'>
          이메일로 {isLoginPage ? '로그인' : '회원가입'}
        </button>
        <span
          className={`text-gray56 text-xs text-center relative 
          before:content-[""] before:block before:h-[1px] before:w-[123px] before:absolute before:top-1/2 before:left-3 before:translate-y-1/2 before:bg-${isLoginPage ? 'gray30' : 'gray96'}
          after:content-[""] after:block after:h-[1px] after:w-[123px] after:absolute after:top-1/2 after:right-3 after:translate-y-1/2 after:bg-${isLoginPage ? 'gray30' : 'gray96'}
          ${isLoginPage ? 'before:bg-gray30 after:bg-gray30' : ''}
          `}
        >
          {isLoginPage ? 'SNS' : '또는'}
        </span>
        <button className='w-[294px] h-[45px] rounded-md bg-kakao-bg text-sm cursor-pointer desktop:w-[312px]'>
          <KakaoIcon className='inline-block mr-1' />
          <span>카카오로 {isLoginPage ? '로그인' : '회원가입'}</span>
        </button>
      </div>
    </section>
  )
}
