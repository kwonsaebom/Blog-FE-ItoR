import exampleImage from '@assets/images/example.png'

export default function PostItem() {
  return (
    <>
      <section className='flex py-2 border-b border-b-gray96'>
        <div className='py-3 px-4 flex flex-col gap-2 pb-0'>
          <h2 className='font-medium'>16 Title on line</h2>
          <p className='pb-1 text-gray33 text-sm font-light line-clamp-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat perferendis
            repellendus? Necessitatibus minima, nulla et debitis facere placeat illum illo beatae
            fuga hic at, voluptate dolor dicta consectetur doloremque.
          </p>
          <div className='py-3 flex gap-3 items-center text-gray56 text-xs font-light'>
            <img src={exampleImage} className='w-5 h-5 rounded-[20px]' />
            <span className='-ml-1.5 text-gray30'>닉네임</span>
            <span>Fed 17. 2025.</span>
            <span>댓글0</span>
          </div>
        </div>
        <img src={exampleImage} className='py-3 px-4 w-[92px] h-[92px] box-content' />
      </section>
    </>
  )
}
