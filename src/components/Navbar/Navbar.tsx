import React from 'react';
import { useNavigate } from "react-router-dom";
import { BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import './Navbar.scss';
const Navbar = () => {
    let navigate = useNavigate();
    return (
        <div className='navbar'>
            <ul>
                <li className='navbar-menu-item' onClick={() => navigate('/')}>
                    <FiAlignJustify className='navbar-icon icon-menu'/>
                </li>
                <li className='navbar-item' onClick={() => window.open('https://www.instagram.com/gulshat.khamurzina?igsh=Y2JzNmFtajd3ZzVk&utm_source=qr', '_blank')}>
                    <BsInstagram className='navbar-icon icon-inst' />
                </li>
                <li className='navbar-item' onClick={() => window.open('https://www.youtube.com/@Gulshat_Khamurzina', '_blank')}>
                    <BsYoutube className='navbar-icon icon-yt' />
                </li>
                <li className='navbar-item' onClick={() => window.open('https://www.youtube.com/@Gulshat_Khamurzina', '_blank')}>
                    <BsTelegram className='navbar-icon icon-tg'/>
                </li>
            </ul>
        </div>
    );
};
//
export default Navbar;