import PostMeta from '@components/PostMeta'

export default function PostDetailPage() {
  return (
    <>
      <div className='py-10 px-4'>
        <header className='py-3 border-b border-gray96 flex flex-col gap-8'>
          <h1 className='py-3 text-2xl font-medium'>32 Title one line</h1>
          <PostMeta />
        </header>
        <section className='py-8 border-b border-gray96 '>
          <p className='py-3 text-sm font-light text-gray30'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, ullam, quis voluptatibus
            et quo necessitatibus debitis tempore incidunt exercitationem quas architecto, obcaecati
            error. Reiciendis harum quod fugiat labore rerum consequuntur. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, ullam, quis
            voluptatibus et quo necessitatibus debitis tempore incidunt exercitationem quas
            architecto, obcaecati error. Reiciendis harum quod fugiat labore rerum consequuntur. It
            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Sunt, ullam, quis voluptatibus et quo necessitatibus debitis tempore incidunt
            exercitationem quas architecto, obcaecati error. Reiciendis harum quod fugiat labore
            rerum consequuntur. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Sunt, ullam, quis voluptatibus et quo necessitatibus
            debitis tempore incidunt exercitationem quas architecto, obcaecati error. Reiciendis
            harum quod fugiat labore rerum consequuntur. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
        <section className='py-3 flex flex-col gap-5'>
          <span className='font-medium'>
            댓글 <span className='font-normal text-point'>0</span>
          </span>
          <p className='text-sm font-light text-gray78 text-center'>
            작성된 댓글이 없습니다. <br />
            응원의 첫 번째 댓글을 달아주세요.
          </p>
          <textarea
            placeholder='로그인을 하고 댓글을 달아보세요!'
            className='h-20 my-3 py-3 px-4 border border-gray90 rounded-sm text-xs font-light placeholder:text-gray30 resize-none'
          />
        </section>
      </div>
    </>
  )
}
