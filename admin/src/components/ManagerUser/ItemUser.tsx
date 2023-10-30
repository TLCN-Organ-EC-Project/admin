import React from 'react'
import { IUserManager } from '@type/@typeUser'
import Input from '@comp/Input/Input'
import { FieldValues, useForm } from 'react-hook-form'

interface typeData{
    data:IUserManager,
    index:number
}
const ItemUser:React.FC<typeData> = ({
    data, index
}) => {
    const { handleSubmit,register, formState: { errors } ,reset} = useForm<FieldValues>()
  return (
    <tr className='border border-gray-300'>
    <td className='py-2 px-2'>{index+1}</td>
    <td className='py-2 px-1'>
      <Input
        id='username'
        type='text'
        register={register}
        inputUser
        errors={errors}
        defaultValue={data?.username}
      />
    </td>
    <td className='py-2 px-1'>
      <Input
        id='full_name'
        type='text'
        register={register}
        inputUser
        errors={errors}
        defaultValue={data?.full_name}
      />
    </td>
    <td className='py-2 px-1'>
      <Input
        id='email'
        type='text'
        register={register}
        inputUser
        defaultValue={data?.email}
        errors={errors}
      />
    </td>
    <td className='py-2 px-1'>
      <Input
        id='phone'
        type='text'
        register={register}
        inputUser
        defaultValue={data?.phone}
        errors={errors}
      />
    </td>
    <td className='py-2 px-1'>
      <Input
        id='created_at'
        type='text'
        register={register}
        inputUser
        defaultValue={data?.created_at}
        errors={errors}
      />
    </td>
    <td className='py-2 px-1'>
      <Input
        id='address'
        type='text'
        register={register}
        inputUser
        defaultValue={data?.address}
        errors={errors}
      />
    </td>
    <td className='py-2 px-1'>
      <Input
        id='province'
        type='text'
        register={register}
        inputUser
        defaultValue={data?.province}
        errors={errors}
      />
    </td>
  </tr>
  )
}

export default ItemUser