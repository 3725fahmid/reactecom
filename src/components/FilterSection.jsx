import React from 'react'
import { getData } from '../contex/DataContext'


export const FilterSection = () => {
    const { categoryOnlyData } = getData();

    console.log(categoryOnlyData);

    return (
        <div className="bg-gray-100 mt-10 p-4 rounded-md h-max">
            <input type="text" placeholder='Search...' className='bg-white p-2 rounded-md border-gray-400 border-2' />

            {/* Category only data  */}
            <h1 className='mt-5 font-semibold text-xl'>Category</h1>
            <div className="flex flex-col gap-2 mt-3">
                {

                }
            </div>
        </div>
    )
}
