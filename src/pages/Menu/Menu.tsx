import React, { useState } from 'react';
import styles from './Menu.module.scss'
import MenuSlot from "../../components/MenuSlot/MenuSlot";
import ChatForm from "../../components/ChatForm/ChatForm";
import MyWayJPG from "../../assets/jpg/test4.jpg"
import VocalLessonsJPG from "../../assets/jpg/test1.jpg"
import PerformanceJPG from "../../assets/jpg/test2.jpg"
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
                <ChatForm minimize={false}/>
            </div>
        </motion.div>
    );
};

export default Menu;