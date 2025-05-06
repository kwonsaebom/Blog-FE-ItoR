import { Link } from 'react-router-dom'

import PostMeta from '@components/PostMeta'
import PostImage from '@components/PostImage'

export default function PostItem({ post }) {
  const { postId, title, commentCount, contents, isOwner } = post

  const firstText = contents.find((c) => c.contentType === 'TEXT')?.content || ''
  const firstImage = contents.find((c) => c.contentType === 'IMAGE')?.content

  return (
    <Link to={`/post/${postId}`} className='flex py-2 border-b border-b-gray96'>
      <div className='py-3 px-4 flex flex-col gap-2 pb-0 grow'>
        <h2 className='font-medium'>{title}</h2>
        <p className='pb-1 text-gray33 text-sm font-light line-clamp-2'>{firstText}</p>
        <PostMeta commentCount={commentCount} isOwner={isOwner} />
      </div>
      {firstImage && <PostImage size='small' src={firstImage} />}
    </Link>
  )
}
