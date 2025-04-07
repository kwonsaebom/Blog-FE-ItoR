import MenuIcon from '@assets/icons/icon_menu.svg?react'
import WriteIcon from '@assets/icons/icon_write.svg?react'

import LogoIcon from '@assets/icons/logo_black.svg?react'
export default function Header() {
  return (
    <header className='py-4 px-3 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <MenuIcon />
        <LogoIcon className='w-[67px] h-[28px]' />
      </div>
      <button className='py-2 px-3 flex items-center gap-1'>
        <WriteIcon className='text-gray56' />
        <span className='text-gray56 text-sm'>깃로그 쓰기</span>
      </button>
    </header>
  )
}
