import { useState } from 'react'
import { Link } from 'react-router-dom'

import UserInfo from '@components/UserInfo'
import Modal from '@components/Modal'

import useModal from '@hooks/useModal'

import LogoIcon from '@assets/icons/logo_circle.svg?react'

export default function Sidebar({ closeSidebar }) {
  const { open, close, isOpen } = useModal()
  const isLogIn = false

  const UserContent = () => (
    <>
      <div>
        <UserInfo />
      </div>
      <div className='flex flex-col h-full justify-between'>
        <div className='flex justify-center gap-2 pt-7'>
          <Link
            to={'/mypage'}
            onClick={closeSidebar}
            className='w-[100px] px-3 py-2 border border-point rounded-3xl text-point text-sm text-center cursor-pointer'
          >
            나의 깃로그
          </Link>
          <button className='w-[100px] px-3 py-2 border border-point rounded-3xl text-point text-sm text-center cursor-pointer'>
            깃로그 쓰기
          </button>
        </div>
        <div className='flex justify-center gap-2 pb-4'>
          <button className='w-[100px] px-3 py-2 border border-gray56 rounded-3xl text-gray56 text-sm cursor-pointer'>
            설정
          </button>
          <button
            onClick={open}
            className='w-[100px] px-3 py-2 border border-gray56 rounded-3xl text-gray56 text-sm cursor-pointer'
          >
            로그아웃
          </button>
        </div>
      </div>
      {isOpen && (
        <Modal
          titleContent='로그아웃을 진행할게요'
          primaryText='로그아웃'
          isCancel={false}
          isLoginPage={false}
          onClose={() => {
            close()
            closeSidebar()
          }}
        />
      )}
    </>
  )
  const GuestContent = () => (
    <>
      <LogoIcon className='w-16 h-16 mt-6 mx-3' />
      <p className='px-4 py-3 mb-5 text-sm font-light text-gray30'>
        You can make anything by writing
      </p>
      <Link
        to={'/mypage'}
        onClick={open}
        className='w-fit mx-3 px-3 py-2 border border-point rounded-3xl text-point text-sm text-center cursor-pointer'
      >
        깃로그 시작하기
      </Link>
      {isOpen && (
        <Modal
          isLoginPage={true}
          onClose={() => {
            close()
            closeSidebar()
          }}
        />
      )}
    </>
  )

  return (
    <aside className='w-60 h-[100vh] fixed z-20 px-3 py-2 bg-gray96 top-0 left-0'>
      <div className='flex flex-col h-full'> {isLogIn ? <UserContent /> : <GuestContent />}</div>
    </aside>
  )
}
