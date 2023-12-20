import { useQuery } from "react-query"
import { getAllUserByAdmin,getListProviderById, } from "@service/user-service"
import { getListCategory,getListProduct,getListOrder } from "@service/product-service"


export const useGetListUserByAdmin=(page_id:number)=>{
    return useQuery(["user-data",page_id],()=>getAllUserByAdmin(page_id),{
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}

export const adminGetListProviderById=(pid:number)=>{
    return useQuery(["provider-data",pid], ()=>getListProviderById(pid),{
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}

export const getListCategoryAdmin=()=>{
    return useQuery(["category-data"], ()=>getListCategory(),{
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}

export const usegetListPd = (page_id:number)=>{
    return useQuery(["product-data",page_id],()=>getListProduct(page_id),{
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}

export const useGetListOrderByAdmin=(page_id:number)=>{
    return useQuery(["order-data",page_id], ()=>getListOrder(page_id),{
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}
