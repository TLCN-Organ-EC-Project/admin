import { useGetListOrderByAdmin } from '@hook/useGetList'
import Loading from '@comp/Loading/Loading'
import { IOrder } from '@type/@typeOrder'
import ItemOrder from '@comp/ManagerOrder/ItemOrder'
import Pagination from '@comp/Pagination/Pagination'
import { usePaginationStore } from '@hook/usePaginationStore'
import { useSnapshot } from "valtio"


const ManagerOrder = () => {
  const paginationStore = usePaginationStore();
  const detailProductStoreSnapshot = useSnapshot(paginationStore)
  const {data:fetchOrder , isLoading:isFetchLoading}=useGetListOrderByAdmin(detailProductStoreSnapshot.pagination)
  return (
    <div className='w-full'>
         <h2 className='py-4'>Manager Order</h2>
         <div className='w-full'>
         <table className='table-auto mb-6 text-left w-full'>
            <thead className='font-bold bg-blue-500 text-[13px] border border-blue-500 text-center  text-white'>
              <tr>
                <th className='px-10 py-2 border border-r-2  border-r-white'>Booking_id</th>
                <th className='px-10 py-2 border border-r-2 border-r-white'>User_booking</th>
                <th className='px-16 py-2 border border-r-2 border-r-white'>Status</th>
                <th className='px-16 py-2 border border-r-2 border-r-white'>Booking_date</th>
                <th className='px-16 py-2 border border-r-2  border-r-white'>Address</th>
                <th className='px-16 py-2 border border-r-2  border-r-white'>Amount</th>
                <th className='px-16 py-2 border border-r-2'>Action</th>
              </tr>
            </thead>
           {
            isFetchLoading ? <Loading/> : 
            <tbody>
            {fetchOrder?.map((el: IOrder) => (
                <ItemOrder data={el} key={el.booking_id} />
            ))}
          </tbody>
           }
          </table>
          <Pagination/>
         </div>
    </div>
  )
}

export default ManagerOrder