import React from 'react';
import { BiDetail } from "react-icons/bi";
import { TbMicrophone2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
    let navigate = useNavigate();
    return (
        <div className='navbar'>
            <ul>
                <li className='navbar-main-item' onClick={() => navigate('/')}>
                    <TbMicrophone2 className='navbar-icon'/>
                    <span className='navbar-title'>Гульшат Хамурзина</span>
                </li>
                <li className='navbar-item3' onClick={() => navigate('/menu')}>
                    <BiDetail className='navbar-icon' />
                    <span className='navbar-title'>Сотрудничество</span>
                </li>
                </ul>
        </div>
    );
};
//
export default Navbar;