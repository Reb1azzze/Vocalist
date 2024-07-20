import React, { useState } from 'react';
import styles from './ChatForm.module.scss'
import ChatBackground from "../../assets/jpg/ChatForm.jpg"
import {Input, Button, Select} from "antd";
import BlurredTextBlock from "../BlurredTextBlock/BlurredTextBlock";

interface ChatFormProps {
    minimize?: boolean
    DarkBackground?:() => void;
    LightBackground?:() => void;
    isChosen?: boolean;
}
const ChatForm = (props : ChatFormProps) => {

    const [value, setValue] = useState('lesson');
    const onChange = (e: any) => {
        setValue(e);
    };

    return (
        <div className={styles.container + ' ' + (props.isChosen? styles.darkBackground : '')}
             style={{backgroundImage: `url(${ChatBackground})`}}
             onMouseEnter={props.DarkBackground}
             onMouseLeave={props.LightBackground}>
            <div className={styles.form + ' ' + (props.minimize? styles.minimizeForm : styles.maximizeForm)}>
                <BlurredTextBlock title={'Заявка'} star={true}/>
                <Select onChange={onChange} value={value} defaultValue= "lesson" options={[
                        {
                            value: 'lesson',
                            label: 'Записаться на урок',
                        },
                        {
                            value: 'performance',
                            label: 'Заказать перфоманс',
                        }]}>
                </Select>
                <Input className={styles.input} type='text' placeholder='Имя'/>
                <Input className={styles.input} type='text' placeholder='Номер телефона'/>
                <Button className={styles.submitButton} type='primary'>Перезвоните мне!</Button>
            </div>
        </div>
    );
};

export default ChatForm;