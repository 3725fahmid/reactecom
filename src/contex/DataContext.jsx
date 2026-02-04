import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState();

    // fetching all product from api 
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapiserver.reactbd.org/api/products')
            // console.log(response.data.data);
            const productData = response.data.data;
            setData(productData);
        } catch (error) {
            console.log(error);

        }
    }

    const getUniqueCategory = (data, property) => {
        return ["All", ...new Set(data?.map(item => item[property]))];
    };

    const categoryOnlyData = getUniqueCategory(data, "category");
    const brandOnlyData = getUniqueCategory(data, "brand");
    // console.log(categoryOnlyData);

    return <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext);