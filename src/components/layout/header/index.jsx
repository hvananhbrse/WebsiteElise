import React from 'react';
import BoxSearch from '../boxSearch';
import Logo from '../../../assets/img/logo-Elise.png'
import Phone from '../../../assets/img/icon-phone.png'
import User from '../../../assets/img/icon-user.png'
import Cart from '../../../assets/img/icon-cart.png'
import Heart from '../../../assets/img/icon-heart-none.png'

const ListMenu = [
    { images: Phone, title: "Gọi ngay" },
    { images: User, title: "Tài Khoản" },
]

const Header = () => {
    return (
        <div className="w-full all-center !justify-between px-[3vw] py-[2vw] shadow-custom-01">
            <img src={Logo} alt="Logo" className='w-[10vw] focus:outline-none' />
            <BoxSearch />
            <div className="all-center gap-[1.5vw]">
                {ListMenu.map((item, index) => (
                    <div key={index} className="flex gap-[0.2vw] items-center hover-items ">
                        <img src={item.images} alt="Icon Phone" className='w-[1vw]' />
                        <span className='text-[0.9vw]'>{item.title}</span>
                    </div>
                ))}
                 <div className="flex gap-[1vw]">
                    <img src={Cart} alt="Cart" className='w-[1.2vw] hover-items ' />
                    <img src={Heart} alt="Heart" className='w-[1.2vw] hover-items ' />
                 </div>
            </div>
           
        </div>
    )
}
export default Header;