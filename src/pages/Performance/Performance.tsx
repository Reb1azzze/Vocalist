import React from 'react';
import {motion} from "framer-motion";
import ReactPlayer from "react-player";
import {Carousel, Collapse, CollapseProps} from "antd";
import BlurredTextBlock from "../../components/BlurredTextBlock/BlurredTextBlock";
import ChatForm from "../../components/ChatForm/ChatForm";
import Title from "../../components/Title/Title";
import styles from "../MyWay/MyWay.module.scss";
import performance1 from "../../assets/jpg/performance1.jpg"
import performance2 from "../../assets/jpg/performance2.jpg"
import performance3 from "../../assets/jpg/performance3.jpg"
import performance4 from "../../assets/jpg/performance4.jpg"
import performance5 from "../../assets/jpg/performance5.jpg"
import performance6 from "../../assets/jpg/performance6.jpg"
import performance7 from "../../assets/jpg/performance7.jpg"
import performance8 from "../../assets/jpg/performance8.jpg"
import performance9 from "../../assets/jpg/performance9.jpg"
import performance10 from "../../assets/jpg/performance10.jpg"
import performance11 from "../../assets/jpg/performance11.jpg"
import performance12 from "../../assets/jpg/performance12.jpg"
import performance13 from "../../assets/jpg/performance13.jpg"
import performance14 from "../../assets/jpg/performance14.jpg"
import performance15 from "../../assets/jpg/performance15.jpg"
import performance16 from "../../assets/jpg/performance16.jpg"
import performance17 from "../../assets/jpg/performance17.jpg"
import performance18 from "../../assets/jpg/performance18.jpg"
import performance19 from "../../assets/jpg/performance19.jpg"
import performance20 from "../../assets/jpg/performance20.jpg"
import PerformanceJPG from "../../assets/jpg/Performance.jpg";

