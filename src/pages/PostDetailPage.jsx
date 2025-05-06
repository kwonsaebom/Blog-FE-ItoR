import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { getPostDetail } from '@api/apiRequest'

import PostMeta from '@components/PostMeta'
import UserInfo from '@components/UserInfo'
import CommentInput from '@components/CommentInput'
import Comment from '@components/Comment'
import Toast from '@components/Toast'

import Error from '@components/Error'
import Spinner from '@components/Spinner'

export default function PostDetailPage() {
  const [isToastOpen, setIsToastOpen] = useState(false)
  const { postId } = useParams()

  useEffect(() => {
    if (isToastOpen) {
      const timer = setTimeout(() => setIsToastOpen(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isToastOpen])

  const { data, isLoading, error } = useQuery({
    queryKey: ['postDetail', postId],
    queryFn: () => getPostDetail(postId),
    enabled: !!postId,
  })

  if (isLoading) return <Spinner />
  if (error) return <Error />

  return (
    <>
      <section className='desktop:max-w-[688px] m-auto'>
        <div className='py-10 px-4'>
          <header className='py-3 border-b border-gray96 flex flex-col gap-8'>
            <h1 className='py-3 text-2xl font-medium'>{data?.title}</h1>
            <PostMeta
              nickName={data?.nickName}
              createdAt={data?.createdAt}
              commentCount={data?.comments.length}
            />
          </header>
          <section className='py-8 border-b border-gray96'>
            {data?.contents.map((content) => {
              if (content.contentType === 'TEXT' && content.content.trim()) {
                return (
                  <p key={content.contentOrder} className='py-3 text-sm font-light text-gray30'>
                    {content.content}
                  </p>
                )
              }

              if (content.contentType === 'IMAGE') {
                return (
                  <img
                    key={content.contentOrder}
                    src={content.content}
                    alt={`이미지 ${content.contentType + 1}`}
                    className='w-full py-4 object-contain'
                  />
                )
              }
            })}
          </section>
          <section className='p-4 flex flex-col gap-10'>
            <span className='font-medium'>
              댓글 <span className='font-normal text-point'>{data?.comments.length}</span>
            </span>

            {data.comments.length > 0 ? (
              data.comments.map((comment) => {
                return (
                  <Comment
                    key={comment.commentId}
                    content={comment.content}
                    setIsToastOpen={setIsToastOpen}
                  />
                )
              })
            ) : (
              <p className='text-sm font-light text-gray78 text-center'>
                작성된 댓글이 없습니다. <br />
                응원의 첫 번째 댓글을 달아주세요.
              </p>
            )}

            <CommentInput isLogin={true} />
          </section>
        </div>
      </section>
      <footer className='h-50 mb-12 py-10 px-4 bg-gray96 desktop:py-8'>
        <UserInfo />
      </footer>
      {isToastOpen && <Toast isError={false}>삭제가 완료되었습니다!</Toast>}
    </>
  )
}
