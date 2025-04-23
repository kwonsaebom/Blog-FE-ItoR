import { useState } from 'react'

import useModal from '@hooks/useModal'
import Modal from '@components/Modal'

import PostMeta from '@components/PostMeta'
import MoreIcon from '@assets/icons/icon_more.svg?react'

export default function Comment({ setIsToastOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { open, close, isOpen } = useModal()
  return (
    <>
      <section className='flex flex-col relative'>
        <div className='flex justify-between items-center'>
          <div>
            <PostMeta isDetail={false} />
            <span className='relative -top-4 left-6  text-gray56 text-xs font-light'>
              Fed 17. 2025.
            </span>
          </div>
          <button className='p-2 cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MoreIcon className='text-black' />
          </button>

          {isMenuOpen && (
            <>
              <div className='w-40 bg-white rounded-sm shadow-modal flex flex-col items-start absolute top-15 right-2 text-sm before:content-[""] before:absolute before:-top-4 before:right-0 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white'>
                <button
                  className='p-3 cursor-pointer'
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
        <p className='px-4 text-gray30 text-sm font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, esse voluptates qui
          excepturi in beatae placeat sequi possimus officiis eum veniam consequatur molestias
          voluptas harum blanditiis dolores, eos quam dolorum.
        </p>
      </section>
      {isOpen && (
        <Modal
          titleContent='댓글을 삭제할까요?'
          primaryText='삭제하기'
          isCancel={true}
          isLoginPage={false}
          onClose={close}
          setToastOpen={setIsToastOpen}
        />
      )}
    </>
  )
}
