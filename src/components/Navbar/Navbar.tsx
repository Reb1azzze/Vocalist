import React from 'react';
import { TbMicrophone2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import './Navbar.scss';
import {BsInstagram, BsTelegram, BsTiktok, BsWhatsapp, BsYoutube} from "react-icons/bs";
import {GiClick} from "react-icons/gi";
const Navbar = () => {
    let navigate = useNavigate();
    return (
        <div className='navbar'>
            <ul>
                <li className='navbar-main-item' onClick={() => navigate('/menu')}>
                    <TbMicrophone2 className='navbar-icon'/>
                    <span className='navbar-title'>Гульшат Хамурзина</span>
                </li>
                <li className='navbar-item3'>
                    <BsInstagram className='navbar-icon' />
                    <span className='navbar-title'>Instagram</span>
                </li>
                <li className='navbar-item3'>
                    <BsYoutube className='navbar-icon' />
                    <span className='navbar-title'>YouTube</span>
                </li>
                <li className='navbar-item4'>
                    <BsWhatsapp className='navbar-icon'/>
                    <span className='navbar-title'>Whatsapp</span>
                </li>
                <li className='navbar-item2'>
                    <BsTelegram className='navbar-icon'/>
                    <span className='navbar-title'>Telegram</span>
                </li>
                <li className='navbar-item2'>
                    <BsTiktok className='navbar-icon'/>
                    <span className='navbar-title'>TikTok</span>
                </li>
                <li className='navbar-item3'>
                    <GiClick className='navbar-icon' />
                    <span className='navbar-title'>Записаться в 1 клик</span>
                </li>
            </ul>
        </div>
    );
};
//
export default Navbar;