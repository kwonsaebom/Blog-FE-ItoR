import PageNumber from '@components/PageNumber'

export default function Pagination({ currentPage, totalPages, setPage }) {
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return
    setPage(page)
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
