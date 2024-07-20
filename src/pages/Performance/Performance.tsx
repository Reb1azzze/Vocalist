import React from 'react';
import {motion} from "framer-motion";
import styles from "../MyWay/MyWay.module.scss";
import PerformanceJPG from "../../assets/jpg/Performance.jpg";
import SpecificInformation from "../../components/SpecificInformation/SpecificInformation";
import MyPerformance from "../../components/MyPerformance/MyPerformance";
import BlurredTextBlock from "../../components/BlurredTextBlock/BlurredTextBlock";
import ChatForm from "../../components/ChatForm/ChatForm";

const Performance = () => {
    return (
        <motion.div className={styles.container}
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    exit={{opacity:0}}>
            <motion.div
                className={styles.mainPhoto}
                initial={{position:"fixed",opacity:1,top:"80px",left:"729px"}}
                animate={{x:"-729px",transition:{duration:0.5}}}
                exit={{x:"10px",transition:{duration:0.2}}}
                style={{backgroundImage: `url(${PerformanceJPG})`}}>
                <BlurredTextBlock title={"Перфоманс"} star={true}/>
            </motion.div>
            <div className={styles.chatForm}>
                <ChatForm/>
            </div>
            <SpecificInformation/>
            <MyPerformance/>
            <SpecificInformation/>
        </motion.div>
    );
};

export default Performance;