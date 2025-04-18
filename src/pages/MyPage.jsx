import PostItem from '@components/PostItem'
import UserInfo from '@components/UserInfo'
import Pagination from '@components/Pagination'

export default function MyPage() {
  return (
    <>
      <div className='pt-30 bg-gray96 px-2'>
        <UserInfo isMyPage={true} />
      </div>
      <div className='py-5 desktop:py-8 desktop:max-w-[688px] m-auto'>
        <div className='m-auto'>
          <PostItem isImg={true} />
          <PostItem />
          <PostItem isImg={true} />
          <PostItem />
          <PostItem isImg={true} />
          <PostItem isImg={true} />
          <PostItem />
          <PostItem />
        </div>
        <Pagination />
      </div>
    </>
  )
}
