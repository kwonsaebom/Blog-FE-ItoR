import LogoIcon from '@assets/icons/logo_circle.svg?react'
import SettingIcon from '@assets/icons/icon_setting.svg?react'
import { Link } from 'react-router-dom'

export default function UserInfo({ isMyPage = false }) {
  return (
    <>
      <section className='py-3 px-2 desktop:max-w-[688px] desktop:m-auto m-auto flex flex-col items-start'>
        <LogoIcon className='w-12 h-12 desktop:w-16 desktop:h-16 ' />
        <p className='py-3 px-2 text-2xl font-medium'>닉네임</p>
        <p className='px-2 pb-3 text-sm font-light text-gray30'>한줄소개</p>
        {isMyPage && (
          <Link
            to='/mypage/setting'
            className='ml-2 mt-3 mb-8 flex gap-1 items-center border border-gray90 rounded-xs py-1 px-2'
          >
            <SettingIcon />
            <span className='text-xs text-gray56 cursor-pointer'>내 프로필 설정</span>
          </Link>
        )}
      </section>
    </>
  )
}
