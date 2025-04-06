export default function Input({ type, label }) {
  const limit = <p className='text-gray78 text-xs'>* 20글자 이내</p>
  return (
    <label className='py-3 flex flex-col gap-3'>
      {label}
      <input
        type={type}
        placeholder={type === 'password' ? '......' : label}
        className='py-3 px-4 border border-gray90 rounded-sm placeholder:text-gray78 '
      />
      {label === '닉네임' ? limit : undefined}
    </label>
  )
}
