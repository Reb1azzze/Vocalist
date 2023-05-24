import React from 'react';
import NoteBlock from "../NoteBlock/NoteBlock";
import styles from './Notes.module.scss';
import NoteConnector from "../NoteConnector/NoteConnector";
import TopConnector from "../NoteConnector/TopConnector";
const Notes = () => {
    return (
        <div className={styles.body}>
            <NoteBlock className={styles.firstBlock} title={"Образование"} text={"В 2019 году закончила бакалавриат в" +
                " Волгоградском Государственном" +
                " Социально-Педагогическом Университете по направлению \"Педагогическое образование с двумя профилями" +
                " подготовки (китайский, английский язык)\""}/>
            <NoteBlock className={styles.secondBlock} title={"Опыт работы"} text={"В 2019 году закончила бакалавриат в Волгоградском" +
                " Государственном Социально-Педагогическом\n" +
                "Университете по направлению \"Педагогическое образование с двумя профилями подготовки (китайский,\n" +
                "английский язык)\","}/>
            <NoteConnector left={'290px'} top={'1100px'}/>
            <NoteConnector left={'990px'} top={'1200px'}/>
            <TopConnector/>
        </div>
    );
};

export default Notes;