import React,{memo} from 'react'
import {
  FieldErrors,
  FieldValues,
  UseFormRegister
} from "react-hook-form";

interface InputProps {
  id: string,
  label?: string,
  type?: string,
  disabled?: boolean,
  required?: boolean,
  inputUser?:boolean,
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
  defaultValue?:string,
}
const Input: React.FC<InputProps> = ({
  id, label, type = "text", disabled,defaultValue, register, required, errors,inputUser
}) => {
  return (
    <div className="w-full relative">
      <label
        className={`
        absolute 
        text-md
        duration-150 
        transform 
        -translate-y-3 
        -top-3
        z-20 
        origin-[0] 
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
      `}
      >
        {label}
      </label>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        defaultValue={defaultValue}
        className={`
        peer
        font-light 
        bg-white 
        border-2
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${inputUser ? 'w-[90%] ' :'w-full'}
        ${inputUser ? ' ' :'p-4'}
        ${inputUser ? ' ' :' rounded-md'}
        ${inputUser ? ' ' :'pt-6'}
        ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
      `}
      />

    </div>
  )
}

export default memo(Input)