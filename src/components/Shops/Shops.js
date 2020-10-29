import React, { useState } from 'react';
import '../../fakeData';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import product from '../Product/Product';
import Product from '../Product/Product';
import './Shopss.css';

const Shops = () => {
   const first10 = fakeData.slice(0,10);
   const [products, serProducts] = useState(first10);
   const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        // console.log('product added', product);
     const newCart = [...cart, product];
     setCart(newCart);
 }

    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pd => <Product
                        handleAddProduct = {handleAddProduct}
                        product={pd}
                        ></Product>)
                    }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shops;