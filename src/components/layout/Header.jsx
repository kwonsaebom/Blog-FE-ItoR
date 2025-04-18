import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import useModal from '@hooks/useModal'
import Modal from '@components/Modal'
import Toast from '@components/Toast'
import Sidebar from '@components/layout/Sidebar'

import MenuIcon from '@assets/icons/icon_menu.svg?react'
import WriteIcon from '@assets/icons/icon_write.svg?react'
import LogoIcon from '@assets/icons/logo_black.svg?react'
import ChatIcon from '@assets/icons/icon_chat.svg?react'
import MoreIcon from '@assets/icons/icon_more.svg?react'

export default function Header({ onSidebarToggle, setIsEditable, isEditable }) {
  const { isOpen, open, close } = useModal()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [modalType, setModalType] = useState('default')
  const [isToastOpen, setIsToastOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const pathname = useLocation().pathname

  const isWritePage = pathname.includes('write')
  const isPostPage = pathname.includes('post')
  const isModifyPage = pathname.includes('setting')

  const defaultButton = (
    <Link to='/write' className='py-2 px-3 flex items-center gap-1 cursor-pointer'>
      <WriteIcon className='text-gray56' />
      <span className='text-gray56 text-sm'>깃로그 쓰기</span>
    </Link>
  )

  const writePageButton = (
    <div className='flex gap-1'>
      <button className='py-2 px-3 text-negative cursor-pointer'>삭제하기</button>
      <button className='py-2 px-3 cursor-pointer'>게시하기</button>
    </div>
  )

  const postPageButton = (
    <div className='flex items-center gap-2'>
      <button className='p-2 cursor-pointer'>
        <ChatIcon />
      </button>
      <button className='p-2 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MoreIcon />
      </button>
      {isMenuOpen && (
        <>
          <div className='w-40 bg-white rounded-sm shadow-modal flex flex-col items-start absolute top-15 right-5 text-sm before:content-[""] before:absolute before:-top-4 before:right-0 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white'>
            <button className='p-3 cursor-pointer'>수정하기</button>
            <button
              className='p-3 text-negative cursor-pointer'
              onClick={() => {
                open()
                setIsMenuOpen(false)
              }}
            >
              삭제하기
            </button>
          </div>
        </>
      )}
    </div>
  )

  const modifyPageButton = (
    <>
      {isEditable ? (
        <div className='flex gap-1'>
          <button
            onClick={() => {
              setIsEditable(false)
            }}
            className='py-2 px-3 text-negative cursor-pointer'
          >
            취소하기
          </button>
          <button
            onClick={() => {
              setIsEditable(false)
            }}
            className='py-2 px-3 cursor-pointer'
          >
            저장하기
          </button>
        </div>
      ) : (
        <button
          className='py-2 px-3 cursor-pointer'
          onClick={() => {
            setIsEditable(true)
          }}
        >
          수정하기
        </button>
      )}
    </>
  )

  useEffect(() => {
    if (isToastOpen) {
      const timer = setTimeout(() => setIsToastOpen(false), 1000)

      return () => clearTimeout(timer)
    }
  }, [isToastOpen])

  return (
    <header className='z-10 fixed w-full py-4 px-3 bg-white border-b border-gray96 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <button
          className='cursor-pointer'
          onClick={onSidebarToggle}
          // onClick={() => {
          //   open()
          //   setModalType('login')
          // }}
          // className='cursor-pointer'
        >
          {isSidebarOpen && <Sidebar />}
          <MenuIcon />
        </button>
        <Link to='/'>
          <LogoIcon className='w-[67px] h-[28px]' />
        </Link>
      </div>

      {isWritePage && writePageButton}
      {isPostPage && postPageButton}
      {isModifyPage && modifyPageButton}
      {!isWritePage && !isPostPage && !isModifyPage && defaultButton}

      {isOpen &&
        (modalType === 'login' ? (
          <Modal
            isLoginPage={true}
            onClose={() => {
              close()
              setModalType('default')
            }}
          />
        ) : (
          <Modal
            titleContent='해당 블로그를 삭제하시겠어요?'
            subTitleContent='삭제된 블로그는 다시 확인할 수 없어요.'
            primaryText='삭제하기'
            isCancel={true}
            isLoginPage={false}
            onClose={close}
            setToastOpen={setIsToastOpen}
          />
        ))}
      {isToastOpen && <Toast isError={false}>삭제가 완료되었습니다</Toast>}
    </header>
  )
}
