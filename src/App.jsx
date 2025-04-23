import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'

import router from '@/routes'
import Modal from '@components/Modal'

function App() {
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />

      {/* <div className='bg-amber-400'>
        <Modal
          titleContent='댓글을 삭제할까요?'
          subTitleContent='찐삭제?'
          closeText='취소'
          primaryText='삭제하기'
          isCancel={true}
        />
      </div> */}
    </>
  )
}

export default App
