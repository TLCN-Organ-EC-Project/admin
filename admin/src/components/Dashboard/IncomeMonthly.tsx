import React, { useState } from 'react'
import { month } from '@util/contant'
import { useGetIncomeMonthly } from '@hook/useGetList';
const IncomeMonthly = () => {

  const [selectedMonth, setSelectedMonth] = useState<string>('1');
  const [selectedYear, setSelectedYear] = useState<string>('2023');

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedMonth(selectedValue);
  };
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedYear(selectedValue);
  };
  const { data: listCategory, isLoading: isFetchDataUser } = useGetIncomeMonthly(+selectedMonth,+selectedYear);
  console.log(listCategory)
  return (
    <div>
      <div>Income Monthly</div>
      <div>
        <label htmlFor="countries" className="block text-sm font-medium text-gray-900 dark:text-white">Select an Month</label>
        <select
         id="countries" 
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         value={selectedMonth}
         onChange={handleMonthChange}
         >

          <option selected disabled>Choose a month</option>
         {
          month.map((el:any)=>(
            <option value={el.id}>{el.name}</option>
          ))
         }
        </select>
      </div>
      <div>
        <label htmlFor="years" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
        <select
         id="years" 
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         value={selectedYear}
         onChange={handleYearChange}
         >
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
        </select>
      </div>
      <div>
        <span>Income month :{ listCategory ? listCategory : 0} </span>
      </div>
    </div>
  )
}

export default IncomeMonthly