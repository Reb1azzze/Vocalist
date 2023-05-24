import React from 'react';
import MainInformation from "../../components/MainInformation/MainInformation";
import SpecificInformation from "../../components/SpecificInformation/SpecificInformation";
import Performance from "../../components/Performance/Performance";
import MainPhoto from "../../assets/jpg/gkh.jpg"
import styles from "./MainPerformance.module.scss"
import Notes from "../../components/Notes/Notes";
import {motion} from "framer-motion";

const MainPerformance = () => {
    return (
        <motion.div className={styles.container}
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    exit={{opacity:0}}>
            <motion.img
                className={styles.mainPhoto}
                src={MainPhoto}
                alt={"d"}
                initial={{position:"fixed",opacity:1,top:"135px",left:"255px"}}
                animate={{x:"1130px",transition:{duration:0.5}}}
                exit={{x:"300px",transition:{duration:0.2}}}/>
            <MainInformation/>
            <SpecificInformation/>
            <Performance/>
            <SpecificInformation/>
        </motion.div>
    );
};

export default MainPerformance;