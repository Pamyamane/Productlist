import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductList = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetails = async () => {

        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);

    };

    useEffect(() => {
        getProductDetails();
    }, [id]);

    return (
        <div>
            <h1>Product Details</h1>
            {product ? (
                <div>
                   
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <img src={product.thumbnail} alt={product.title} width="200" />
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default ProductList;
