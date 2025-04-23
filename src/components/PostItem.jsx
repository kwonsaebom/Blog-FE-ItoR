import { Link } from 'react-router-dom'

import PostMeta from '@components/PostMeta'
import PostImage from '@components/PostImage'
export default function PostItem({ isImg = false }) {
  // isImg : 데이터 들어오면 삭제

  return (
    <>
      <Link to='/post/1' className='flex py-2 border-b border-b-gray96 '>
        <div className='py-3 px-4 flex flex-col gap-2 pb-0'>
          <h2 className='font-medium'>16 Title on line</h2>
          <p className='pb-1 text-gray33 text-sm font-light line-clamp-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat perferendis
            repellendus? Necessitatibus minima, nulla et debitis facere placeat illum illo beatae
            fuga hic at, voluptate dolor dicta consectetur doloremque.
          </p>
          <PostMeta />
        </div>
        {isImg && <PostImage size='small' />}
      </Link>
    </>
  )
}
