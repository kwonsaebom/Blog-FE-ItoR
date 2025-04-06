import MenuIcon from '@/assets/icons/icon_menu.svg?react'
import LogoIcon from '@/assets/icons/logo_black.svg?react'

export default function Header() {
  return (
    <header className='py-4 px-3 flex items-center gap-3 '>
      <MenuIcon />
      <LogoIcon className='w-[67px] h-[28px]' />
    </header>
  )
}
