import React from 'react'
import { getData } from '../contex/DataContext'

function Category() {
    const { categoryOnlyData } = getData();

    return (
        <div className='bg-[#101829]'>
            <div className="max-w-7xl mx-auto flex gap-4 item-center justify-center py-7 px-4">
                {categoryOnlyData?.map((cat, index) => (
                    <div key={index}>
                        <button className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>
                            {cat}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;
