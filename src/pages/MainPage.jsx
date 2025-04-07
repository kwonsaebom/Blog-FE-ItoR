import PostItem from '@components/PostItem'

import Modal from '@components/Modal'

export default function MainPage() {
  return (
    <div className='py-5 desktop:py-8 desktop:max-w-[688px] m-auto'>
      <div className='bg-amber-400'>
        <Modal
          titleContent='댓글을 삭제할까요?'
          subTitleContent='찐삭제?'
          closeText='취소'
          primaryText='삭제하기'
          isCancel={true}
        />
      </div>
      <div className='bg-amber-400'>
        <Modal isLoginPage={true} />
      </div>
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
