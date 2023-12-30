import React, { useEffect, useState } from 'react'
import { IProduct } from '@type/@typeProduct'
import Input from '@comp/Input/Input';
import { FieldValues, useForm } from 'react-hook-form';

interface typeData {
    data: IProduct
    index: number
}

const ItemProduct: React.FC<typeData> = ({
    data, index
}) => {
    const [enableEdit, setEnableEdit] = useState<boolean>(false)
    const [fakeLoading, setFakeloading] = useState(false)
    const { setValue, register, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            gender: '',
            material: '',
            price: '',
            product_name: '',
            size: ' ',
            size_of_model:'',
            thumb:'',
        }
    })
    
    useEffect(() => {
        setValue('product_name', data.product_name)
        setValue('thumb', data.thumb)
        setValue('price', data.price)
    }, [data])

    const handleUpdateProducts = () => {

    }

    return (
        <>
            <tr className='border border-gray-300'>
                <td className='py-2 px-2'>{index + 1}</td>
                <td className='py-2 px-4'>
                    <Input
                        id='product_name'
                        type='text'
                        {...register('product_name')}
                        inputUser
                        errors={errors}
                        defaultValue={data?.product_name}
                        disabled={!enableEdit}
                    />
                </td>
                <td className='py-2 px-4'>
                    {
                        enableEdit ?
                        <Input
                        id='thumb'
                        type='text'
                        {...register('thumb')}
                        inputUser
                        errors={errors}
                        defaultValue={data?.thumb}
                        disabled={!enableEdit}
                        />
                        : <img className='w-20 h-20' src={data.thumb} alt='NoImg'/> 
                    }
                        </td>
                <td className='py-2 px-4'>
                    <Input
                        id='price'
                        type='text'
                        {...register('price')}
                        disabled={!enableEdit}
                        inputUser
                        defaultValue={data?.price.toString()}
                        errors={errors}
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
                            onClick={() => handleUpdateProducts()}
                            disabled={fakeLoading}
                        >
                            { fakeLoading && <div className='w-5 h-5 border-[3px] animate-spin border-r-white border-y-white border-l-transparent rounded-full'/>}
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

export default ItemProduct