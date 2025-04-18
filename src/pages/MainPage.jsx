import PostItem from '@components/PostItem'

export default function MainPage() {
  return (
    <div className='py-5 pt-20 desktop:py-8 desktop:max-w-[688px] m-auto'>
      <PostItem isImg={true} />
      <PostItem />
      <PostItem isImg={true} />
      <PostItem />
      <PostItem isImg={true} />
      <PostItem isImg={true} />
      <PostItem />
      <PostItem />
    </div>
  )
}
