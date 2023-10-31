import React, { useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form';
import { useGetListUserByAdmin } from '@hook/useGetList'
import { IUserManager } from '@type/@typeUser';
import Input from '@comp/Input/Input';
import ItemUser from '@comp/ManagerUser/ItemUser';

const ManagerUser = () => {

  const [edit, setedit] = useState(null)

  const { handleSubmit, register, formState: { errors }, reset } = useForm<FieldValues>()

  const { data: listUser, isLoading: isFetchDataUser } = useGetListUserByAdmin();

  console.log(listUser)
  return (
    <div className='w-full'>
      <h2 className='py-4'>Manager User</h2>
      <div className='w-full'>
        <table className='table-auto mb-6 text-left w-full'>
          <thead className='font-bold bg-purple-500 text-[13px] border border-purple-500 text-center  text-white'>
            <tr>
              <th className='px-3 py-2 border border-r-2 border-purple-700 border-r-white'>#</th>
              <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Username</th>
              <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Fullname</th>
              <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Email</th>
              <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Phone</th>
              <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Created_At</th>
              <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Address</th>
              <th className='px-10 py-2 border border-r-2 border-gray-700 '>Action</th>
            </tr>
          </thead>
          <tbody>
            {listUser?.map((el: IUserManager, index: number) => (
              <ItemUser data={el} index={index} key={el.email} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManagerUser