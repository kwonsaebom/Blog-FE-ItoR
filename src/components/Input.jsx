export default function Input({ type, label, isLoginPage = false }) {
  const limit = <p className='text-gray78 text-xs'>* 20글자 이내</p>
  return (
    <label className={`flex flex-col gap-3 ${isLoginPage ? '' : 'my-3'}`}>
      {isLoginPage ? undefined : label}
      <input
        type={type}
        placeholder={label} // type === 'password' ? '...' : label
        className='py-3 px-4 bg-white border border-gray90 rounded-sm placeholder:text-gray78 '
      />
      {label === '닉네임' ? limit : undefined}
    </label>
  )
}
