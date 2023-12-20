import axios from '@api/axios'

export const getAllUserByAdmin= async(page_id:number) =>{
    try {
        const data = await axios({
            url: `/admin/users`,
            method: 'get',
            params: {
                page_id: page_id,
                page_size: 10,
            }
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw Error(`Failed to fetch User by admin: ${error}`);
    }
}

export const getListProviderById=async(pid:number)=>{
    try{
        const data =await axios({
            url:`/provinces/${pid}`,
            method:'get',
        }).then ((res)=>res?.data)
        return data;
    }catch (error){
        throw Error (`Failed to fetch Provider by admin: ${error}`);
    }
}

