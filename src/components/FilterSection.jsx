import React from 'react'
import { getData } from '../contex/DataContext'


export const FilterSection = () => {
    const { categoryOnlyData, brandOnlyData } = getData();

    // console.log(categoryOnlyData);

    return (
        <div className="bg-gray-100 mt-10 p-4 rounded-md h-max">
            <input type="text" placeholder='Search...' className='bg-white p-2 rounded-md border-gray-400 border-2' />

            {/* Category only data  */}
            <h1 className='mt-5 font-semibold text-xl'>Category</h1>
            <div className="flex flex-col gap-2 mt-3">
                {
                    categoryOnlyData?.map((item, index) => {
                        return <div key={index} className="flex gap-2">
                            <input type="checkbox" />
                            <button className='cursor-pointer uppercase'>{item}</button>
                        </div>
                    })
                }
            </div>
            {/* Brand only data  */}
            <h1 className='mt-5 font-semibold text-xl mb-3'>Brand</h1>
            <select name="" id="" className='bg-white w-full p-2 border-gray-300 border-2 rounded-md'>
                {
                    brandOnlyData?.map((item, index) => {
                        return <div key={index}>
                            <option key={index} value={item} className='p-2 mx-2'>{item}</option>
                        </div>
                    })
                }
            </select>
        </div>
    )
} 
