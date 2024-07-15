import React, { useState } from 'react';
import styles from './Menu.module.scss'
import MenuSlot from "../../components/MenuSlot/MenuSlot";
import ChatForm from "../../components/ChatForm/ChatForm";
import MyWay from "../../assets/jpg/MyWay.jpg"
import VocalLessons from "../../assets/jpg/VocalLessons.jpg"
import PerformanceJPG from "../../assets/jpg/Performance.jpg"
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
                <MenuSlot title={'Мой путь'} image={MyWay} LightBackground={LightBackground}
                          DarkBackground={DarkBackground} navigate={'/'} isChosen={isChosen} />
                <MenuSlot title={'Уроки вокала'} image={VocalLessons}  LightBackground={LightBackground}
                          DarkBackground={DarkBackground} navigate={'/vocalLessons'} isChosen={isChosen} />
                <MenuSlot title={'Перфоманс'} image={PerformanceJPG} LightBackground={LightBackground}
                          DarkBackground={DarkBackground} navigate={'/onlineCourses'} isChosen={isChosen} />
                <ChatForm minimize={false}/>
            </div>
        </motion.div>
    );
};

export default Menu;