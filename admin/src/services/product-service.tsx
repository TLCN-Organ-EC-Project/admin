import axios from '@api/axios'

export const getListCategory = async () => {
    try {
        const data = await axios({
            url: `/categories`,
            method: 'get',
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch Category by admin: ${error}`);
    }
}

export const getListProduct = async (page_id: number) => {
    try {
        const data = await axios({
            url: `/products`,
            method: 'get',
            params: {
                page_id: page_id,
                page_size: 10,
            }
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch Product : ${error}`);
    }
}

export const getListOrder = async (page_id:number) => {
    try {
        const data = await axios({
            url: `/admin/orders`,
            method: 'get',
            params: {
                page_id: page_id,
                page_size: 10,
            }
        }).then((res) => res?.data)
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch order : ${error}`)
    }
}
