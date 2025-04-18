import PostItem from '@components/PostItem'
import Pagination from '@components/Pagination'

export default function MainPage() {
  return (
    <div className='py-5 pt-20 desktop:max-w-[688px] mx-auto'>
      <PostItem isImg={true} />
      <PostItem />
      <PostItem isImg={true} />
      <PostItem />
      <PostItem isImg={true} />
      <PostItem isImg={true} />
      <PostItem />
      <PostItem />

      <Pagination />
    </div>
  )
}
