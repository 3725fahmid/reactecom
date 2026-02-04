import React from 'react'
import { getData } from '../contex/DataContext'


export const FilterSection = ({ search, setSearch, category, brand, priceRange, setPriceRange, handleBrandChange, handleCategoryChange, resetFilter }) => {
    const { categoryOnlyData, brandOnlyData } = getData();

    // console.log(categoryOnlyData);

    return (
        <div className="bg-gray-100 mt-10 p-4 rounded-md h-max">
            <input type="text"
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='bg-white p-2 rounded-md border-gray-400 border-2'
            />

            {/* Category only data  */}
            <h1 className='mt-5 font-semibold text-xl'>Category</h1>
            <div className="flex flex-col gap-2 mt-3">
                {
                    categoryOnlyData?.map((item, index) => {
                        return <div key={index} className="flex gap-2">
                            <input type="checkbox"
                                name={item}
                                checked={category === item}
                                value={item}
                                onChange={handleCategoryChange}
                            />
                            <button className='cursor-pointer uppercase'>{item}</button>
                        </div>
                    })
                }
            </div>
            {/* Brand only data  */}
            <h1 className='mt-5 font-semibold text-xl mb-3'>Brand</h1>
            <select name="" id="" className='bg-white w-full p-2 border-gray-300 border-2 rounded-md'
                value={brand}
                onChange={handleBrandChange}
            >
                {
                    brandOnlyData?.map((item, index) => {
                        return <option key={index} value={item}>{item.toUpperCase()}</option>
                    })
                }
            </select>

            {/* Price range  */}
            <h1 className='mt-5 font-semibold text-xl mb-3'>Price Range</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <input type="range" name="" id="" value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                />
            </div>
            <button className="mt-3 bg-red-500 px-2 py-2 text-md rounded-md 
                            text-white w-full flex gap-2 items-center 
                            justify-center font-semibold cursor-pointer hover:bg-red-700"
                onClick={resetFilter}
            >
                Reset Filter
            </button>

        </div>
    )
} 
