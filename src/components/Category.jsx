import React, { useEffect } from 'react'
import { getData } from '../contex/DataContext'

function Category() {
    const { data, fetchAllProducts } = getData();

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const getUniqueCategory = (data, property) => {
        return [...new Set(data?.map(item => item[property]))];
    };

    const categoryOnlyData = getUniqueCategory(data, "category");
    console.log(categoryOnlyData);

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
