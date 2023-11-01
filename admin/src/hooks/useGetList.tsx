import { useQuery } from "react-query"
import { getAllUserByAdmin,getListProviderById, } from "@service/user-service"
import { getListCategory,getListProduct } from "@service/product-service"


export const useGetListUserByAdmin=()=>{
    return useQuery(["user-data"],()=>getAllUserByAdmin(),{
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

export const usegetListPd = ()=>{
    return useQuery(["product-data"],()=>getListProduct(),{
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}
