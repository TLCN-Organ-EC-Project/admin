import React, { useState } from 'react'
import { IOrder } from '@type/@typeOrder'
import { useQueryClient } from 'react-query';
import { FieldValues, useForm } from 'react-hook-form';
import Input from '@comp/Input/Input';

interface typeData {
    data: IOrder,
}

interface typeUpdate {
    booking_id: string
}

const ItemOrder: React.FC<typeData> = ({
    data
}) => {
    const queryClient = useQueryClient();
    const [update, setUpdate] = useState<typeUpdate | null>(null)
    const { handleSubmit, watch, register, formState: { errors }, reset } = useForm<FieldValues>()
    const handleDeleteOrder=()=>{
        
    }
    return (
        <>
            <tr className='border border-gray-300'>
                <td className='py-2 px-4'>
                    {update?.booking_id === data?.booking_id ?
                        <Input
                            id='booking_id'
                            type='text'
                            register={register}
                            inputUser
                            errors={errors}
                            defaultValue={data?.booking_id}
                        />
                        : <span>{data.booking_id}</span>}
                </td>
                <td className='py-2 px-4'>
                    {update?.booking_id === data?.booking_id ?
                        <Input
                            id='user_booking'
                            type='text'
                            register={register}
                            inputUser
                            errors={errors}
                            defaultValue={data?.user_booking}
                        />
                        : <span>{data.user_booking}</span>}
                </td>
                <td className='py-2 px-4'>
                    {update?.booking_id === data?.booking_id ?
                        <Input
                            id='status'
                            type='text'
                            register={register}
                            inputUser
                            defaultValue={data?.status}
                            errors={errors}
                        />
                        : <span>{data.status}</span>}
                </td>
                <td className='py-2 px-4'>
                    {update?.booking_id === data?.booking_id ?
                        <Input
                            id='booking_date'
                            type='text'
                            register={register}
                            inputUser
                            defaultValue={data?.booking_date}
                            errors={errors}
                        />
                        : <span>{data.booking_date}</span>}
                </td>

                <td className='py-2 px-4'>
                    {update?.booking_id === data?.booking_id ?
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
                <td className='py-2 px-4'>
                    {update?.booking_id === data?.booking_id ?
                        <Input
                            id='amount'
                            type='text'
                            register={register}
                            inputUser
                            defaultValue={data?.amount.toString()}
                            errors={errors}
                        />
                        : <span>{data.amount}</span>}
                </td>
                <td>
                    {update?.booking_id === data.booking_id ? <span className='px-3 border border-rose-700 bg-blue-700 py-1  text-white text-sm cursor-pointer' onClick={() => setUpdate(null)}>Back</span>
                        : <span className='px-3 border border-rose-700 bg-blue-700 py-1  text-white text-sm transition hover:text-gray-200 cursor-pointer' onClick={() => setUpdate(data)}>Edit</span>
                    }
                    <span onClick={()=>handleDeleteOrder()} className='ml-2 px-2 border border-blue-700 bg-rose-700 py-1  text-white text-sm transition hover:text-gray-200 cursor-pointer'>Delete</span>
                </td>
            </tr>
            {update
                &&
                <button className='border px-2 py-2 cursor-pointer text-white bg-rose-500 flex justify-center text-center items-center'>Update</button>}

        </>
    )
}

export default ItemOrder