import Login from '@components/Login'

export default function SignUpPage() {
  return (
    <>
      <header className='bg-gray96 h-[90px] flex items-center desktop:h-[114px]'>
        <h1 className='py-3 px-4 text-2xl font-medium min-w-[782px] m-auto'>회원가입</h1>
      </header>
      <Login />
    </>
  )
}
