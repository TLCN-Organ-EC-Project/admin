import axios  from "./axios";
import { IUserLogin,IUserUpdate } from "@type/@typeUser";

export const apiLogin = (data:IUserLogin) => axios({
    url: '/login',
    method: 'post',
    data
})


export const apiDeleteUser = (username:string)=>axios({
    url:'/admin/users/'+username,
    method:'delete',
})

export const apiUpdateUser = (data:IUserUpdate, username :string)=>axios({
    url:'/admin/users/'+username,
    method:'put',
    data
})