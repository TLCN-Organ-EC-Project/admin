import React,{ForwardedRef, forwardRef, memo} from 'react'
import {
  FieldErrors,
} from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string,
  label?: string,
  inputUser?:boolean,
  errors: FieldErrors,
}

const Input: React.FC<InputProps> = forwardRef((
  {
    id,
    label,
    errors,
    inputUser,
    ...props
  },
  ref: ForwardedRef<HTMLInputElement>
) => {
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
        ref={ref}
        id={id}
        className={`
          peer
          font-light 
          bg-white 
          border-2
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${inputUser ? 'w-[90%] ' : 'w-full'}
          ${inputUser ? ' ' : 'p-4'}
          ${inputUser ? ' ' : ' rounded-md'}
          ${inputUser ? ' ' : 'pt-6'}
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
        {...props}
      />
    </div>
  );
});


export default memo(Input)