import PageNumber from '@components/PageNumber'
import { useState } from 'react'

export default function Pagination({ totalPages = 5 }) {
  const [currentPage, setCurrentPage] = useState(1)

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className='flex justify-center gap-2 py-7 '>
      <PageNumber isPre isDisabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)} />
      {pages.map((page) => (
        <PageNumber
          key={page}
          page={page}
          isActive={currentPage === page}
          onClick={() => goToPage(page)}
        />
      ))}
      <PageNumber
        isNext
        isDisabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
      />
    </div>
  )
}
