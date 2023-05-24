import React from 'react';
import {motion} from "framer-motion";
import styles from "../MainPerformance/MainPerformance.module.scss";
import OnlineCoursesJpg from "../../assets/3.jpg";
import MainInformation from "../../components/MainInformation/MainInformation";
import Notes from "../../components/Notes/Notes";
import SpecificInformation from "../../components/SpecificInformation/SpecificInformation";
import Performance from "../../components/Performance/Performance";

const OnlineCourses = () => {
    return (
        <motion.div className={styles.container}
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    exit={{opacity:0}}>
            <motion.img
                className={styles.mainPhoto}
                src={OnlineCoursesJpg}
                alt={"d"}
                initial={{position:"fixed",opacity:1,top:"135px",left:"729px"}}
                animate={{x:"700px",transition:{duration:0.5}}}
                exit={{x:"400px",transition:{duration:0.2}}}/>
            <MainInformation/>
            <Notes/>
            <SpecificInformation/>
            <Performance/>
            <SpecificInformation/>
        </motion.div>
    );
};

export default OnlineCourses;