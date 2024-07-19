import React, { useState } from 'react';
import styles from './ChatForm.module.scss'
import ChatBackground from "../../assets/jpg/ChatForm.jpg"
import { Input, Space, Button, Radio} from "antd";
import AnimatedStar from "../AnimatedStar/AnimatedStar";

interface ChatFormProps {
    minimize: boolean
    DarkBackground:() => void;
    LightBackground:() => void;
    isChosen: boolean;
}
const ChatForm = (props : ChatFormProps) => {

    const [value, setValue] = useState(1);
    const onChange = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <div className={styles.container + ' ' + (props.isChosen? styles.darkBackground : '')}
             style={{backgroundImage: `url(${ChatBackground})`}}
             onMouseEnter={props.DarkBackground}
             onMouseLeave={props.LightBackground}>
            <div className={styles.form + ' ' + (props.minimize? styles.minimizeForm : styles.maximizeForm)}>
                <div className={styles.innerBlock}>
                    <span className={styles.title}>Заявка</span>
                </div>
                <Radio.Group className={styles.radioGroup} onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio className={styles.radio} value={1}>Записаться на урок</Radio>
                        <Radio className={styles.radio} value={2}>Заказать Перфоманс</Radio>
                    </Space>
                </Radio.Group>
                <Input className={styles.input} type='text' placeholder='Имя'/>
                <Input className={styles.input} type='text' placeholder='Номер телефона'/>
                <Button className={styles.submitButton} size="large" type='primary'>Перезвоните мне!</Button>
            </div>
        </div>
    );
};

export default ChatForm;