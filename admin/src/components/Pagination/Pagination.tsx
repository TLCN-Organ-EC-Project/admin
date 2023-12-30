import { usePaginationStore } from '@hook/usePaginationStore';

const Pagination = () => {
  const paginationStore = usePaginationStore();
  const handlePaginationChange = (newPagination:any) => {
    paginationStore.pagination = newPagination;
  };
  
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1  sm:items-center sm:justify-end">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <span
              className="relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
            </span>
            <span
             onClick={() => handlePaginationChange(1)}
              className="relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              1
            </span>
            <span
             onClick={() => handlePaginationChange(2)}
              className="relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </span>
            <span
              onClick={() => handlePaginationChange(3)}
              className="relative cursor-pointer hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </span>
            <span
              onClick={() => handlePaginationChange(4)}
              className="relative cursor-pointer hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              4
            </span>
            <span
              onClick={() => handlePaginationChange(5)}
              className="relative cursor-pointer hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              5
            </span>
            <span
              onClick={() => handlePaginationChange(6)}
              className="relative cursor-pointer hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              6
            </span>
            <span
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
            </span>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination