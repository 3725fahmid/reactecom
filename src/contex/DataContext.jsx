import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState();

    // fetching all product from api 
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            // console.log(response.data);
            const productData = response.data;
            setData(productData);
        } catch (error) {
            console.log(error);

        }
    }

    const getUniqueCategory = (data, property) => {
        return [...new Set(data?.map(item => item[property]))];
    };

    const categoryOnlyData = getUniqueCategory(data, "category");
    // console.log(categoryOnlyData);

    return <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData }}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext);