import React, { useState } from 'react'
import { useGetListUserByAdmin } from '@hook/useGetList'
import { useForm ,FieldValues} from 'react-hook-form';
import { IUserManager } from '@type/@typeUser';
const ManagerUser = () => {
  const [edit, setedit] = useState(null)
  const { handleSubmit, register, formState: { errors } ,reset} = useForm<FieldValues>({
   defaultValues:{
      username:'',
      full_name:'',
      email:'',
      phone:'',
      created_at:'',
      address:'',
      province:'',
   }
  })

 const {data:listUser, isLoading:isFetchDataUser}=useGetListUserByAdmin();
 console.log(listUser)
  return (
    <div className='w-full'>
          <h2 className='py-4'>Manager User</h2>
          <div className='w-full'>
            <form>
                <table className='table-auto mb-6 text-left w-full'>
                  <thead className='font-bold bg-gray-700 text-[13px] border border-gray-500 text-center  text-white'>
                    <tr>
                      <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>#</th>
                      <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Username</th>
                      <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Fullname</th>
                      <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Email</th>
                      <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Phone</th>
                      <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Created_At</th>
                      <th className='px-10 py-2 border border-r-2 border-gray-700 border-r-white'>Address</th>
                      <th className='px-10 py-2 border border-r-2 border-gray-700 '>Province</th>
                    </tr>
                  </thead>
                  <tbody>
                      {listUser?.map((el:any, index:number)=>(
                        <tr className='border border-gray-300' key={el.id}>
                          <td className='py-2 px-5'>{index+1}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
            </form>
          </div>
    </div>
  )
}

export default ManagerUser