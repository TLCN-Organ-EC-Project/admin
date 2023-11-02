import ItemProduct from "@comp/ManagerProduct/ItemProduct"
import Pagination from "@comp/Pagination/Pagination"
import { usegetListPd } from "@hook/useGetList"
import { IProduct } from "@type/@typeProduct"
import { useSnapshot } from "valtio"
import { usePaginationStore } from "@hook/usePaginationStore"
import Loading from "@comp/Loading/Loading"

const ManagerProduct = () => {
  const paginationStore = usePaginationStore();
  const snapPaginationStore = useSnapshot(paginationStore)
  const { data: listProduct, isLoading: isFetchProduct } = usegetListPd(paginationStore.pagination)
  return (
    <>
      <div className='w-full'>
        <h2 className='py-4'>Manager Products</h2>
        <div className='w-full'>
          <table className='table-auto mb-6 text-left w-full'>
            <thead className='font-bold bg-blue-500 text-[13px] border border-blue-500 text-center  text-white'>
              <tr>
                <th className='px-10 py-2 border border-r-2  border-r-white'>#</th>
                <th className='px-10 py-2 border border-r-2 border-r-white'>Product_name</th>
                <th className='px-16 py-2 border border-r-2 border-r-white'>Thumb</th>
                <th className='px-16 py-2 border border-r-2  border-r-white'>Price</th>
                <th className='px-16 py-2 border border-r-2'>Action</th>
              </tr>
            </thead>
           {
            isFetchProduct ? <Loading/> : 
            <tbody>
            {listProduct?.map((el: IProduct, index: number) => (
              <ItemProduct data={el} key={el.id} index={index} />
            ))}
          </tbody>
           }
          </table>
          <div className="w-full  flex justify-end">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}

export default ManagerProduct