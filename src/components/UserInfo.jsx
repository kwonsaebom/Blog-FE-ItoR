import LogoIcon from '@assets/icons/logo_circle.svg?react'

export default function UserInfo() {
  return (
    <>
      <section className='desktop:max-w-[688px] desktop:m-auto'>
        <LogoIcon className='w-12 h-12 desktop:w-16 desktop:h-16 ' />
        <p className='py-3 text-2xl font-medium'>닉네임</p>
        <p className=' text-sm font-light text-gray30'>한줄소개</p>
      </section>
    </>
  )
}
