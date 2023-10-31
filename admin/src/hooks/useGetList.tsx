import { useQuery } from "react-query"
import { getAllUserByAdmin,getListProviderById } from "@service/user-service"


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