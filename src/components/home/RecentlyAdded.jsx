"use client"

import React, {useEffect, useState} from "react";
import ProductBox from "../ProductBox";


export default function RecentlyAdded() {
  const [product, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.in/api/products?limit=5");
    const data = await response.json();
    console.log(data);
    try {
      if(response.status === 200 || response.status === 201){

        setProducts(data.products);
      }
    } catch (error) {
      
    }
    setProducts(data.products);
  }

  useEffect(()=> {
    getProducts();
  },[]);


  return (
    <section className="bg-gray-100 text-black p-4 my-4">
      <h1 className="text-3xl text-center">Recently Added Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 h-full gap-3 my-6 mx-2">
        {
          product?.map((prod, index)=>(
           <div key={index}>
           <ProductBox  product={prod} />
           </div>
          ))
        }
      </div>
    </section>
  );
}