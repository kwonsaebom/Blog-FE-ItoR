import LogoIcon from '@/assets/icons/logo_black.svg?react'
import KakaoIcon from '@/assets/icons/icon_kakao.svg?react'
export default function SignUpPage() {
  return (
    <>
      <header className='bg-gray96 h-20 flex items-center'>
        <h1 className='text-2xl font-medium min-w-[782px] m-auto'>회원가입</h1>
      </header>
      <section className='max-w-[782px] py-20 m-auto flex gap-[90px]'>
        <aside>
          <LogoIcon className='w-[283px] h-[76px]' />
          <p className='px-3 py-4 text-gray56 text-sm font-light text-center'>
            You can make anything by writing
          </p>
        </aside>
        <div className='flex flex-col gap-2'>
          <button className='w-[312px] h-[45px] rounded-md bg-point text-white cursor-pointer'>
            이메일로 회원가입
          </button>
          <span
            className='text-gray56 text-xs text-center relative 
          before:content-[""] before:block before:h-[1px] before:w-[123px] before:bg-gray96 before:absolute before:top-1/2 before:left-3 before:translate-y-1/2
          after:content-[""] after:block after:h-[1px] after:w-[123px] after:bg-gray96 after:absolute after:top-1/2 after:right-3 after:translate-y-1/2'
          >
            또는
          </span>
          <button className='w-[312px] h-[45px] rounded-md bg-kakao-bg cursor-pointer'>
            <KakaoIcon className='inline-block ㅡr-2 w-6 h-6' />
            <span>카카오로 회원가입</span>
          </button>
        </div>
      </section>
    </>
  )
}
