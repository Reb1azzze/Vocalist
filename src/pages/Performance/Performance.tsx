import React from 'react';
import {motion} from "framer-motion";
import styles from "../MyWay/MyWay.module.scss";
import PerformanceJPG from "../../assets/jpg/Performance.jpg";
import BlurredTextBlock from "../../components/BlurredTextBlock/BlurredTextBlock";
import ChatForm from "../../components/ChatForm/ChatForm";
import Title from "../../components/Title/Title";
import ReactPlayer from "react-player";

const Performance = () => {
    let pc = window.matchMedia("(min-width: 1200px)").matches;
    return (
        <motion.div className={styles.container}
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    exit={{opacity:0}}>
            {pc ?
                <motion.div
                className={styles.mainPhoto}
                initial={{position:"fixed",opacity:1,top:"80px",left:"729px"}}
                animate={{x:"-729px",transition:{duration:0.5}}}
                exit={{x:"10px",transition:{duration:0.2}}}
                style={{backgroundImage: `url(${PerformanceJPG})`}}>
                <BlurredTextBlock title={"Перфоманс"} star={true}/>
            </motion.div> : <></>}
            {pc ?
                <div className={styles.chatForm}>
                <ChatForm/>
            </div> : <></>}

            <div className={styles.pageContainer}>
                <Title title={'Хотите превратить ваш праздник в шоу мирового уровня?'}/>
                <Title title={'Заказать Перфоманс!'}/>
                <div className={styles.playerWrapper}>
                    <ReactPlayer width={'100%'} height={'100%'}
                                 url={'https://www.youtube.com/watch?v=PcBCMrfZWO0&ab_channel=ZarobVideo'}/>
                </div>
                <Title title={'Музыкальные программы, которые сделают Ваше мероприятие неповторимым:'}/>
                <ul>
                    <li>Свадебная (через +  список песен)</li>
                    <li>Саундтреки - драмы - Титаник телохранитель</li>
                    <li>Властелин колец ведьмак Игра престолов</li>
                    <li>Мировые золотые хиты</li>
                    <li>Современная классика con te partiro</li>
                    <li>Мюзиклы призрак оперы </li>
                    <li>Русские современные хиты </li>
                    <li>Классическая русская эстрада </li>
                    <li>Мировые хиты современные </li>
                    <li>Вселенная ханса Циммера песни гладиатор голодные игры</li>
                    <li>Ретро хиты 90х</li>
                    <li>Шоу поющих фонтанов в Дубае</li>
                    <li>Татарская лирика</li>
                    <li>Новогодние песни</li>
                </ul>
                <Title title={'Закажите потрясающий Перфоманс в любую точку мира!'}/>
                <Title title={'До встречи на вашем празднике!'}/>
            </div>
        </motion.div>
    );
};

export default Performance;