import React from 'react';
import work_experience from '../../assets/jpg/work_experience.png'
import education from '../../assets/jpg/education.png'
import languages from '../../assets/jpg/languages.png'
import chat from '../../assets/jpg/chat.png'
import styles from './SpecificInfromation.module.scss'

const SpecificInformation = () => {
    return (
        <div className={styles.specificContainer}>
            <div className={styles.whyMe}>
                <h3>Почему я?</h3><br/>
            Давайте познакомимся поближе!
            </div>
            <div className={styles.specificItem}>
                <img src={education} className={styles.specificIcon} alt={''}/>
                <h4 className={styles.specificItemTitle}>Образование</h4>
                <div className={styles.specificItemText}>
                    В 2019 году закончила бакалавриат в Волгоградском Государственном Социально-Педагогическом
                    Университете по направлению "Педагогическое образование с двумя профилями подготовки (китайский,
                    английский язык)", а в 2022 году — магистратуру в Гуандонском Университете Иностранных Языков и
                    Внешней Торговли по направлению "Лингвистика иностранного языка и прикладная лингвистика".
                </div>
            </div>
            <div className={styles.specificItem}>
                <img src={work_experience} className={styles.specificIcon} alt={''}/>
                <h4 className={styles.specificItemTitle}>Опыт работы</h4>
                <div className={styles.specificItemText}>
                    В 2019 году закончила бакалавриат в Волгоградском Государственном Социально-Педагогическом
                    Университете по направлению "Педагогическое образование с двумя профилями подготовки (китайский,
                    английский язык)", а в 2022 году — магистратуру в Гуандонском Университете Иностранных Языков и
                    Внешней Торговли по направлению "Лингвистика иностранного языка и прикладная лингвистика".
                </div>
            </div>
            <div className={styles.specificItem}>
                <img src={languages} className={styles.specificIcon} alt={''}/>
                <h4 className={styles.specificItemTitle}>Уровень языка</h4>
                <div className={styles.specificItemText}>
                    В 2019 году закончила бакалавриат в Волгоградском Государственном Социально-Педагогическом
                    Университете по направлению "Педагогическое образование с двумя профилями подготовки (китайский,
                    английский язык)", а в 2022 году — магистратуру в Гуандонском Университете Иностранных Языков и
                    Внешней Торговли по направлению "Лингвистика иностранного языка и прикладная лингвистика".
                </div>
            </div>
            <div className={styles.specificItem}>
                <img src={chat} className={styles.specificIcon} alt={''}/>
                <h4 className={styles.specificItemTitle}>Индивидуальный подход</h4>
                <div className={styles.specificItemText}>
                    В 2019 году закончила бакалавриат в Волгоградском Государственном Социально-Педагогическом
                    Университете по направлению "Педагогическое образование с двумя профилями подготовки (китайский,
                    английский язык)", а в 2022 году — магистратуру в Гуандонском Университете Иностранных Языков и
                    Внешней Торговли по направлению "Лингвистика иностранного языка и прикладная лингвистика".
                </div>
            </div>
        </div>
    );
};

export default SpecificInformation;