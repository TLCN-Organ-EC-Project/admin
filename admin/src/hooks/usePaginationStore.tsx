import { useContext } from "react"
import { PaginationContext } from "src/context/PaginationContext"

export const usePaginationStore=()=>{
    const store=useContext(PaginationContext)

    if (!store){
        throw new Error('Missing PaginationProvider ')
    }
    return store;
}