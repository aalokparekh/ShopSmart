
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Product = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('none');

  // Fetch products from API
  const getProducts = async () => {
    try {
      let res = await fetch("http://localhost:8000/products");
      let data = await res.json();
      setData(data);
      setFilteredData(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  // Effect to fetch products
  useEffect(() => {
    getProducts();
  }, []);

  // Filter products based on category
  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(product => product.category === category));
    }
  };

  // Sort products based on selected order
  const sortProducts = (order) => {
    let sortedData = [...filteredData];
    if (order === 'price-asc') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (order === 'price-desc') {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (order === 'alpha-asc') {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'alpha-desc') {
      sortedData.sort((a, b) => b.title.localeCompare(a.title));
    }
    setFilteredData(sortedData);
  };

  // Handle category change
  const handleCategoryChange = (event) => {
    filterProducts(event.target.value);
  };

  return (
    <div className='container my-4'>
      {/* Filtering Dropdown */}
      <div className="mb-4">
        <select
          className="form-select"
          aria-label="Select category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Bags">Bags</option>
          <option value="Home Decor">Home Decor</option>
          <option value="Watches">Watches</option>
          <option value="Electronics">Electronics</option>
          <option value="Home Furnishing">Home Furnishing</option>
          <option value="Fashion Accessories">Fashion Accessories</option>
          <option value="Perfume">Perfume</option>
          <option value="Gift Card">Gift Card</option>
          <option value="Soya Wax Candles">Soya Wax Candles</option>
          <option value="Mug">Mug</option>
          <option value="jwellary">Jwellary</option>
        </select>
      </div>

      {/* Sorting Buttons */}
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-outline-dark me-2" onClick={() => sortProducts('price-asc')}>Price: Low to High</button>
        <button className="btn btn-outline-dark me-2" onClick={() => sortProducts('price-desc')}>Price: High to Low</button>
        <button className="btn btn-outline-dark me-2" onClick={() => sortProducts('alpha-asc')}>Alphabetical: A-Z</button>
        <button className="btn btn-outline-dark me-2" onClick={() => sortProducts('alpha-desc')}>Alphabetical: Z-A</button>
      </div>

      {/* Product Grid */}
      <div className="row">
        {filteredData.map((el) => (
          <div key={el.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img src={el.image} className="card-img-top" alt={el.title} style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text">{"Rs. " + el.price}</p>
                <NavLink to={`/products/${el.id}`} className="btn btn-outline-dark mt-auto">
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;



// This my code 
// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

// const Product = () => {
//   const [data, setData] = useState([]);

//   const getProducts = async () => {
//     let res = await fetch("http://localhost:8000/products");
//     let data = await res.json();
//     setData(data);
//   };


//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div className='container my-4'>
   
//       {/* Product Grid */}
//       <div className="row">
//         {data.map((el) => (
//           <div key={el.id} className="col-md-3 col-sm-6 mb-4">
//             <div className="card" style={{ width: '100%' }}>
//               <img src={el.image} className="card-img-top" alt={el.title} style={{ height: '200px', objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{el.title}</h5>
//                 <p className="card-text">{"Rs. " + el.price}</p>
//                 <NavLink to={`/products/${el.id}`} className="btn btn-outline-dark">
//                   Buy Now
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;
