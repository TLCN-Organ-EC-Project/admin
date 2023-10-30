import { useQuery } from "react-query"
import { getAllUserByAdmin } from "@service/user-service"


export const useGetListUserByAdmin=()=>{
    return useQuery(["user-data"],()=>getAllUserByAdmin(),{
        staleTime: 5 * 60 * 1000,
        retry: false
    })
}