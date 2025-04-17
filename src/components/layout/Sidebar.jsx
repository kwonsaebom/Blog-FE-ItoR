import UserInfo from '@components/UserInfo'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className='w-60 h-screen fixed z-20 px-5 py-6 bg-gray96 top-0 left-0'>
      <UserInfo />
      <div className='flex flex-col h-[75vh] justify-between'>
        <div className='flex gap-2 pt-7'>
          <Link
            to={'/mypage'}
            className='w-[100px] px-3 py-2 border border-point rounded-3xl text-point text-sm cursor-pointer'
          >
            나의 깃로그
          </Link>
          <button className='w-[100px] px-3 py-2 border border-point rounded-3xl text-point text-sm cursor-pointer'>
            깃로그 쓰기
          </button>
        </div>
        <div className='flex gap-2'>
          <button className='w-[100px] px-3 py-2 border border-gray56 rounded-3xl text-gray56 text-sm cursor-pointer'>
            설정
          </button>
          <button className='w-[100px] px-3 py-2 border border-gray56 rounded-3xl text-gray56 text-sm cursor-pointer'>
            로그아웃
          </button>
        </div>
      </div>
    </aside>
  )
}
