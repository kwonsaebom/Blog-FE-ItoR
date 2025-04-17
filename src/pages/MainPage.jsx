import PostItem from '@components/PostItem'

export default function MainPage() {
  return (
    <div className='py-5 desktop:py-8 desktop:max-w-[650px] m-auto'>
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
