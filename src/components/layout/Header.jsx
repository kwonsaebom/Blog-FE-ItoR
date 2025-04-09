import { Link } from 'react-router-dom'

import useModal from '@hooks/useModal'
import Modal from '@components/Modal'

import MenuIcon from '@assets/icons/icon_menu.svg?react'
import WriteIcon from '@assets/icons/icon_write.svg?react'
import LogoIcon from '@assets/icons/logo_black.svg?react'

export default function Header() {
  const { isOpen, open, close } = useModal()

  return (
    <header className='py-4 px-3 border-b border-gray96 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <button onClick={open} className='cursor-pointer'>
          <MenuIcon />
        </button>
        <Link to='/'>
          <LogoIcon className='w-[67px] h-[28px]' />
        </Link>
      </div>
      <button className='py-2 px-3 flex items-center gap-1 cursor-pointer'>
        <WriteIcon className='text-gray56' />
        <span className='text-gray56 text-sm'>깃로그 쓰기</span>
      </button>
      {isOpen && <Modal isLoginPage={true} onClose={close} />}
    </header>
  )
}
