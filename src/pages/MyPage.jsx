import PostItem from '@components/PostItem'
import UserInfo from '@components/UserInfo'

export default function MyPage() {
  return (
    <>
      <div className='pt-35 bg-gray96'>
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
      </div>
    </>
  )
}
