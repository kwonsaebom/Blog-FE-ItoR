import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import PostItem from '@components/PostItem'
import Pagination from '@components/Pagination'
import Spinner from '@components/Spinner'
import Error from '@components/Error'
import { getPostList } from '@api/apiRequest'

export default function MainPage() {
  const [page, setPage] = useState(1)
  const size = 5

  const { data, isLoading, error } = useQuery({
    queryKey: ['postItem', page],
    queryFn: () => getPostList(size, page),
    keepPreviousData: true,
  })

  if (isLoading) return <Spinner />
  if (error) return <Error />

  return (
    <div className='py-5 desktop:max-w-[688px] mx-auto'>
      {data.map((post) => (
        <PostItem key={post.postId} post={post} />
      ))}

      <Pagination currentPage={page} setPage={setPage} totalPages={size} />
    </div>
  )
}
