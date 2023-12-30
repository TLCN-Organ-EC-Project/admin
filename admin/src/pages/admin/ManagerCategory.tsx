import { apiCreateCategoryByAdmin } from '@api/user';
import Loading from '@comp/Loading/Loading';
import ItemCategory from '@comp/ManagerCategory/ItemCategory';
import { getListCategoryAdmin } from '@hook/useGetList'
import { useState } from 'react'
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';


const ManagerCategory = () => {

    const { data: listCategory, isLoading: isFetchDataUser } = getListCategoryAdmin();
    const [display, setDisplay] = useState(false)   
    const [inputValue, setInputValue] = useState('');
    const queryClient = useQueryClient();

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };
    const handleSubmit =async(name:any) => {
        const responen= await apiCreateCategoryByAdmin({name})
        if (responen){
            toast.success('Update success category')
            queryClient.invalidateQueries(['category-data'])
        }else{
            toast.error('Can not create category')
        }
    };
   
    return (
        <div className='w-full'>
            <h2 className='py-4'>Manager Category</h2>
            <div className='w-full'>
                <table className='table-auto mb-6 text-left w-full'>
                    <thead className='font-bold bg-blue-500 text-[13px] border border-blue-500 text-center  text-white'>
                        <tr>
                            <th className='px-10 py-2 border border-r-2  border-r-white'>Id</th>
                            <th className='px-10 py-2 border border-r-2 border-r-white'>Category</th>
                            <th className='px-16 py-2 border border-r-2'>Action</th>
                        </tr>
                    </thead>
                    {
                        isFetchDataUser ? <Loading /> :
                            <tbody>
                                {listCategory?.map((el: any) => (
                                    <ItemCategory data={el} key={el.booking_id} />
                                ))}
                            </tbody>
                    }
                </table>
            </div>
            <button
                onClick={() => setDisplay(!display)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create new category
            </button>
            {display && <div className='flex gap-8 mt-5'>
                <div>
                    <div className="w-72">
                        <div className="relative w-full min-w-[200px] h-10">
                            <input
                                type="text" 
                                value={inputValue} 
                                onChange={handleInputChange}
                                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Name category
                            </label>
                        </div>
                    </div>
                </div>
                <button
                    onClick={()=>{handleSubmit(inputValue)}}
                    className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    Create 
                </button>
            </div>}
        </div>
    )
}

export default ManagerCategory