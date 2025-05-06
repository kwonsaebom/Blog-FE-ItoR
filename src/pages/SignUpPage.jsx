import AuthForm from '@components/AuthForm'

export default function SignUpPage() {
  return (
    <>
      <header className='my-2 bg-gray96 h-[90px] flex items-center desktop:h-[114px]'>
        <h1 className='py-4 px-4 text-2xl font-medium min-w-[782px] m-auto'>회원가입</h1>
      </header>
      <AuthForm />
    </>
  )
}
