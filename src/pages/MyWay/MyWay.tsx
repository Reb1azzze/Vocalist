import React from 'react';
import BlurredTextBlock from "../../components/BlurredTextBlock/BlurredTextBlock";
import ChatForm from "../../components/ChatForm/ChatForm";
import MainPhoto from "../../assets/jpg/MyWay.jpg"
import { motion } from "framer-motion";
import styles from "./MyWay.module.scss"
import ReactPlayer from "react-player";
import Title from "../../components/Title/Title";
import myWay1 from "../../assets/jpg/myWay1.jpg";
import myWay2 from "../../assets/jpg/myWay2.jpg";
import myWay3 from "../../assets/jpg/myWay3.jpg";
import myWay4 from "../../assets/jpg/myWay4.jpg";
import myWay5 from "../../assets/jpg/myWay5.jpg";
import myWay6 from "../../assets/jpg/myWay6.jpg";
import myWay7 from "../../assets/jpg/myWay7.jpg";
import myWay8 from "../../assets/jpg/myWay8.jpg";
import myWay9 from "../../assets/jpg/myWay9.jpg";
import myWay10 from "../../assets/jpg/myWay10.jpg";

import {Carousel} from "antd";
const MyWay = () => {
    let pc = window.matchMedia("(min-width: 1200px)").matches;
    return (
        <motion.div className={styles.container}
                    initial={{opacity:0}}
                    animate={{opacity: 1, transition:{duration:1}}}
                    exit={{opacity:0}}>
            {pc ?
                <motion.div
                    className={styles.mainPhoto}
                    initial={{position:"fixed",opacity:1,top:"80px",left:"200px"}}
                    animate={{x:"-200px",transition:{duration:0.5}}}
                    exit={{x:"-150px",transition:{duration:0.2}}}
                    style={{backgroundImage: `url(${MainPhoto})`}}>
                    <BlurredTextBlock title={"Мой путь"} star={true}/>
                </motion.div> : <></>}
            {pc ?
                <div className={styles.chatForm}>
                    <ChatForm/>
                </div> : <></>}

            <div className={styles.pageContainer}>
                <Title title={'Привет, меня зовут Гульшат!'}/>
                <div className={styles.playerWrapper}>
                    <ReactPlayer width={'100%'} height={'100%'} controls={true}
                                 url={'https://www.youtube.com/watch?v=cIhRNjugqiM&ab_channel=%D0%93%D0%BE%D0%BB%D0%BE%D1%813%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%2FTheVoiceRussia'}/>
                </div>
                <div className={styles.lessonInfo}>
                    <div className={styles.font}>
                        <p>Как-то в 6 лет мне сказали, что у меня слишком хриплый голос, и мне не стоит петь. Но через пару лет на уроке по сольфеджио выяснилось, что у меня - абсолютный музыкальный слух, и я начала заниматься вокалом. В 9 лет я впервые выступила на сцене!</p>
                        <p>В 11 лет я заметила, что петь становится все труднее. Я благодарна своему первому педагогу! Но почувствовала, что пора двигаться дальше.</p>
                        <p>Занимаясь с другими педагогами, я упорно пыталась перестроить свой голос. Мне казалось, что другим ученикам освоение вокальных техник удается намного легче! Наконец, я обрела настоящую силу голоса, и он принес мне немало побед! Пока я вновь не столкнулась с несмыканием связок.</p>
                        <p>Тогда, в 13 лет, я познакомилась с оперным вокалом. И эта манера стала моей “волшебной” таблеткой на года! Я готовилась к поступлению в “Гнесинку”, приехала в Москву и подала документы - в Высшую Школу Экономики.</p>
                    </div>
                </div>
                <Carousel className={styles.slider} arrows={true} draggable={true} autoplay={true} dotPosition='top' adaptiveHeight={true}>
                    <img src={myWay1} alt={''}/>
                    <img src={myWay2} alt={''}/>
                    <img src={myWay3} alt={''}/>
                    <img src={myWay4} alt={''}/>
                    <img src={myWay5} alt={''}/>
                    <img src={myWay6} alt={''}/>
                    <img src={myWay7} alt={''}/>
                    <img src={myWay8} alt={''}/>
                    <img src={myWay9} alt={''}/>
                    <img src={myWay10} alt={''}/>
                </Carousel>
                <div className={styles.playerWrapper}>
                    <ReactPlayer width={'100%'} height={'100%'} controls={true}
                                 url={'https://www.youtube.com/watch?v=o1Lz9MQewAo&ab_channel=1TVru'}/>
                </div>
                <div className={styles.lessonInfo}>
                    <div className={styles.font}>
                        <p>Восточная мудрость гласит: “Когда ученик готов, в его жизни появляется Учитель. Когда ученик по-настоящему готов, Учитель уходит”.</p>
                        <p>Саморазвитие - мой главный инструмент. Я организовала съемочную площадку дома, настроила свет и аппаратуру для создания музыки. Я приблизилась к своей мечте, и я могу помочь приблизиться к вашей!</p>
                    </div>
                </div>
                <Title title={'Подписывайтесь на меня в социальных сетях, давайте дружить!'}/>
            </div>
        </motion.div>
    );
};

export default MyWay;