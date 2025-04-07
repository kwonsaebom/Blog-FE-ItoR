import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'

export default function layout() {
  const path = useLocation().pathname.split('/')[1]
  return (
    <>
      <Header />
      <main className='desktop:max-w-[688px] m-auto'>
        <Outlet />
      </main>
      {path.includes('post') && <Footer />}
    </>
  )
}
