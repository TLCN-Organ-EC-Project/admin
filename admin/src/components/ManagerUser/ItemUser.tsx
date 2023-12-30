import React, { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import moment from 'moment'
import { toast } from 'react-toastify'
import Input from '@comp/Input/Input'
import { useQueryClient } from 'react-query';
import { IUserManager } from '@type/@typeUser'
import { apiUpdateUser } from '@api/user'
import { IUserUpdate } from '@type/@typeUser'
import { usePaginationStore } from '@hook/usePaginationStore'
import { useSnapshot } from 'valtio'


interface typeData {
    data: IUserManager,
    index: number
}
const ItemUser: React.FC<typeData> = ({
    data, index
}) => {

    const paginationStore = usePaginationStore();
    const detailProductStoreSnapshot = useSnapshot(paginationStore)
    const queryClient = useQueryClient();
    const [enableEdit, setEnableEdit] = useState<boolean>(false)
    const [fakeLoading, setFakeloading] = useState(false)
    const { watch, setValue, register, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            full_name: '',
            email: '',
            phone: '',
            address: '',
            province: 'Quảng Nam'
        }
    })

    useEffect(() => {
        setValue('full_name', data.full_name)
        setValue('email', data.email)
        setValue('phone', data.phone)
        setValue('address', data.address)
    }, [data])



    const handleUpdateUser = async (data: IUserUpdate, username: string) => {
        setFakeloading(true)

        const response = await apiUpdateUser(data, username)
        if (response?.data) {
            toast.success('Update success user')
            queryClient.invalidateQueries(['user-data', detailProductStoreSnapshot.pagination])
            setEnableEdit(false)
        } else {
           
            toast.error('Can not update user')
        }
        setFakeloading(false)
    }
    let dataUpdate: IUserUpdate = {
        address: watch('address'),
        email: watch('email'),
        full_name: watch('full_name'),
        phone: watch('phone'),
        province: 'Quảng Nam'
    }
    

    return (
        <>
            <tr className='border border-gray-300'>
                <td className='py-2 px-2'>{index + 1}</td>
                <td className='py-2 px-1'>
                    <Input
                        id='full_name'
                        type='text'
                        disabled={!enableEdit}
                        inputUser
                        errors={errors}
                        {...register('full_name')}
                    />
                </td>
                <td className='py-2 px-1'>
                    <Input
                        id='email'
                        type='text'
                        disabled={!enableEdit}
                        inputUser
                        errors={errors}
                        {...register('email')}
                    />
                </td>
                <td className='py-2 px-1'>
                    <Input
                        id='phone'
                        type='text'
                        disabled={!enableEdit}
                        inputUser
                        errors={errors}
                        {...register('phone')}
                    />
                </td>
                <td className='py-2 px-1'>
                    <span>{moment(data.created_at).format('DD/MM/YY')}</span>
                </td>
                <td className='py-2 px-1'>
                    <Input
                        id='address'
                        type='text'
                        disabled={!enableEdit}
                        inputUser
                        errors={errors}
                        {...register('address')}
                    />
                </td>
                <td>
                    {enableEdit ? <span className='px-3 border border-rose-700 bg-blue-700 py-1  text-white text-sm cursor-pointer' onClick={() => setEnableEdit(false)}>Back</span>
                        : <span className='px-3 border border-rose-700 bg-blue-700 py-1  text-white text-sm transition hover:text-gray-200 cursor-pointer' onClick={() => setEnableEdit(true)}>Edit</span>
                    }

                </td>
            </tr>
            <tr>
                <td colSpan={7}>
                    {enableEdit &&
                        <button
                            className='border px-2 py-2 cursor-pointer text-white bg-rose-500 flex justify-center text-center items-cente gap-x-3 disabled:opacity-80 disabled:cursor-not-allowed'
                            type='button'
                            onClick={() => handleUpdateUser(dataUpdate, data?.username)}
                            disabled={fakeLoading}
                        >
                            {fakeLoading && <div className='w-5 h-5 border-[3px] animate-spin border-r-white border-y-white border-l-transparent rounded-full'/>}
                            <div>
                                Update
                            </div>
                        </button>
                    }
                </td>
            </tr>
        </>
    )
}

export default ItemUser