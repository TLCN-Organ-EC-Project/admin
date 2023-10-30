import axios from '@api/axios'

export const getAllUserByAdmin= async() =>{
    try {
        const data = await axios({
            url: `/admin/users`,
            method: 'get',
            params: {
                page_id: 1,
                page_size: 10,
            }
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw Error(`Failed to fetch products by category: ${error}`);
    }
}