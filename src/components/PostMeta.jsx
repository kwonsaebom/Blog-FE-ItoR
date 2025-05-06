import exampleImage from '@assets/images/example.png'

export default function PostMeta({ nickName, createdAt, commentCount, isDetail = true }) {
  return (
    <div className='py-3 flex gap-3 items-center text-gray56 text-xs font-light'>
      <img src={exampleImage} className='w-5 h-5 rounded-[20px]' />
      <span className='-ml-1.5 text-gray30'>{nickName}</span>
      {isDetail && (
        <>
          <span>{createdAt.split('T')[0]}</span>
          <span>댓글 {commentCount}</span>
        </>
      )}
    </div>
  )
}
