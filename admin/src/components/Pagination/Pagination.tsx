import React, { useEffect, useState } from 'react'
import { usePaginationStore } from '@hook/usePaginationStore';
import { useSnapshot } from 'valtio';

const Pagination = () => {
    const paginationStore = usePaginationStore();
    const snapPaginationStore = useSnapshot(paginationStore)
    const [pagination, setPagination]=useState(1)

    useEffect(()=>{
        paginationStore.pagination=pagination
    },[pagination])

    
    
  return (
    <div className='flex gap-8 py-2'>
        <div
        onClick={()=>setPagination(1)} 
        className='flex justify-center text-center items-center border rounded-xl bg-rose-300 w-8 h-8 cursor-pointer hover:text-white'>1</div>
        <div
        onClick={()=>setPagination(2)} 
        className='flex justify-center text-center items-center border rounded-xl bg-rose-300 w-8 h-8 cursor-pointer hover:text-white'>2</div>
        <div
        onClick={()=>setPagination(3)} 
        className='flex justify-center text-center items-center border rounded-xl bg-rose-300 w-8 h-8 cursor-pointer hover:text-white'>3</div>
       
    </div>
  )
}

export default Pagination