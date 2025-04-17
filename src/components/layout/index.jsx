import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Header from '@components/layout/Header'

export default function layout() {
  const pathname = useLocation().pathname.split('/')[1]
  return (
    <>
      <Header />
      <main className=' y-10 z-0'>
        <Outlet />
      </main>
    </>
  )
}
