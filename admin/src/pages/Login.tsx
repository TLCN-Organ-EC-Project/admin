import React, { useState } from 'react'
import Input from '@comp/Input/Input'
import {
  FieldValues,
  SubmitHandler,
  useForm
} from "react-hook-form";
import Button from '@comp/Button/Button';
import {SiInteractiondesignfoundation} from 'react-icons/si'

const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      username: '',
      password: ''
    },
  });
  const handleSignIn:SubmitHandler<FieldValues>=(data)=>{
      setIsLoading(true);
  }
  return (
    <div
      className='bg-login w-screen h-screen relative'
    >
      <div className=' h-[550px] w-[450px] pt-10 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-6 px-3 border rounded-xl  shadow-xl'>
        <div className='absolute w-[400px] h-[150px] bg-blue-500 border rounded-xl translate-x-3 -translate-y-20'>
          <div className='flex justify-center items-center p-5 mt-8 text-xl leading-5 font-roboto tracking-wide opacity-100  no-underline text-white font-extrabold'>Sign in</div>
          <div className='flex flex-col gap-8 translate-y-28'>
            <Input
              id="username"
              label="Username"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="password"
              label="Password"
              type='password'
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
          <div className='translate-y-40 '>
            <Button   label='Sign in' onClick={handleSignIn}  icon={SiInteractiondesignfoundation}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login