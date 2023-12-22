import Loading from '@comp/Loading/Loading';
import ItemCategory from '@comp/ManagerCategory/ItemCategory';
import { getListCategoryAdmin } from '@hook/useGetList'
import React from 'react'

const ManagerCategory = () => {

    const { data: listCategory, isLoading: isFetchDataUser } = getListCategoryAdmin();
    console.log(listCategory)
    return (
        <div className='w-full'>
         <h2 className='py-4'>Manager Order</h2>
         <div className='w-full'>
         <table className='table-auto mb-6 text-left w-full'>
            <thead className='font-bold bg-blue-500 text-[13px] border border-blue-500 text-center  text-white'>
              <tr>
                <th className='px-10 py-2 border border-r-2  border-r-white'>Id</th>
                <th className='px-10 py-2 border border-r-2 border-r-white'>Category</th>
                <th className='px-16 py-2 border border-r-2'>Action</th>
              </tr>
            </thead>
           {
            isFetchDataUser ? <Loading/> : 
            <tbody>
            {listCategory?.map((el: any, index: number) => (
                <ItemCategory data={el} key={el.booking_id} />
            ))}
          </tbody>
           }
          </table>
         </div>
    </div>
    )
}

export default ManagerCategory