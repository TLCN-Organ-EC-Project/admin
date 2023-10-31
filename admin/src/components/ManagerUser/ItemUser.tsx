import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import moment from 'moment'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import Input from '@comp/Input/Input'
import { useQueryClient } from 'react-query';
import { apiDeleteUser } from '@api/user'
import { IUserManager } from '@type/@typeUser'
import { apiUpdateUser } from '@api/user'
import { IUserUpdate } from '@type/@typeUser'

interface typeData {
    data: IUserManager,
    index: number
}
interface typeUpdate {
    username: string
}
const ItemUser: React.FC<typeData> = ({
    data, index
}) => {
    const queryClient = useQueryClient();
    const [update, setUpdate] = useState<typeUpdate | null>(null)
    const { handleSubmit, watch,register, formState: { errors }, reset } = useForm<FieldValues>()

    const handleDeleteUser = (username: string | undefined) => {
        Swal.fire({
            title: 'Are you want delete user',
            showCancelButton: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (result.isConfirmed && username) {
                    const response = await apiDeleteUser(username)
                    if (response) {
                        toast.success('Delete user success')
                        queryClient.invalidateQueries(['user-data'])
                    } else {
                        toast.error('Can not delete user')
                    }
                }
            }
        })
    }


    const handleUpdateUser = async (data: IUserUpdate, username: string) => {
        const response = await apiUpdateUser(data, username)
        if (response) {
            queryClient.invalidateQueries(['user-data'])
            toast.success('Update success user')
        } else {
            toast.error('Can not update user')
        }
    }

    const dataUpdate:IUserUpdate = {
        address:watch('address'),
        email:watch('email'),   
        full_name:watch('full_name'),
        phone:watch('phone'),
        province:'Quảng Nam',
    }
 
    console.log(dataUpdate)
    return (
        <>
            <tr className='border border-gray-300'>
                <td className='py-2 px-2'>{index + 1}</td>
                <td className='py-2 px-1'>
                    {update?.username === data?.username ?
                        <Input
                            id='username'
                            type='text'
                            register={register}
                            inputUser
                            errors={errors}
                            defaultValue={data?.username}
                        />
                        : <span>{data.username}</span>}
                </td>
                <td className='py-2 px-1'>
                    {update?.username === data?.username ?
                        <Input
                            id='full_name'
                            type='text'
                            register={register}
                            inputUser
                            errors={errors}
                            defaultValue={data?.full_name}
                        />
                        : <span>{data.full_name}</span>}
                </td>
                <td className='py-2 px-1'>
                    {update?.username === data?.username ?
                        <Input
                            id='email'
                            type='text'
                            register={register}
                            inputUser
                            defaultValue={data?.email}
                            errors={errors}
                        />
                        : <span>{data.email}</span>}
                </td>
                <td className='py-2 px-1'>
                    {update?.username === data?.username ?
                        <Input
                            id='phone'
                            type='text'
                            register={register}
                            inputUser
                            defaultValue={data?.phone}
                            errors={errors}
                        />
                        : <span>{data.phone}</span>}
                </td>
                <td className='py-2 px-1'>
                    <span>{moment(data.created_at).format('DD/MM/YY')}</span>
                </td>
                <td className='py-2 px-1'>
                    {update?.username === data?.username ?
                        <Input
                            id='address'
                            type='text'
                            register={register}
                            inputUser
                            defaultValue={data?.address}
                            errors={errors}
                        />
                        : <span>{data.address}</span>}
                </td>
                <td>
                    {update?.username === data.username ? <span className='px-3 border border-rose-700 bg-blue-700 py-1  text-white text-sm cursor-pointer' onClick={() => setUpdate(null)}>Back</span>
                        : <span className='px-3 border border-rose-700 bg-blue-700 py-1  text-white text-sm transition hover:text-gray-200 cursor-pointer' onClick={() => setUpdate(data)}>Edit</span>
                    }
                    <span onClick={() => handleDeleteUser(data.username)} className='ml-2 px-2 border border-blue-700 bg-rose-700 py-1  text-white text-sm transition hover:text-gray-200 cursor-pointer'>Delete</span>
                </td>
            </tr>
            {update 
            && 
            <button className='border px-2 py-2 cursor-pointer text-white bg-rose-500 flex justify-center text-center items-center' onClick={()=>handleUpdateUser(dataUpdate,data.username)}>Update</button>}
        </>
    )
}

export default ItemUser