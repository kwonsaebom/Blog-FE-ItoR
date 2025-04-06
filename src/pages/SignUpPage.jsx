import LogoIcon from '@/assets/icons/logo_black.svg?react'
import KakaoIcon from '@/assets/icons/icon_kakao.svg?react'
export default function SignUpPage() {
  return (
    <>
      <header className='bg-gray96 h-[90px] flex items-center desktop:h-[114px]'>
        <h1 className='py-3 px-4 text-2xl font-medium min-w-[782px] m-auto'>회원가입</h1>
      </header>
      <section className='py-20 px-12 desktop:max-w-[782px] desktop:py-20 desktop:m-auto desktop:flex desktop:gap-[90px]'>
        <aside>
          <LogoIcon className='w-[283px] h-[76px] my-10' />
          <p className='px-3 py-4 text-gray56 text-sm font-extralight text-center'>
            You can make anything by writing
          </p>
        </aside>
        <div className='flex flex-col gap-2 desktop:my-10'>
          <button className='w-[294px] h-[45px] rounded-md bg-point text-white text-sm cursor-pointer desktop:w-[312px]'>
            이메일로 회원가입
          </button>
          <span
            className='text-gray56 text-xs text-center relative 
          before:content-[""] before:block before:h-[1px] before:w-[123px] before:bg-gray96 before:absolute before:top-1/2 before:left-3 before:translate-y-1/2
          after:content-[""] after:block after:h-[1px] after:w-[123px] after:bg-gray96 after:absolute after:top-1/2 after:right-3 after:translate-y-1/2'
          >
            또는
          </span>
          <button className='w-[294px] h-[45px] rounded-md bg-kakao-bg text-sm cursor-pointer desktop:w-[312px]'>
            <KakaoIcon className='inline-block mr-1 w-6 h-6 relative top-0.5' />
            <span>카카오로 회원가입</span>
          </button>
        </div>
      </section>
    </>
  )
}
