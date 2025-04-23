import PostMeta from '@components/PostMeta'

export default function CommentInput({ isLogin = false }) {
  const renderTextarea = (placeholder, extraClass = '') => (
    <textarea
      placeholder={placeholder}
      className={`h-20 w-full py-3 rounded-sm text-xs font-light text-gray30 placeholder:text-gray56 resize-none focus:outline-0 ${extraClass}`}
    />
  )

  return (
    <>
      {isLogin ? (
        <div className='py-3 px-4 rounded-sm border border-gray90 flex flex-col'>
          <PostMeta isDetail={false} />
          {renderTextarea('댓글을 입력하세요.', 'border-b border-gray96')}
          <button className='w-fit py-2 px-4 mt-2 border border-gray56 rounded-3xl text-gray56 text-sm self-end'>
            등록
          </button>
        </div>
      ) : (
        renderTextarea('로그인을 하고 댓글을 달아보세요!', 'my-3 border border-gray90')
      )}
    </>
  )
}
