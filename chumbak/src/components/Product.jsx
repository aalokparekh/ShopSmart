import React, { useEffect, useState } from 'react'

const Product = () => {

   const [data,setData] = useState([])
   const [filter,setFilter] = useState(data)
   const [loading,setLoading] =useState(false)
   let componentMounted = true;

    const  getProducts = async() =>{
        setLoading(true);
        
    } 

   useEffect(()=>{
    getProducts();
   },[])
  return (
    <div>
      
    </div>
  )
}

export default Product
