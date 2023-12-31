import React from 'react'
import { IOrder } from '@type/@typeOrder'
import { useQueryClient } from 'react-query';
import { apiConfirmOrderByAdmin } from '@api/user';
import { toast } from 'react-toastify';

interface typeData {
    data: IOrder,
}

const ItemOrder: React.FC<typeData> = ({
    data
}) => {
    const queryClient = useQueryClient();
    const handleConfirmOrder = async (booking_id:string) => {
        const response= await apiConfirmOrderByAdmin(booking_id)
        if(response){
            toast.success('Confirm order success')
            queryClient.invalidateQueries(['order-data'])
        }else{
            toast.error('Can not confirm order')
        }
    }
    return (
        <>
            <tr className='border border-gray-300'>
                <td className='py-2 px-4'>
                    <span>{data.booking_id}</span>
                </td>
                <td className='py-2 px-4'>
                    <span>{data.user_booking}</span>
                </td>
                <td className='py-2 px-4' style={{ color: data.status === 'validated' ? 'gray' : 'green' }}>
                    <span>{data.status}</span>
                </td>
                <td className='py-2 px-4'>
                    <span>{data.booking_date}</span>
                </td>

                <td className='py-2 px-4'>
                    <span>{data.address}</span>
                </td>
                <td className='py-2 px-4'>
                    <span>{data.amount}</span>
                </td>
                <td className='flex justify-center items-center text-center mt-6'>
                    <span onClick={() => handleConfirmOrder(data.booking_id)} className='ml-2 px-2 border border-blue-700 bg-blue-700 py-1  text-white text-sm transition hover:text-gray-200 cursor-pointer'>Confirm</span>
                </td>
            </tr>

        </>
    )
}

export default ItemOrder