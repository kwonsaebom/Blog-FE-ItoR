import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import Header from '@components/layout/Header'
import Sidebar from '@components/layout/Sidebar'

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isEditable, setIsEditable] = useState(false)

  const pathname = useLocation().pathname.split('/')[1]

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <Header
        onSidebarToggle={toggleSidebar}
        setIsEditable={setIsEditable}
        isEditable={isEditable}
      />
      {isSidebarOpen && (
        <>
          <div className='fixed inset-0 z-10 bg-transparent' onClick={closeSidebar} />
          <Sidebar closeSidebar={closeSidebar} />
        </>
      )}
      <main className='py-15 z-0'>
        <Outlet context={{ isEditable }} />
      </main>
    </>
  )
}
