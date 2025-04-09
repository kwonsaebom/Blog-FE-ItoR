import { Link, useLocation } from 'react-router-dom'

import useModal from '@hooks/useModal'
import Modal from '@components/Modal'

import MenuIcon from '@assets/icons/icon_menu.svg?react'
import WriteIcon from '@assets/icons/icon_write.svg?react'
import LogoIcon from '@assets/icons/logo_black.svg?react'

export default function Header() {
  const { isOpen, open, close } = useModal()

  const pathname = useLocation().pathname
  const isWritePage = pathname.includes('write')

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
      {isWritePage ? (
        <div className='flex gap-2'>
          <button className='py-2 px-3 text-negative'>삭제하기</button>
          <button className='py-2 px-3'>게시하기</button>
        </div>
      ) : (
        <Link to='/write' className='py-2 px-3 flex items-center gap-1 cursor-pointer'>
          <WriteIcon className='text-gray56' />
          <span className='text-gray56 text-sm'>깃로그 쓰기</span>
        </Link>
      )}
      {isOpen && <Modal isLoginPage={true} onClose={close} />}
    </header>
  )
}
