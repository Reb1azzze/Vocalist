import React from 'react';
import { useNavigate } from "react-router-dom";
import { BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import styles from './Navbar.module.scss';
const Navbar = () => {
    let navigate = useNavigate();
    return (
        <div className={styles.navbar}>
            <ul className={styles.navbarUl}>
                <li className={styles.navbarLi + ' ' + styles.navbarMenuItem} onClick={() => navigate('/')}>
                    <FiAlignJustify className={styles.navbarIcon + ' ' + styles.iconMenu}/>
                </li>
                <li className={styles.navbarLi + ' ' + styles.navbarItem} onClick={() => window.open('https://www.instagram.com/gulshat.khamurzina?igsh=Y2JzNmFtajd3ZzVk&utm_source=qr', '_blank')}>
                    <BsInstagram className={styles.navbarIcon + ' ' + styles.iconInst} />
                </li>
                <li className={styles.navbarLi + ' ' + styles.navbarItem} onClick={() => window.open('https://www.youtube.com/@Gulshat_Khamurzina', '_blank')}>
                    <BsYoutube className={styles.navbarIcon + ' ' + styles.iconYt}/>
                </li>
                <li className={styles.navbarLi + ' ' + styles.navbarItem} onClick={() => window.open('https://www.youtube.com/@Gulshat_Khamurzina', '_blank')}>
                    <BsTelegram className={styles.navbarIcon + ' ' + styles.iconTg}/>
                </li>
            </ul>
        </div>
    );
};
//
export default Navbar;