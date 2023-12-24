import React, { useCallback, useEffect, useState } from 'react'
import { apiAdminAddProductToStore } from '@api/user'
import { size } from '@util/contant'
import debounce from 'lodash/debounce';

interface SizeData {
    quantity: number[];
    size: string[];
}


const AddProductToStore = () => {
    const [quantityData, setQuantityData] = useState<SizeData>({ quantity: [], size: [] });

    const handleQuantityChangeDebounced = useCallback(
        debounce((event: React.ChangeEvent<HTMLInputElement>, sizeId: string) => {
            const value = event.target.value;
            setQuantityData((prevData) => ({
                quantity: [...prevData.quantity, parseInt(value)],
                size: [...prevData.size, sizeId],
            }));
        }, 1000),
        []
    );
    return (
        <>
            <div className="pt-8">Add Product to Store</div>
            <div className="flex gap-10 py-4">
                <div className='text-gray-800 font-semibold'>Size</div>
                <div className='text-gray-800 font-semibold'>Quantity</div>
            </div>
            <div>
                {
                    size.map((el: any) => (
                        <div className='flex gap-10' key={el.id}>
                            <div className='w-12 h-12 bg-gray-300 flex justify-center text-center items-center mt-3'>{el.name}</div>
                            <div >
                                <input
                                    type="number"
                                    id={`number-input-${el.id}`}
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
                                    placeholder="Enter quantity"
                                    value={quantityData.size.includes(el.id.toString()) ? quantityData.quantity[quantityData.size.indexOf(el.id.toString())] : ''}
                                    onChange={(event) => handleQuantityChangeDebounced(event, el.id.toString())}
                                    required
                                />
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default AddProductToStore