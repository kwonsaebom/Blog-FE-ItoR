import PostItem from '@components/PostItem'

export default function MainPage() {
  return (
    <div className='py-5 desktop:py-8 desktop:max-w-[688px] m-auto'>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  )
}
