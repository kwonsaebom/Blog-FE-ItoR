import { useLocation } from 'react-router-dom'

export default function Input({
  type,
  name,
  label,
  value,
  onChange,
  isLoginPage = false,
  isKakao = false,
  isEditable = true,
  isDisabled = false,
  error,
}) {
  const pathname = useLocation().pathname
  const isModifyPage = pathname.includes('setting')

  return (
    <label className={`flex flex-col gap-3 ${isLoginPage ? '' : 'my-3'}`}>
      {!isLoginPage && !isModifyPage && label}
      <input
        type={type}
        name={name} // ✅ 추가
        value={value}
        onChange={onChange}
        placeholder={label === '생년월일' ? 'YYYY - MM - DD' : label}
        disabled={!isEditable || isDisabled}
        className={`
          ${isModifyPage && label === '닉네임' ? 'mt-6 text-2xl font-medium' : ''}
          w-full py-3 px-4 border rounded-sm text-black focus:outline-0 border-gray90 bg-white
          ${isKakao || isDisabled ? 'bg-gray90 placeholder:text-gray56' : 'bg-transparent placeholder:text-gray78'}
         
        `}
      />
      {isModifyPage && !isEditable && (
        <p className='px-2 py-3 -mb-1 text-xs font-light text-gray78'>* 20글자 이내</p>
      )}
      {error && <p className='text-red-500 text-xs'>{error}</p>}
    </label>
  )
}
