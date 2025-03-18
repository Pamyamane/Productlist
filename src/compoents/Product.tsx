import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate(); // Fix Navigate to navigate
  const [product, setProduct] = useState([]);
  const getUserdata = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const userdata = await data.json();
    setProduct(userdata?.products);
  };

  useEffect(() => {
    getUserdata();
  }, []);

  const clicknavihates = (id) => {
   
    navigate(`/ProductList/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product?.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
          <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-600 font-bold my-2">${item.price}</p>
          <button
            onClick={() => clicknavihates(item.id)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700 transition"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Product;
