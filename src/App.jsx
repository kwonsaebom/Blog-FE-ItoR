import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'

import router from '@/routes'
import Modal from '@components/Modal'

function App() {
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </>
  )
}

export default App
