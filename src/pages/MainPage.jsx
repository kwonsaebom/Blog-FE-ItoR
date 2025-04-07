import PostItem from '@components/PostItem'

export default function MainPage() {
  return (
    <div className='py-5 desktop:py-8'>
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
