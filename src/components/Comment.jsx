import PostMeta from '@components/PostMeta'
import MoreIcon from '@assets/icons/icon_more.svg?react'

export default function Comment() {
  return (
    <>
      <section className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <div>
            <PostMeta isDetail={false} />
            <span className='relative -top-4 left-6  text-gray56 text-xs font-light'>
              Fed 17. 2025.
            </span>
          </div>
          <MoreIcon className='text-black' />
        </div>
        <p className='px-4 text-gray30 text-sm font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, esse voluptates qui
          excepturi in beatae placeat sequi possimus officiis eum veniam consequatur molestias
          voluptas harum blanditiis dolores, eos quam dolorum.
        </p>
      </section>
    </>
  )
}
