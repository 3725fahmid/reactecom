import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../assets/Loading4.webm";
import Breadcrum from '../components/Breadcrum';

function SingleProduct() {
    const params = useParams();
    const [productDetails, setProductDetails] = useState("");

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapiserver.reactbd.org/api/products/${params.id}`);
            const product = res.data;
            setProductDetails(product);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getSingleProduct();
    }, [])


    return (
        <>
            {
                productDetails ? <div>
                    <Breadcrum title={productDetails.title} />
                </div> :
                    < div className="flex items-center justify-center h-screen">
                        <video muted autoPlay loop>
                            <source src={Loading} type='video/webm' />
                        </video>
                    </div>
            }
        </>
    )
}

export default SingleProduct