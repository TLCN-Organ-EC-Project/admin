import React, { useState } from 'react'
import { IUserManager } from '@type/@typeUser'
import Input from '@comp/Input/Input'
import { FieldValues, useForm } from 'react-hook-form'
import moment from 'moment'

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
    const [update, setUpdate] = useState<typeUpdate>()
    const { handleSubmit, register, formState: { errors }, reset } = useForm<FieldValues>()
    return (
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
          
        </tr>
    )
}

export default ItemUser