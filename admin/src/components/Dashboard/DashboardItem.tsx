import { typeDashBoard } from '@type/@typeAdminDashBoard'

const DashboardItem = ({ data }: { data: typeDashBoard }) => {
    return (
        <div className='w-[280px] h-[135px] relative bg-white shadow-lg border rounded-lg flex flex-col gap-5'>
            <div className='flex justify-between border mt-2  border-b-gray-200 border-t-white'>
                <div>
                    <div className=' bg-black top-[-15px] left-4  absolute w-[64px] h-[64px] flex justify-center text-center items-center rounded-lg'>
                        <span>{data.icon}</span>
                    </div>
                </div>
                <div className='flex flex-col p-2 '>
                    <span className='font-light text-sm'>{data.title}</span>
                    <span className='font-semibold text-xl'>{data.count}</span>
                </div>
            </div>
            <div className='text-sm pl-3 font-normal'>{data.desc}</div>
        </div>
    )
}

export default DashboardItem