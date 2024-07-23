import React, { useState } from 'react';
import styles from './Menu.module.scss'
import MenuSlot from "../../components/MenuSlot/MenuSlot";
import ChatForm from "../../components/ChatForm/ChatForm";
import MyWayJPG from "../../assets/jpg/MyWay.jpg"
import VocalLessonsJPG from "../../assets/jpg/VocalLessons.jpg"
import PerformanceJPG from "../../assets/jpg/Performance.jpg"
import test1JPG from "../../assets/jpg/test6.jpg"
import test2JPG from "../../assets/jpg/test7.jpg"
import test3JPG from "../../assets/jpg/test8.jpg"
import { motion } from 'framer-motion';

const Menu = () => {
    const [toDark,setDark] = useState(false);
    const [hovered,setHovered] = useState(0);
    let mobile = window.matchMedia("(max-width: 768px)").matches;
    const DarkBackground = (e: number) => {
        setHovered(e);
        setDark(true);
    }

    const LightBackground = () => {
        setHovered(0);
        setDark(false);
    }

    return (
        <motion.div
            className={styles.mainContainer}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{duration:1}}}
            exit={{opacity:0}}>
            <div className={styles.menuContainer}>
                <MenuSlot title={'Мой путь'} image={mobile ? test1JPG : MyWayJPG} LightBackground={LightBackground}
                          DarkBackground={() => DarkBackground(1)} navigate={'/myWay'} toDark={toDark} isHovering={hovered === 1} />
                <MenuSlot title={'Обучение'} image={mobile ? test2JPG : VocalLessonsJPG}  LightBackground={LightBackground}
                          DarkBackground={() => DarkBackground(2)} navigate={'/vocalLessons'} toDark={toDark} isHovering={hovered === 2} />
                <MenuSlot title={'Перфоманс'} image={mobile ? test3JPG : PerformanceJPG} LightBackground={LightBackground}
                          DarkBackground={() => DarkBackground(3)} navigate={'/onlineCourses'} toDark={toDark} isHovering={hovered === 3}/>
                <ChatForm LightBackground={LightBackground} DarkBackground={() => DarkBackground(4)} minimize={false}
                          isChosen={toDark}/>
            </div>
        </motion.div>
    );
};

export default Menu;