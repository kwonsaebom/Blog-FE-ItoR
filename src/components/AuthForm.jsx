import { useNavigate, useLocation, Link } from 'react-router-dom'

import Input from '@components/Input'

import BlackLogoIcon from '@assets/icons/logo_black.svg?react'
import WhiteLogoIcon from '@assets/icons/logo_white.svg?react'
import KakaoIcon from '@assets/icons/icon_kakao.svg?react'
import CloseIcon from '@assets/icons/icon_close.svg?react'

export default function AuthForm({ onClose }) {
  const pathname = useLocation().pathname
  const isLoginPage = !pathname.includes('signup')

  const navigate = useNavigate()

  // 조건 처리 (로그인 / 회원가입)
  const mainButtonText = `이메일로 ${isLoginPage ? '로그인' : '회원가입'}`

  const mainButtonLink = () => {
    if (isLoginPage) {
      onClose()
    } else {
      navigate('/signup/email')
    }
  }

  const kakaoButtonText = `카카오로 ${isLoginPage ? '로그인' : '회원가입'}`
  const kakaoButtonLink = () => {
    navigate(isLoginPage ? '' : '/signup/kakao')
  }
  const backColor = isLoginPage ? 'bg-black' : ''
  const dividerText = isLoginPage ? 'SNS' : '또는'
  const dividerColor = isLoginPage ? 'gray30' : 'gray96'
  const Logo = isLoginPage ? WhiteLogoIcon : BlackLogoIcon
  return (
    <section
      className={`m-4 py-20 px-8 rounded-lg absolute inset-x-0 top-1/2 -translate-y-1/2  desktop:max-w-[782px] desktop:py-20 desktop:m-auto desktop:flex desktop:gap-[90px]  ${backColor}`}
    >
      {isLoginPage ? (
        <button onClick={onClose} className='absolute top-6 right-6 cursor-pointer'>
          <CloseIcon />
        </button>
      ) : undefined}
      <aside className='w-[294px] flex flex-col justify-center items-center'>
        <Logo className='w-[283px] h-[76px] my-10' />
        <p className='px-3 py-4 text-gray56 text-sm font-extralight text-center'>
          You can make anything by writing
        </p>
      </aside>

      <div className='w-[294px] desktop:w-[312px] flex flex-col gap-2 desktop:my-10'>
        {isLoginPage && (
          <>
            <Input type='email' label='이메일' isLoginPage />
            <Input type='password' label='비밀번호' isLoginPage />
          </>
        )}

        <button
          onClick={mainButtonLink}
          className='w-[294px] h-[45px] rounded-md bg-point text-white text-sm cursor-pointer desktop:w-[312px]'
        >
          {mainButtonText}
        </button>

        <span
          className={`text-gray56 text-xs text-center relative
            before:content-[""] before:block before:h-[1px] before:w-[123px] before:absolute before:top-1/2 before:left-3 before:translate-y-1/2 before:bg-${dividerColor}
            after:content-[""] after:block after:h-[1px] after:w-[123px] after:absolute after:top-1/2 after:right-3 after:translate-y-1/2 after:bg-${dividerColor}
          `}
        >
          {dividerText}
        </span>

        <button
          onClick={kakaoButtonLink}
          className='w-[294px] h-[45px] rounded-md bg-kakao-bg text-sm cursor-pointer desktop:w-[312px]'
        >
          <KakaoIcon className='inline-block mr-1' />
          <span>{kakaoButtonText}</span>
        </button>

        {isLoginPage && (
          <Link to='/signup' onClick={onClose} className='text-gray56 text-xs text-center'>
            또는 회원가입
          </Link>
        )}
      </div>
    </section>
  )
}
