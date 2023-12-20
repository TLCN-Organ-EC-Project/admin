import { useGetListUserByAdmin } from '@hook/useGetList'
import { IUserManager } from '@type/@typeUser';
import ItemUser from '@comp/ManagerUser/ItemUser';
import Loading from '@comp/Loading/Loading';
import { usePaginationStore } from '@hook/usePaginationStore';
import { useSnapshot } from 'valtio';
import Pagination from '@comp/Pagination/Pagination';

const ManagerUser = () => {
  const paginationStore = usePaginationStore();
  const detailProductStoreSnapshot = useSnapshot(paginationStore)
  const { data: listUser, isLoading: isFetchDataUser } = useGetListUserByAdmin(detailProductStoreSnapshot.pagination);
  console.log(listUser)
  return (
    <div className='w-full'>
        <h2 className='py-4'>Manager User</h2>
      <div className='w-full'>
        <table className='table-auto mb-6 text-left w-full'>
          <thead className='font-bold bg-blue-500 text-[13px] border border-blue-500 text-center  text-white'>
            <tr>
              <th className='px-3 py-2 border border-r-2  border-r-white'>#</th>
              <th className='px-10 py-2 border border-r-2 border-r-white'>Username</th>
              <th className='px-10 py-2 border border-r-2 border-r-white'>Fullname</th>
              <th className='px-10 py-2 border border-r-2  border-r-white'>Email</th>
              <th className='px-10 py-2 border border-r-2  border-r-white'>Phone</th>
              <th className='px-10 py-2 border border-r-2  border-r-white'>Created_At</th>
              <th className='px-10 py-2 border border-r-2  border-r-white'>Address</th>
              <th className='px-10 py-2 border border-r-2  '>Action</th>
            </tr>
          </thead>
        {
          isFetchDataUser ? <Loading/> :
          <tbody>
          {listUser?.map((el: IUserManager, index: number) => (
            <ItemUser data={el} index={index} key={el.email} />
          ))}
        </tbody>
        }
        </table>
      </div>
      <Pagination/>
    </div>
  )
}

export default ManagerUser