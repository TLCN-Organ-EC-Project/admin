import axios from '@api/axios'

export const getListCategory= async() =>{
    try {
        const data = await axios({
            url: `/categories`,
            method: 'get',
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw Error(`Failed to fetch Category by admin: ${error}`);
    }
}

export const getListProduct= async() =>{
    try {
        const data = await axios({
            url: `/products`,
            method: 'get',
            params: {
                page_id: 1,
                page_size: 10,
            }
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw Error(`Failed to fetch Product : ${error}`);
    }
}

