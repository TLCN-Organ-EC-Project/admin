import React from 'react'
import { dashboard } from '@util/contant' 
import DashboardItem from '@comp/Dashboard/DashboardItem'
import ChartDash from '@comp/Dashboard/ChartDash'
import GradientChart from '@comp/Dashboard/GradientChart'

const DashBoard = () => {
  return (
    <div >
        <div>Dashboard</div>
        <div className='grid grid-cols-3 gap-8 p-8 justify-around'>
            {dashboard.map((el)=>(
              <DashboardItem data={el} key={el.id}/>
            ))}
        </div>  
        <div className='flex gap-2 h-[550px]'>
          <div className='w-[50%]'>
              <ChartDash/>
          </div>
          <div className='w-[50%]'>
              <GradientChart/>
          </div>
        </div>
    </div>
  )
}

export default DashBoard