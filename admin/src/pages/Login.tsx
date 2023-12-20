import React, { useCallback, useState } from 'react'
import { FieldValues, useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { SiInteractiondesignfoundation } from 'react-icons/si'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Button from '@comp/Button/Button';
import { IUserSchema } from '@type/@typeUser';
import { apiLogin } from '@api/user';
import path from '@util/path';
import Input from '@comp/Input/Input'
import { login } from '@store/user/useSlice';

const Login = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [dataUserLogin, setDataUserLogin] = useState<IUserSchema>()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      username: 'admin',
      password: 'secret'
    },
  });

  
  const data = {
    username: watch('username') ?? '',
    password: watch('password') ?? '',
  };

  console.log(data  )
  const handleSignIn = useCallback(async () => {
    if (data !== null && data !== undefined) {
      const response = await apiLogin(data)
      if (response && response?.data) {
        const token = (response.headers as any)?.get('x-access-token')
        setDataUserLogin(response.data)
        navigate(`/${path.DASHBOARD}`)
        dispatch(login({
          isLoggedIn: true,
          token: token,
          current: response.data,
        }))
      }
      else {
        Swal.fire('Oops!', 'Login Failed, Please login again')
      }
    }
  }, [watch('username'), watch('password')]);

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
            <Button label='Sign in' onClick={handleSignIn} icon={SiInteractiondesignfoundation} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login