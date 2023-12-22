import Input from '@comp/Input/Input'
import React, { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

interface Idata {
    id: number,
    name: string,
}
interface data {
    data: Idata
}
const ItemCategory: React.FC<data> = ({
    data
}) => {

    const [fakeLoading, setFakeloading] = useState(false)
    const [enableEdit, setEnableEdit] = useState<boolean>(false)
    const { handleSubmit, watch, setValue, register, formState: { errors }, reset } = useForm<FieldValues>({
        defaultValues: {
            name: '',   
        }
    })
    useEffect(() => {
        setValue('name', data.name)
    }, [data])
    return (
        <>
            <tr className='border border-gray-300'>
                <td className='py-2 px-2'>{data.id}</td>
                <td className='py-2 px-1'>
                    <Input
                        id='name'
                        type='text'
                        disabled={!enableEdit}
                        inputUser
                        errors={errors}
                        {...register('name')}
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
                          /*   onClick={() => handleUpdateUser(dataUpdate, data?.username)} */
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

export default ItemCategory