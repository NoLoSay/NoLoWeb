import React from 'react'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (pageNumber: number) => void
}

const styles: { [key: string]: string } = {
  mainDiv: 'bg-white flex items-center justify-between border-t border-gray-200 bg-white px-4 py-6 sm:px-6 pt-20',
  adjustSizeWindowDiv: 'sm:hidden lg:visible sm:flex sm:flex-1 sm:items-center sm:justify-between',
  navDiv: 'isolate inline-flex -space-x-px rounded-md shadow-sm',
  buttonDiv:
    'bg-white relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-yellow-300 focus:z-20 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600',
  arrowprevDiv: 'h-5 w-5',
  pagenbDiv: 'relative inline-flex items-center',
  pagenbDiv2:
    'bg-white px-4 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300',
  butttonNextDiv:
    'bg-white relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-yellow-300 focus:z-20 focus:outline-offset-0',
  arrownextDiv: 'h-5 w-5',
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={`mainDiv ${styles['mainDiv']}`}>
      <div className={`adjustSizeWindowDiv ${styles['adjustSizeWindowDiv']}`}>
        <div>
          <nav
            className={`navDiv ${styles['navDiv']}`}
            aria-label='Pagination'
          >
            <button
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              className={`buttonDiv ${styles['buttonDiv']} ${
                currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <svg
                className={`arrowprevDiv ${styles['arrowprevDiv']}`}
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            {pageNumbers.map(pageNumber => (
              <button
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                className={`pagenbDiv ${styles['pagenbDiv']} ${
                  pageNumber === currentPage
                    ? 'bg-yellow-300 text-white lg:text-lg'
                    : 'text-base-black lg:text-lg hover:bg-yellow-300 focus:z-20 focus:outline-offset-0'
                } ${styles['pagenbDiv2']}`}
              >
                {pageNumber}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              className={`butttonNextDiv ${styles['butttonNextDiv']} ${
                currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <svg
                className={`arrownextDiv ${styles['arrownextDiv']}`}
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
