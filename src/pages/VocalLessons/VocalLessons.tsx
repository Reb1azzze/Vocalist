import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from "react-player";
import {Carousel, Collapse, CollapseProps} from "antd";
import VocalLessonsJpg from "../../assets/jpg/VocalLessons.jpg"
import pupil1 from "../../assets/jpg/pupil1.jpg"
import pupil2 from "../../assets/jpg/pupil2.jpg"
import pupil3 from "../../assets/jpg/pupil3.jpg"
import pupil4 from "../../assets/jpg/pupil4.jpg"
import pupil5 from "../../assets/jpg/pupil5.jpg"
import pupil6 from "../../assets/jpg/pupil6.jpg"
import pupil7 from "../../assets/jpg/pupil7.jpg"
import pupil8 from "../../assets/jpg/pupil8.jpg"
import pupil9 from "../../assets/jpg/pupil9.jpg"
import pupil10 from "../../assets/jpg/pupil10.jpg"
import pupil11 from "../../assets/jpg/pupil11.jpg"
import diploma1 from "../../assets/jpg/diploma1.jpg"
import diploma2 from "../../assets/jpg/diploma2.jpg"
import diploma3 from "../../assets/jpg/diploma3.png"
import diploma4 from "../../assets/jpg/diploma4.jpg"
import star1 from "../../assets/jpg/star1.jpg"
import star2 from "../../assets/jpg/star2.jpg"
import star3 from "../../assets/jpg/star3.jpg"
import star4 from "../../assets/jpg/star4.jpg"
import star5 from "../../assets/jpg/star5.jpg"
import star6 from "../../assets/jpg/star6.jpg"
import star7 from "../../assets/jpg/star7.jpg"
import star8 from "../../assets/jpg/star8.jpg"
import star9 from "../../assets/jpg/star9.jpg"
import star10 from "../../assets/jpg/star10.jpg"
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import BlurredTextBlock from "../../components/BlurredTextBlock/BlurredTextBlock";
import ChatForm from "../../components/ChatForm/ChatForm";
import Title from "../../components/Title/Title";

import styles from "../MyWay/MyWay.module.scss";
import review1 from "../../assets/jpg/review1.png";
import review2 from "../../assets/jpg/review2.png";
import review3 from "../../assets/jpg/review3.png";
import review4 from "../../assets/jpg/review4.png";
import review5 from "../../assets/jpg/review5.png";

