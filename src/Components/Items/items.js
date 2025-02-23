import React from 'react';

import { Link } from 'react-router-dom';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

const Items = ({ data, addToCart }) => {
  const { id, image, title, price } = data;

  return (
    <>
      <div className="max-w-72 rounded mb-4 overflow-hidden shadow-lg justify-center items-center flex flex-col  transition-transform duration-300 ease-in-out transform hover:-translate-y-2 mt-4">
      <img src={image} alt={title} className="w-1/3" />
      <div className="p-2">
        <Link to={`/product/${id}`}>
        <div className=" text-md mb-2 hover:text-blue-700 hover:underline">{title}</div>
        
        </Link>
       
      </div>
      <div className="flex  space-x-32 m-4">
            <p className="text-blue-700 text-base font-bold">${price}</p>
            <button className="btn btn-secondary " onClick={addToCart} >
    <ShoppingCartSharpIcon className='text-blue-700' />
  </button>
</div>

    </div>
    </>
  );
};

export { Items };
