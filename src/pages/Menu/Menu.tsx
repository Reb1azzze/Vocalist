import React, { useState } from 'react';
import styles from './Menu.module.scss'
import MenuSlot from "../../components/MenuSlot/MenuSlot";
import AboutJpg from "../../assets/gkh.jpg"
import VocalLessons from "../../assets/2.jpg"
import OnlineCourses from "../../assets/3.jpg"
import Cooperation from "../../assets/4.jpg"
import { motion } from 'framer-motion';
const Menu = () => {
    const [isChosen,setChosen] = useState(false);
    const DarkBackground = () => {
        setChosen(true);
    }

    const LightBackground = () => {
        setChosen(false);
    }

    return (
        <motion.div
            className={styles.mainContainer}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{duration:1}}}
            exit={{opacity:0}}>
            <div className={styles.menuContainer}>
                <MenuSlot title={'Мой путь'} image={AboutJpg} LightBackground={LightBackground}
                          DarkBackground={DarkBackground} navigate={'/'} isChosen={isChosen} />
                <MenuSlot title={'Уроки вокала'} image={VocalLessons}  LightBackground={LightBackground}
                          DarkBackground={DarkBackground} navigate={'/vocalLessons'} isChosen={isChosen} />
                <MenuSlot title={'Онлайн-Курсы'} image={OnlineCourses} LightBackground={LightBackground}
                          DarkBackground={DarkBackground} navigate={'/onlineCourses'} isChosen={isChosen} />
                <MenuSlot title={'Контакты'} image={Cooperation}  LightBackground={LightBackground}
                          DarkBackground={DarkBackground} navigate={'/Contacts'} isChosen={isChosen} />
            </div>
        </motion.div>
    );
};

export default Menu;