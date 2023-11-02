import React, { useState } from 'react'
import { IProduct } from '@type/@typeProduct'
import { useQueryClient } from 'react-query';
import Input from '@comp/Input/Input';
import { FieldValues, useForm } from 'react-hook-form';

interface typeData{
    data:IProduct
    index:number
}
interface typeUpdate {
    id:number
}
const ItemProduct:React.FC<typeData>= ({
    data, index
}) => {

    const queryClient = useQueryClient();
    const [update, setUpdate]=useState<typeUpdate | null>(null)
    const { handleSubmit, watch,register, formState: { errors }, reset } = useForm<FieldValues>()
    const handleDeleteUser=(pid:number)=>{
            
    }
  return (
    <>
            <tr className='border border-gray-300'>
                <td className='py-2 px-2'>{index + 1}</td>
                <td className='py-2 px-4'>
                    {update?.id === data?.id ?
                        <Input
                            id='product_name'
                            type='text'
                            register={register}
                            inputUser
                            errors={errors}
                            defaultValue={data?.product_name}
                        />
                        : <span>{data.product_name}</span>}
                </td>
                <td className='py-2 px-4'>
                    {update?.id === data?.id ?
                        <Input
                            id='thumb'
                            type='text'
                            register={register}
                            inputUser
                            errors={errors}
                            defaultValue={data?.thumb}
                        />
                        : <img className='w-20 h-20' src={data.thumb} alt='NoImg'/>
                    }
                </td>
                <td className='py-2 px-4'>
                    {update?.id === data?.id ?
                        <Input
                            id='price'
                            type='text'
                            register={register}
                            inputUser
                            defaultValue={data?.price.toString()}
                            errors={errors}
                        />
                        : <span>{data.price}</span>}
                </td>
               
                <td>
                    {update?.id === data.id ? <span className='px-3 border border-rose-700 bg-blue-700 py-1  text-white text-sm cursor-pointer' onClick={() => setUpdate(null)}>Back</span>
                        : <span className='px-3 border border-rose-700 bg-blue-700 py-1  text-white text-sm transition hover:text-gray-200 cursor-pointer' onClick={() => setUpdate(data)}>Edit</span>
                    }
                    <span onClick={() => handleDeleteUser(data.id)} className='ml-2 px-2 border border-blue-700 bg-rose-700 py-1  text-white text-sm transition hover:text-gray-200 cursor-pointer'>Delete</span>
                </td>
            </tr>
            {update 
            && 
            <button className='border px-2 py-2 cursor-pointer text-white bg-rose-500 flex justify-center text-center items-center'>Update</button>}
        </>
  )
}

export default ItemProduct