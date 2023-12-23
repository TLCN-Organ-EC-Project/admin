import axios  from "./axios";
import { IUserLogin,IUserUpdate } from "@type/@typeUser";
import { ICreateProduct } from "@type/@typeProduct";

export const apiLogin = (data:IUserLogin) => axios({
    url: '/login',
    method: 'post',
    data
})
export const apiDeleteUser = (username:string)=>axios({
    url:`/admin/users/${username}`,
    method:'delete',
})
export const apiUpdateUser = (data:IUserUpdate, username :string)=>axios({
    url:'/admin/users/'+username,
    method:'put',
    data
})
export const apiCreateProduct=(data:ICreateProduct)=>axios({
    url:`/admin/products`,
    method:'post',
    data
})
export const apiConfirmOrderByAdmin = (booking_id:string)=>axios({
    url:`/admin/orders/${booking_id}/confirm`,
    method:'put'
})
export const apiUpdateCategoryByAdmin=(id:number,data:any)=>axios({
    url:`/admin/categories/${id}`,
    method:'put',
    data,
})
export const apiDeleteCategoryByAdmin=(id:number)=>axios({
    url:`/admin/categories/${id}`,
    method:'delete'
})
export const apiCreateCategoryByAdmin = (data:any)=>axios({
    url:`/admin/categories`,
    method:'post',
    data
})