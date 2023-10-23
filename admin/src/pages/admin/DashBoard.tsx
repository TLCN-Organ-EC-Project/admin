import React from 'react'
import { dashboard } from '@util/contant' 
import DashboardItem from '@comp/Dashboard/DashboardItem'
import ChartDash from '@comp/Dashboard/ChartDash'

const DashBoard = () => {
  return (
    <div >
        <div>Dashboard</div>
        <div className='grid grid-cols-3 gap-8 p-8 justify-around'>
            {dashboard.map((el)=>(
              <DashboardItem data={el} key={el.id}/>
            ))}
        </div>  
        <div className='flex gap-2'>
              <ChartDash/>
        </div>
    </div>
  )
}

export default DashBoard