import React, { useState } from 'react'
import { useCart } from '../providers/cartProvider'; 
import { v4 as uuidv4 } from 'uuid';

import { product1 } from '../assets'

const Product = () => {

    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity(quantity + 1)
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const product = {
            productId: uuidv4(),
            name: 'Sneakers',
            price: 125.00,
            quantity
        };
        addToCart(product);
    }

    return (
        <div className="mt-16 flex flex-col md:flex-row max-w-7xl mx-auto relative z-0 px-10 py-10 left-32 top-32">
            <div className="md:w-1/2 p-4">
                <img src={product1} alt="product-1" className="w-min rounded-xl" />
            </div>

            <div className="md:w-1/2 p-4">
                <p className='font-bold font-sans text-primary tracking-[2px] text-[11px] my-10 ml-10'>SNEAKER COMPANY</p>
                <h1 className="text-xl font-bold mb-4 font-sans text-[40px] my-10 ml-10 tracking-wide">Fall Limited Edition</h1>
                <h1 className='text-xl font-bold mb-4 font-sans text-[40px] ml-10 tracking-wide'>Sneakers</h1>
                <p className="text-gray-600 mb-4 font-sans ml-10">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <div>
                    <span className="text-lg font-bold font-sans ml-10">$125.00</span>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-4 bg-gray-100 rounded w-fit my-10 ml-10">
                    <div className="flex space-x-4">
                        <button className="bg-gray-100 text-secondary font-bold font-sans py-2 px-3" onClick={decrease}>-</button>
                        <span className="bg-gray-100 text-black font-bold py-2 px-3 font-sans">{quantity}</span>
                        <button className="bg-gray-100 text-secondary font-bold py-2 px-3 font-sans" onClick={increase}>+</button>
                    </div>
                </div>
                <div className='ml-10 w-fit mt-4'>
                    <button className="bg-primary hover:bg-orange-300 text-white text-[13px] w-32 font-bold font-sans py-2 px-4 rounded" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>

    )
}

export default Product