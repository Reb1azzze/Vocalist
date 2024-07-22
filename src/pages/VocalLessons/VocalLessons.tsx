import React from 'react';
import { motion } from 'framer-motion';
import styles from "../MyWay/MyWay.module.scss";
import VocalLessonsJpg from "../../assets/jpg/VocalLessons.jpg"
import MyPerformance from "../../components/MyPerformance/MyPerformance";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import BlurredTextBlock from "../../components/BlurredTextBlock/BlurredTextBlock";
import ChatForm from "../../components/ChatForm/ChatForm";
import ReactPlayer from "react-player";
import Title from "../../components/Title/Title";
const VocalLessons = () => {
    let pc = window.matchMedia("(min-width: 1200px)").matches;
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
                    <ReactPlayer width={'100%'} height={'100%'}
                                 url={'https://www.youtube.com/watch?v=cIhRNjugqiM&ab_channel=%D0%93%D0%BE%D0%BB%D0%BE%D1%813%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%2FTheVoiceRussia'}/>
                </div>
                <Title title={'Результаты учеников'}/>
                <ReviewSlider/>
                <Title title={'Как проходят уроки'}/>
                <ul>
                    <li>В приятной обстановке, с современным оборудованием, в центре Москвы</li>
                    <li>Вы избавитесь от страха публичных выступлений и других зажимов в голосе и теле</li>
                    <li>Научитесь петь с нуля, даже если не пробовали раньше</li>
                    <li>Успешно подготовитесь к кастингу / конкурсу / прослушиванию / поступлению в театральный ВУЗ</li>
                    <li>Познакомитесь с передовыми знаниями в области анатомии вокала</li>
                    <li>Раскроете свой потенциал благодаря техникам качественного звукоизвлечения</li>
                    <li>Удивите друзей новым репертуаром из песен любимых исполнителей</li>
                </ul>
                <Title title={'Научатся все!'}/>
                <Title title={'Мои награды и достижения (через +)'}/>
                <ul>
                    <li>Профессионально занимаюсь вокалом и выступаю на сцене с 2004 г</li>
                    <li>Преподаю с 2017 г</li>
                    <li>Участница телевизионного проекта “Голос 3” на Первом канале, команда Александра Градского</li>
                    <li>Лауреат и обладатель Гран-При республиканских, всероссийских и международных конкурсов в номинациях эстрадный вокал, академический вокал и скрипка (Украина, Эстония, Болгария, Египет, г. Москва, г. Санкт-Петербург, г. Казань, г. Сыктывкар)</li>
                    <li>По представлению редакции энциклопедии «Лучшие люди России» и общественно-консультационного совета награждена медалью в номинации «Им принадлежит будущее» и включена в энциклопедию «Одаренные дети – будущее России» в 2008 г.</li>
                </ul>
                <MyPerformance/>
                <Title title={'Моя квалификация (через +)'}/>
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
                <Title title={'С кем сотрудничала'}/>
                <ul>
                    <li>С Сергеем Волчковым (победитель шоу «Голос 2») и оркестром ФСБ</li>
                    <li>С Александром Градским и оркестром «Фонограф» </li>
                    <li>С каналами «Первый канал», ТНВ, Первый городской телеканал в Казани, Луч, 24 Альметьевск ТВ</li>
                    <li>С оркестром народных инструментов г. Альметьевска </li>
                </ul>
                <MyPerformance/>
                <Title title={'Пой так, чтобы соседи хлопали, а не стучали!'}/>
            </div>
        </motion.div>
    );
};

export default VocalLessons;