const Performance = () => {
    let pc = window.matchMedia("(min-width: 1200px)").matches;

    let perf1 = <ul><li>Ed Sheeran</li></ul>
    let perf2 =
        <ul>
            <li>Титаник</li>
            <li>Телохранитель</li>
            <li>Привидение</li>
            <li>Аватар</li>
        </ul>
    let perf3 =
        <ul>
            <li>Властелин колец</li>
            <li>Игра престолов</li>
            <li>Ведьмак</li>
        </ul>
    let perf4 =
        <ul>
            <li>Призрак оперы</li>
            <li>Ла-ла лэнд</li>
            <li>Величайший шоумэн</li>
        </ul>
    let perf5 =
        <ul>
            <li>Полина Гагарина</li>
            <li>Анна Аsti</li>
        </ul>
    let perf6 =
        <ul>
            <li>Анна Герман</li>
            <li>Алла Пугачева</li>
            <li>Иосиф Кобзон</li>
        </ul>
    let perf7 =
        <ul>
            <li>Гладиатор</li>
            <li>Голодные игры</li>
        </ul>
    let perf8 =
        <ul>
            <li>Abba</li>
            <li>Modern Talking</li>
        </ul>
    let perf9 =
        <ul>
            <li>Time to say goodbye</li>
            <li>O mio babbino caro</li>
            <li>The prayer</li>
            <li>Ain’t No Mountain High Enough</li>
            <li>Skyfall</li>
        </ul>
    let perf10 =
        <ul>
            <li>Сююмбике</li>
            <li>Зэнгэр томан</li>
        </ul>
    let perf11 =
        <ul>
            <li>Abba - Happy New Year</li>
            <li>Last Christmas</li>
        </ul>

    const collapsePerformance: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Свадебная',
            children: perf1,
        },
        {
            key: '2',
            label: 'Саундтреки к любимым драмам',
            children: perf2,
        },
        {
            key: '3',
            label: 'Эпическая вселенная',
            children: perf3,
        },
        {
            key: '4',
            label: 'Мюзиклы',
            children: perf4,
        },
        {
            key: '5',
            label: 'Современные русские хиты',
            children: perf5,
        },
        {
            key: '6',
            label: 'Классическая русская эстрада',
            children: perf6,
        },
        {
            key: '7',
            label: 'Вселенная Ханса Циммера',
            children: perf7,
        },
        {
            key: '8',
            label: 'Ретро-хиты 90-х',
            children: perf8,
        },
        {
            key: '9',
            label: 'Шоу поющих фонтанов в Дубае',
            children: perf9,
        },
        {
            key: '10',
            label: 'Татарская лирика',
            children: perf10,
        },
        {
            key: '11',
            label: 'Новогодние песни',
            children: perf11,
        },
    ];

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
                <Carousel className={styles.slider} arrows={true} draggable={true} autoplay={true} dotPosition='top' adaptiveHeight={true}>
                    <img src={performance1} alt={''}/>
                    <img src={performance2} alt={''}/>
                    <img src={performance3} alt={''}/>
                    <img src={performance4} alt={''}/>
                    <img src={performance5} alt={''}/>
                    <img src={performance6} alt={''}/>
                    <img src={performance7} alt={''}/>
                    <img src={performance8} alt={''}/>
                    <img src={performance9} alt={''}/>
                    <img src={performance10} alt={''}/>
                </Carousel>
                <Title title={'Что будет на Перфоманс?'}/>
                <div className={styles.lessonInfo}>
                    <div className={styles.font}>
                        <p>100% живой и качественный вокал</p>
                        <p>Незабываемые эмоции</p>
                        <p>Тематические программы</p>
                        <p>Стильные образы</p>
                        <p>Репертуар на разных языках</p>
                    </div>
                </div>
                <Title title={'Закажите потрясающий Перфоманс в любую точку мира!'}/>
                <div className={styles.playerGrid}>
                    <ReactPlayer width={'100%'} height={'100%'} controls={true}
                                 url={'https://youtu.be/wxqiNV_uEmY?si=mdaDCvThaQMC8WW0'}/>
                    <ReactPlayer width={'100%'} height={'100%'}
                                 url={'https://www.youtube.com/watch?v=BSx05DOPcLA&ab_channel=Gulshat%F0%9F%8E%B6'}/>
                    <ReactPlayer width={'100%'} height={'100%'}
                                 url={'https://www.youtube.com/shorts/N0C3e8cKPDM'}/>
                    <ReactPlayer width={'100%'} height={'100%'}
                                 url={'https://www.youtube.com/watch?v=ONPA13lT12g&ab_channel=Gulshat%F0%9F%8E%B6'}/>
                    <ReactPlayer width={'100%'} height={'100%'} className={styles.playerGridLastChild}
                                 url={'https://youtu.be/CraWcGulk9w'}/>
                </div>
                <Title title={'Музыкальные программы, которые сделают Ваше мероприятие неповторимым:'}/>
                <Collapse items={collapsePerformance} size={"large"}/>
                <Carousel className={styles.slider} arrows={true} draggable={true} autoplay={true} dotPosition='top' adaptiveHeight={true}>
                    <img src={performance11} alt={''}/>
                    <img src={performance12} alt={''}/>
                    <img src={performance13} alt={''}/>
                    <img src={performance14} alt={''}/>
                    <img src={performance15} alt={''}/>
                    <img src={performance16} alt={''}/>
                    <img src={performance17} alt={''}/>
                    <img src={performance18} alt={''}/>
                    <img src={performance19} alt={''}/>
                    <img src={performance20} alt={''}/>
                </Carousel>
                <Title title={'На какое мероприятие подойдет Перформанс?'}/>
                <div className={styles.performanceGrid}>
                    <span className={styles.textBlockOnGrid}>Свадьба</span>
                    <span className={styles.textBlockOnGrid}>Выпускной</span>
                    <span className={styles.textBlockOnGrid}>Корпоратив</span>
                    <span className={styles.textBlockOnGrid}>День рождения (юбилей)</span>
                    <span className={styles.textBlockOnGrid}>Новый год</span>
                    <span className={styles.textBlockOnGrid}>Городские мероприятия</span>
                </div>
                <Title title={'Сделаем ваш праздник незабываемым!'}/>
            </div>
        </motion.div>
    );
};

export default Performance;