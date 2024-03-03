import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { logo } from '../assets'
import { avatar } from '../assets'
import { cart } from '../assets'
import { close } from '../assets'
import { menu } from '../assets'
import { navLinks } from '../constants'

import { useCart } from '../providers/cartProvider'

const Navbar = () => {

    const [active, setActive] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [toggle, setToggle] = useState(false);

    const { cartItems } = useCart();
    const { removeFromCart } = useCart();

    return (
        <nav className='sm:px-16 px-6 w-full flex items-center py-5 fixed top-6'>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link to="/" className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
                    <img src={logo} alt="logo" className='w-30 h-30 object-contain' />
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title
                                ? "text-black font-sans"
                                : "text-gray-500 font-sans"
                                } hover:text-black hover:border-secondary hover:border-b-2 hover:pb-8 transition-all text-[16px] font-medium font-sans cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='flex'>
                    <img
                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={`${!toggle ? 'hidden' : 'flex'}`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title
                                        ? "text-black font-sans"
                                        : "text-gray-500 font-sans"
                                        } hover:text-black hover:border-secondary hover:border-b-2 hover:pb-8 transition-all text-[16px] font-medium font-sans cursor-pointer`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='flex space-x-8 items-center'>
                    <Link to="#" onClick={() => setIsCartOpened(!isCartOpened)}>
                        <img src={cart} alt="cart" className='w-15 h-15' />
                    </Link>

                    {isCartOpened && (
                        <div className="absolute right-10 top-20 w-60 z-50 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
                            {/* You can populate this section with cart items */}
                            <div className='text-[14px] text-black font-bold font-sans'>Cart</div>
                            <div className='border-t border-gray-300 my-2'></div>
                            {cartItems.length === 0 ? (
                                <div className="text-[13px] text-gray-500 flex justify-center items-center h-full font-sans">Your cart is empty.</div>
                            ) : (
                                <ul>
                                    {cartItems.map((item, index) => (
                                        <li key={item.id}>
                                            <div>
                                                <h3 className='font-sans text-[12px]'>{item.name}</h3>
                                                <p className='font-sans text-[12px]'>Price: ${item.price}</p>
                                                <p className='font-sans text-[12px]'>Quantity: {item.quantity}</p>
                                            </div>
                                            <button className='bg-primary text-[12px] text-white font-sans font-bold mt-1' onClick={() => removeFromCart(item.productId)}>Remove</button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    <Link
                        to="/"
                        className='relative inline-block'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {isHovered ? (
                            <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center">
                                <img src={avatar} alt="avatar" className='w-10 h-10' />
                            </div>
                        ) : <img src={avatar} alt="avatar" className='w-10 h-10' />}
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar