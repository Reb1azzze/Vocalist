import React from 'react';
import { motion } from 'framer-motion';
import styles from "../MainPerformance/MainPerformance.module.scss";
import MainInformation from "../../components/MainInformation/MainInformation";
import Notes from "../../components/Notes/Notes";
import SpecificInformation from "../../components/SpecificInformation/SpecificInformation";
import Performance from "../../components/Performance/Performance";
import VocalLessonsJpg from "../../assets/jpg/2.jpg"
const VocalLessons = () => {
    return (
        <motion.div
            className={styles.container}
            initial={{opacity: 0}}
            animate={{opacity: 1}} 
            exit={{opacity: 0,transition:{duration:0.2}}}>
            <motion.img
                className={styles.mainPhoto}
                src={VocalLessonsJpg}
                alt={"d"}
                initial={{position:"fixed",opacity:1,top:"135px",left:"435px"}}
                animate={{x:"930px",transition:{duration:0.5}}}
                exit={{x:"440px",transition:{duration:0.2}}}/>
            <MainInformation/>
            <Notes/>
            <SpecificInformation/>
            <Performance/>
            <SpecificInformation/>
        </motion.div>
    );
};

export default VocalLessons;