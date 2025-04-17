import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Header from '@components/layout/Header'
import Sidebar from '@components/layout/Sidebar'

export default function layout() {
  const pathname = useLocation().pathname.split('/')[1]
  return (
    <>
      <Header />
      <Sidebar />
      <main className=' py-10 z-0'>
        <Outlet />
      </main>
    </>
  )
}
