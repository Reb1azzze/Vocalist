import React from 'react';
import styles from './MainInformation.module.scss'
import {eightNoteSvg} from "../../assets/svg/eightNoteSvg";
import Icon from '@ant-design/icons';

const MainInformation = () => {
    return (
        <div className={styles.mainContainer}>
            Привет! <br/>
            eorghoerhgieorgihoerhgwefwef
            oerhgwoehirowehrgoiewhrogihweohrg
            we'orgijeoprijgoiajsoigjiorjoigjr
            ;oeqihrgohaouhsnfjwuehrg
            oerihgjoeaihrgo;iao;sdhgi
            erwigjoiewrgjoejrg ewroghoewrhg
            <Icon component={eightNoteSvg} className='rating-svg' />
        </div>
    );
};

export default MainInformation;