const VocalLessons = () => {
    let pc = window.matchMedia("(min-width: 1200px)").matches;
    let awards =
        <ul>
            <li>Профессионально занимаюсь вокалом и выступаю на сцене с 2004 г</li>
            <li>Преподаю с 2017 г</li>
            <li>Участница телевизионного проекта “Голос 3” на Первом канале, команда Александра Градского</li>
            <li>Лауреат и обладатель Гран-При республиканских, всероссийских и международных конкурсов в номинациях эстрадный вокал, академический вокал и скрипка (Украина, Эстония, Болгария, Египет, г. Москва, г. Санкт-Петербург, г. Казань, г. Сыктывкар)</li>
            <li>По представлению редакции энциклопедии «Лучшие люди России» и общественно-консультационного совета награждена медалью в номинации «Им принадлежит будущее» и включена в энциклопедию «Одаренные дети – будущее России» в 2008 г.</li>
        </ul>
    let qualify =
        <ul>
            <li>Беру уроки вокала у В. И. Коробки (педагог, композитор, аранжировщик, продюсер вокала и саунд-продюсер на всех сезонах шоу «Фабрика звёзд»)</li>
            <li>Брала уроки академического вокала у Бойко Г. Р. (солистка МГАТ им. Станиславского и Немировича-Данченко, приглашенная солистка Государственного академического большого театра России, заслуженная артистка Российской Федерации, солистка Московской государственной филармонии)</li>
            <li>Брала уроки вокала у Ганеевой В. А. (народная артистка Российской Федерациии и Республики Татарстан)</li>
            <li>Онлайн-курс Марины Полтевой “Петь легко!”</li>
            <li>Онлайн-курс Дарьи Манаковой “Up & Up”</li>
            <li>Интенсив по вокалу «PLATINUM VOICE» под руководством RAab Stevenson и Mindy Pack</li>
            <li>Онлайн-курс “Christina Aquilera teaches singing”</li>
            <li>Онлайн-курс “Cheryl Porter Vocal Method”</li>
            <li>Повышение квалификации в Российской общественной академии голоса по программе «Междисциплинарные теоретико-методологические проблемы вокально-речевой педагогики»   </li>
            <li>Учусь в Институте Современного Искусства</li>
            <li>Окончила Российский государственный социальный университет по направлению «Преподаватель эстрадно-джазового вокала»</li>
            <li>Окончила Детскую музыкальную школу по направлениям академического вокала и игры на скрипке</li>
        </ul>
    let cooperate =
        <ul>
            <li>С Сергеем Волчковым (победитель шоу «Голос 2») и оркестром ФСБ</li>
            <li>С Александром Градским и оркестром «Фонограф» </li>
            <li>С каналами «Первый канал», ТНВ, Первый городской телеканал в Казани, Луч, 24 Альметьевск ТВ</li>
            <li>С оркестром народных инструментов г. Альметьевска </li>
        </ul>

    const collapseCooperate: CollapseProps['items'] = [
        {
            key:'2',
            label: 'С кем сотрудничала',
            children: cooperate
        }
    ];

    const collapseAwards: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Мои награды и достижения',
            children: awards,
        },
        {
            key: '2',
            label: 'Моя квалификация',
            children: qualify,
        }
    ];
    return (
        <motion.div
            className={styles.container}
            initial={{opacity: 0}}
            animate={{opacity: 1}} 
            exit={{opacity: 0,transition:{duration:0.2}}}>
            {pc ?
                <motion.div
                className={styles.mainPhoto}
                initial={{position:"fixed",opacity:1,top:"80px",left:"450px"}}
                animate={{x:"-450px",transition:{duration:0.5}}}
                exit={{x:"10px",transition:{duration:0.2}}}
                style={{backgroundImage: `url(${VocalLessonsJpg})`}}>
                <BlurredTextBlock title={"Обучение"} star={true}/>
            </motion.div> : <></>}
            {pc ?
                <div className={styles.chatForm}>
                    <ChatForm/>
                </div> :<></>}

            <div className={styles.pageContainer}>
                <Title title={'Научись петь стильно, ярко и качественно!'}/>
                <div className={styles.playerWrapper}>
                    <ReactPlayer width={'100%'} height={'100%'} controls={true}
                                 url={'https://www.youtube.com/watch?v=cIhRNjugqiM&ab_channel=%D0%93%D0%BE%D0%BB%D0%BE%D1%813%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%2FTheVoiceRussia'}/>
                </div>
                <Title title={'Результаты учеников'}/>
                <div className={styles.playerGrid}>
                    <ReactPlayer width={'100%'} height={'100%'} controls={true}
                                 url={'https://youtu.be/4LMLALQUsnc'}/>
                    <ReactPlayer width={'100%'} height={'100%'} controls={true}
                                 url={'https://youtu.be/UiC5tra-q0o'}/>
                    <ReactPlayer width={'100%'} height={'100%'} controls={true}
                                 url={'https://youtu.be/NX_2WbGWqLM'}/>
                    <ReactPlayer width={'100%'} height={'100%'} controls={true}
                                 url={'https://youtube.com/shorts/9PSZ_m6SqQk'}/>
                    <ReactPlayer  width={'100%'} height={'100%'} controls={true}
                                  className={styles.playerGridLastChild}
                                 url={'https://youtu.be/ySS5DpXsGr8'}/>
                </div>
                <Title title={'Как проходят уроки'}/>
                <div className={styles.lessonInfo}>
                    <div className={styles.font}>
                    <ul>
                        <li>В приятной обстановке, с современным оборудованием, в центре Москвы</li>
                        <li>Вы избавитесь от страха публичных выступлений и других зажимов в голосе и теле</li>
                        <li>Научитесь петь с нуля, даже если не пробовали раньше</li>
                        <li>Успешно подготовитесь к кастингу / конкурсу / прослушиванию / поступлению в театральный ВУЗ</li>
                        <li>Познакомитесь с передовыми знаниями в области анатомии вокала</li>
                        <li>Раскроете свой потенциал благодаря техникам качественного звукоизвлечения</li>
                        <li>Удивите друзей новым репертуаром из песен любимых исполнителей</li>
                    </ul>
                    </div>
                </div>
                <Title title={'Научатся все!'}/>
                <Carousel className={styles.slider} arrows={true} draggable={true} autoplay={true} dotPosition='top' adaptiveHeight={true}>
                    <img src={pupil1} alt={''}/>
                    <img src={pupil2} alt={''}/>
                    <img src={pupil3} alt={''}/>
                    <img src={pupil4} alt={''}/>
                    <img src={pupil5} alt={''}/>
                    <img src={pupil6} alt={''}/>
                    <img src={pupil7} alt={''}/>
                    <img src={pupil8} alt={''}/>
                    <img src={pupil9} alt={''}/>
                    <img src={pupil10} alt={''}/>
                    <img src={pupil11} alt={''}/>
                </Carousel>
                <Collapse items={collapseAwards} size={"large"}/>
                <Carousel className={styles.slider} arrows={true} draggable={true} autoplay={true} dotPosition='top' adaptiveHeight={true}>
                    <img src={diploma1} alt={''}/>
                    <img src={diploma2} alt={''}/>
                    <img src={diploma3} alt={''}/>
                    <img src={diploma4} alt={''}/>
                </Carousel>
                <Collapse items={collapseCooperate} size={"large"}/>
                <Carousel className={styles.slider} arrows={true} draggable={true} autoplay={true} dotPosition='top' adaptiveHeight={true}>
                    <img src={star1} alt={''}/>
                    <img src={star2} alt={''}/>
                    <img src={star3} alt={''}/>
                    <img src={star4} alt={''}/>
                    <img src={star5} alt={''}/>
                    <img src={star6} alt={''}/>
                    <img src={star7} alt={''}/>
                    <img src={star8} alt={''}/>
                    <img src={star9} alt={''}/>
                    <img src={star10} alt={''}/>
                </Carousel>
                <Title title={'Отзывы'}/>
                <Carousel className={styles.slider} arrows={true} draggable={true} autoplay={true} dotPosition='top' adaptiveHeight={true}>
                    <img src={review1} alt={''}/>
                    <img src={review2} alt={''}/>
                    <img src={review3} alt={''}/>
                    <img src={review4} alt={''}/>
                    <img src={review5} alt={''}/>
                </Carousel>
                <Title title={'Научу петь так, чтобы соседи хлопали, а не стучали!'}/>
            </div>
        </motion.div>
    );
};

export default VocalLessons;