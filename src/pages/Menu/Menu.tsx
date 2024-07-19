import React, { useState } from 'react';
import styles from './Menu.module.scss'
import MenuSlot from "../../components/MenuSlot/MenuSlot";
import ChatForm from "../../components/ChatForm/ChatForm";
import MyWayJPG from "../../assets/jpg/MyWay.jpg"
import VocalLessonsJPG from "../../assets/jpg/VocalLessons.jpg"
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
                <MenuSlot title={'Мой путь'} image={MyWayJPG} LightBackground={LightBackground}
                          DarkBackground={DarkBackground} navigate={'/myWay'} isChosen={isChosen} />
                <MenuSlot title={'Уроки вокала'} image={VocalLessonsJPG}  LightBackground={LightBackground}
                          DarkBackground={DarkBackground} navigate={'/vocalLessons'} isChosen={isChosen} />
                <MenuSlot title={'Перфоманс'} image={PerformanceJPG} LightBackground={LightBackground}
                          DarkBackground={DarkBackground} navigate={'/onlineCourses'} isChosen={isChosen} />
                <ChatForm LightBackground={LightBackground} DarkBackground={DarkBackground} minimize={false}
                          isChosen={isChosen}/>
            </div>
        </motion.div>
    );
};

export default Menu;